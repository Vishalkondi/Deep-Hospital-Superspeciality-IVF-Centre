import React from "react";
import Image from "next/image";
import { Stethoscope } from "lucide-react";
import type { Doctor } from "@/lib/constants";

interface DoctorAvatarProps {
  doctor: Pick<Doctor, "name" | "initials" | "department" | "imageUrl">;
  className?: string;
  imageClassName?: string;
  size?: "sm" | "md" | "lg";
}

const departmentGradients: Record<string, string> = {
  "Fertility Specialists": "linear-gradient(135deg, #0D9488 0%, #0A1628 100%)",
  Urologists: "linear-gradient(135deg, #1B4FD8 0%, #0A1628 100%)",
  "Critical Care": "linear-gradient(135deg, #0A1628 0%, #1B4FD8 60%, #0D9488 100%)",
  Surgeons: "linear-gradient(135deg, #0A1628 0%, #1B4FD8 100%)",
};

const sizeClasses: Record<NonNullable<DoctorAvatarProps["size"]>, string> = {
  sm: "text-base font-bold",
  md: "text-3xl sm:text-4xl font-bold",
  lg: "text-4xl sm:text-5xl font-bold",
};

/**
 * Renders a doctor's real photo if `imageUrl` is supplied, otherwise falls back
 * to an elegant initials monogram in brand colours. We don't have real headshots
 * for the named doctors yet, so this is the default — set `doctor.imageUrl` once
 * professional photos are available and this will switch over automatically.
 */
export function DoctorAvatar({
  doctor,
  className = "",
  imageClassName = "",
  size = "lg",
}: DoctorAvatarProps) {
  if (doctor.imageUrl) {
    return (
      <div className={`${className} overflow-hidden`}>
        <div className="relative w-full h-full">
          <Image
            src={doctor.imageUrl}
            alt={doctor.name}
            fill
            className={`object-cover object-top ${imageClassName}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    );
  }

  const gradient =
    departmentGradients[doctor.department] ?? departmentGradients["Fertility Specialists"];

  return (
    <div className={`${className} overflow-hidden`} role="img" aria-label={doctor.name}>
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, white 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <span className={`font-display text-white tracking-wide ${sizeClasses[size]}`}>
          {doctor.initials}
        </span>
        {size !== "sm" && (
          <Stethoscope
            className="absolute bottom-3 right-3 w-5 h-5 text-white/30"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

export default DoctorAvatar;
