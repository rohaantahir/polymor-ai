"use server";

import nodemailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";

const createTransporter = async () => {
  const oauth2Client = new OAuth2Client(
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLIENT_SECRET,
    process.env.NEXT_PUBLIC_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.log("*ERR: ", err);
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
      accessToken,
    },
  });

  return transporter;
};

export const sendEmail = async (formData: {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}) => {
  const { name, email, company, interest, message } = formData;

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: `New Contact Form Submission - ${interest}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const transporter = await createTransporter();

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
