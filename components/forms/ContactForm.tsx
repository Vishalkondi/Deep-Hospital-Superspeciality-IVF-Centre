"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .max(13, "Enter a valid phone number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const departments = [
  "General Enquiry",
  "IVF & Fertility",
  "Urology",
  "Critical Care & Surgery",
  "Obstetrics & Gynaecology",
  "Appointment Booking",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form data:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg border border-soft-grey p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-heal/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-teal-heal" />
        </div>
        <h3 className="font-display text-xl font-bold text-deep-navy mb-2">
          Message Sent!
        </h3>
        <p className="text-text-muted mb-6">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-medical-blue font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg border border-soft-grey p-6 sm:p-8"
      noValidate
      aria-label="Contact form"
    >
      <h3 className="font-display text-xl font-bold text-deep-navy mb-6">
        Send Us a Message
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-text-primary mb-1.5"
          >
            Full Name <span className="text-emergency-red">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            {...register("name")}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-sm text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue transition-shadow ${
              errors.name ? "border-emergency-red" : "border-soft-grey"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-emergency-red" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-text-primary mb-1.5"
          >
            Phone Number <span className="text-emergency-red">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            placeholder="10-digit mobile number"
            className={`w-full px-4 py-3 border rounded-sm text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue transition-shadow ${
              errors.phone ? "border-emergency-red" : "border-soft-grey"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-emergency-red" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-text-primary mb-1.5"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            {...register("email")}
            placeholder="your@email.com (optional)"
            className={`w-full px-4 py-3 border rounded-sm text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue transition-shadow ${
              errors.email ? "border-emergency-red" : "border-soft-grey"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-emergency-red" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Department */}
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-department"
            className="block text-sm font-semibold text-text-primary mb-1.5"
          >
            Department / Query Type <span className="text-emergency-red">*</span>
          </label>
          <select
            id="contact-department"
            {...register("department")}
            className={`w-full px-4 py-3 border rounded-sm text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue transition-shadow bg-white ${
              errors.department ? "border-emergency-red" : "border-soft-grey"
            }`}
          >
            <option value="">Select department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="mt-1 text-xs text-emergency-red" role="alert">
              {errors.department.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-text-primary mb-1.5"
          >
            Message <span className="text-emergency-red">*</span>
          </label>
          <textarea
            id="contact-message"
            {...register("message")}
            placeholder="Describe your query or concern..."
            rows={4}
            className={`w-full px-4 py-3 border rounded-sm text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue transition-shadow resize-none ${
              errors.message ? "border-emergency-red" : "border-soft-grey"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-emergency-red" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
