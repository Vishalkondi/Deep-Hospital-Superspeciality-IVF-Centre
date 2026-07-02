"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Stethoscope,
} from "lucide-react";
import { DOCTORS } from "@/lib/constants";

const step1Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required").refine(
    (val) => {
      const num = parseInt(val);
      return num > 0 && num < 120;
    },
    { message: "Enter a valid age" }
  ),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
});

const step2Schema = z.object({
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().optional(),
});

const step3Schema = z.object({
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
  message: z.string().optional(),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type FormData = z.infer<typeof fullSchema>;

const departments = [
  "IVF & Fertility",
  "Urology",
  "Obstetrics & Gynaecology",
  "Critical Care",
  "General Surgery",
  "Anaesthesiology",
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
];

const stepTitles = [
  "Personal Details",
  "Department & Doctor",
  "Schedule",
  "Confirmation",
];

export function AppointmentForm({ prefilledDoctor }: { prefilledDoctor?: string }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber] = useState(
    () => `DH-${Date.now().toString().slice(-6)}`
  );

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      doctor: prefilledDoctor || "",
    },
  });

  const watchedValues = watch();

  const validateAndNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    if (currentStep === 1) {
      fieldsToValidate = ["name", "age", "phone", "email"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["department"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["date", "time"];
    }

    const valid = await trigger(fieldsToValidate);
    if (valid) setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Appointment booked:", data);
    setSubmitted(true);
  };

  // Get min date (today)
  const minDate = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="bg-white rounded-lg border border-soft-grey p-8 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-full bg-teal-heal/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10 text-teal-heal" />
        </div>
        <h3 className="font-display text-2xl font-bold text-deep-navy mb-2">
          Appointment Requested!
        </h3>
        <p className="text-text-muted mb-3">
          Your appointment request has been received. Our team will call you
          within 2 hours to confirm.
        </p>
        <div className="bg-soft-grey rounded-sm px-4 py-3 mb-5">
          <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
            Reference Number
          </p>
          <p className="font-bold text-deep-navy text-lg">{referenceNumber}</p>
        </div>
        <p className="text-sm text-text-muted">
          For immediate assistance:{" "}
          <a
            href="tel:02172727224"
            className="text-medical-blue font-semibold hover:underline"
          >
            0217-2727224
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-soft-grey overflow-hidden">
      {/* Progress Bar */}
      <div className="px-6 pt-6 pb-0">
        <div className="flex items-center justify-between mb-2">
          {stepTitles.map((title, index) => {
            const stepNum = index + 1;
            const isCompleted = currentStep > stepNum;
            const isActive = currentStep === stepNum;
            return (
              <div
                key={title}
                className={`flex flex-col items-center text-center flex-1 ${
                  index < stepTitles.length - 1 ? "relative" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    isCompleted
                      ? "bg-teal-heal text-white"
                      : isActive
                      ? "bg-medical-blue text-white"
                      : "bg-soft-grey text-text-muted"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                </div>
                <span
                  className={`mt-1 text-xs font-medium hidden sm:block ${
                    isActive ? "text-medical-blue" : "text-text-muted"
                  }`}
                >
                  {title}
                </span>
                {/* Connector line */}
                {index < stepTitles.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-0.5 -z-10 ${
                      isCompleted ? "bg-teal-heal" : "bg-soft-grey"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-4 mb-6 h-1 bg-soft-grey rounded-full">
          <div
            className="h-full bg-medical-blue rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="px-6 pb-6">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-medical-blue" />
                Personal Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">
                    Full Name <span className="text-emergency-red">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue ${
                      errors.name ? "border-emergency-red" : "border-soft-grey"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-emergency-red" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">
                    Age <span className="text-emergency-red">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    {...register("age")}
                    placeholder="Your age"
                    className={`w-full px-4 py-3 border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue ${
                      errors.age ? "border-emergency-red" : "border-soft-grey"
                    }`}
                  />
                  {errors.age && (
                    <p className="mt-1 text-xs text-emergency-red" role="alert">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">
                    Phone <span className="text-emergency-red">*</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    {...register("phone")}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue ${
                      errors.phone ? "border-emergency-red" : "border-soft-grey"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-emergency-red" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    placeholder="Optional"
                    className="w-full px-4 py-3 border border-soft-grey rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Department & Doctor */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-medical-blue" />
                Department &amp; Doctor
              </h3>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Department <span className="text-emergency-red">*</span>
                </label>
                <select
                  {...register("department")}
                  className={`w-full px-4 py-3 border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue bg-white ${
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

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Preferred Doctor (Optional)
                </label>
                <select
                  {...register("doctor")}
                  className="w-full px-4 py-3 border border-soft-grey rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue bg-white"
                >
                  <option value="">No preference</option>
                  {DOCTORS.map((doctor) => (
                    <option key={doctor.slug} value={doctor.name}>
                      {doctor.name} — {doctor.speciality}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Schedule */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-medical-blue" />
                Schedule Your Visit
              </h3>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Preferred Date <span className="text-emergency-red">*</span>
                </label>
                <input
                  type="date"
                  {...register("date")}
                  min={minDate}
                  className={`w-full px-4 py-3 border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue ${
                    errors.date ? "border-emergency-red" : "border-soft-grey"
                  }`}
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-emergency-red" role="alert">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-2">
                  Preferred Time Slot <span className="text-emergency-red">*</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2" role="group" aria-label="Select time slot">
                  {timeSlots.map((slot) => (
                    <label key={slot} className="cursor-pointer">
                      <input
                        type="radio"
                        {...register("time")}
                        value={slot}
                        className="sr-only"
                      />
                      <div
                        className={`px-2 py-2 text-xs text-center border rounded-sm transition-colors ${
                          watchedValues.time === slot
                            ? "bg-medical-blue text-white border-medical-blue"
                            : "border-soft-grey text-text-muted hover:border-medical-blue hover:text-medical-blue"
                        }`}
                      >
                        <Clock className="w-3 h-3 mx-auto mb-0.5" />
                        {slot}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.time && (
                  <p className="mt-1 text-xs text-emergency-red" role="alert">
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Additional Notes (Optional)
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Describe your symptoms or any specific concerns..."
                  rows={3}
                  className="w-full px-4 py-3 border border-soft-grey rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-deep-navy mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-heal" />
                Confirm Your Appointment
              </h3>

              <div className="bg-warm-white rounded-sm border border-soft-grey divide-y divide-soft-grey">
                {[
                  { label: "Name", value: watchedValues.name, icon: User },
                  { label: "Age", value: watchedValues.age ? `${watchedValues.age} years` : "", icon: User },
                  { label: "Phone", value: watchedValues.phone, icon: Phone },
                  { label: "Email", value: watchedValues.email || "Not provided", icon: Mail },
                  { label: "Department", value: watchedValues.department, icon: Stethoscope },
                  { label: "Doctor", value: watchedValues.doctor || "No preference", icon: Stethoscope },
                  { label: "Date", value: watchedValues.date, icon: Calendar },
                  { label: "Time", value: watchedValues.time, icon: Clock },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3">
                    <Icon className="w-4 h-4 text-text-muted flex-shrink-0" />
                    <span className="text-sm text-text-muted w-24 flex-shrink-0">{label}</span>
                    <span className="text-sm font-medium text-text-primary">{value}</span>
                  </div>
                ))}
              </div>

              {watchedValues.message && (
                <div className="bg-warm-white rounded-sm border border-soft-grey p-4">
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Notes</p>
                  <p className="text-sm text-text-primary">{watchedValues.message}</p>
                </div>
              )}

              <p className="text-xs text-text-muted">
                By confirming, you agree to be contacted by our team to finalize your appointment.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="flex items-center gap-2 px-5 py-3 border border-soft-grey text-text-muted font-semibold rounded-sm hover:bg-soft-grey transition-colors text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          )}

          <div className="flex-1" />

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={validateAndNext}
              className="flex items-center gap-2 px-6 py-3 bg-medical-blue text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors text-sm"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 bg-teal-heal text-white font-semibold rounded-sm hover:bg-teal-700 transition-colors disabled:opacity-60 text-sm"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Confirming...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Confirm Appointment
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
