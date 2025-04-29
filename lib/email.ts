"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

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
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
