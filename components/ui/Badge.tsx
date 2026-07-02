import React from "react";

type BadgeVariant = "blue" | "teal" | "gold" | "grey" | "red" | "green";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: "bg-blue-100 text-medical-blue",
  teal: "bg-teal-100 text-teal-heal",
  gold: "bg-amber-100 text-gold-trust",
  grey: "bg-soft-grey text-text-muted",
  red: "bg-red-100 text-emergency-red",
  green: "bg-green-100 text-green-700",
};

export function Badge({
  children,
  variant = "grey",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
