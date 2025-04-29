"use client";

import type React from "react";

import { useState } from "react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    });
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <Badge className="font-normal mb-6 text-themeBlue bg-themeBlue/10 hover:bg-themeBlue/15">
          Contact Us
        </Badge>
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="max-w-[600px] mx-auto text-lg text-white/70">
          Have questions about our products or partnership opportunities? We'd
          love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card className="rounded-none border border-white/10 bg-transparent">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Sales</h3>
                <a
                  href="mailto:business@polymor.ai"
                  className="text-themeBlue hover:underline"
                >
                  business@polymor.ai
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Investor Relations</h3>
                <a
                  href="mailto:investor@polymor.ai"
                  className="text-themeBlue hover:underline"
                >
                  investor@polymor.ai
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">General Inquiries</h3>
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
              </div>
            </div>
          </CardContent>
        </Card>

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
                    <SelectItem value="polynode">Polynode</SelectItem>
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

              <Button
                type="submit"
                className="rounded-none px-8 h-12 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-medium w-full"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
