"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendEmail } from "@/lib/email";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          interest: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="container mx-auto py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Contact Us
        </Badge>
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="max-w-[600px] mx-auto text-lg text-white/70">
          Have questions about our products or partnership opportunities? We'd
          love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <motion.div variants={itemVariants}>
          <Card className="rounded-none border border-white/10 bg-transparent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  {/* <h3 className="text-lg font-medium mb-2">Inquiries</h3> */}
                  <a
                    href="mailto:contact@polymor.ai"
                    className="text-themeBlue hover:underline"
                  >
                    contact@polymor.ai
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Global Offices</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Singapore</h3>
                    <p className="text-white/70">
                      5 Shenton Way, UIC Building #10-01
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Hong Kong</h3>
                    <p className="text-white/70">
                      Unit E, 31/F, Tower B, Billion Centre, Kowloon Bay
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Shenzhen</h3>
                    <p className="text-white/70">
                      Unit 1705, 17/F, Seaview Plaza, Shekou, Nanshan
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Shanghai</h3>
                    <p className="text-white/70">
                      Building TA, Wanxiang Enterprise Center, 208 Haojing Road,
                      Minhang
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Las Vegas</h3>
                    <p className="text-white/70">
                      1050 E Flamingo Road, Las Vegas, Nevada, USA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="rounded-none border border-white/10 bg-transparent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-transparent border-white/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block mb-2 text-sm font-medium"
                  >
                    I'm interested in
                  </label>
                  <Select
                    value={formData.interest}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="bg-transparent border-white/20">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="polyedge">PolyEdge</SelectItem>
                      <SelectItem value="polypod">Polypod</SelectItem>
                      <SelectItem value="polyrack">Polyrack</SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunities
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-white/20 min-h-[120px]"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded">
                    There was an error sending your message. Please try again
                    later.
                  </div>
                )}

                <Button
                  type="submit"
                  className="rounded-none px-8 h-12 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-medium w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
