import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-white rounded-lg border border-soft-grey ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
    >
      {children}
    </div>
  );
}

export default Card;
