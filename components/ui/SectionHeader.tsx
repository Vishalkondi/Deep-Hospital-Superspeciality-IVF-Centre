import React from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const itemsClasses = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  return (
    <div
      className={`flex flex-col ${itemsClasses[align]} ${alignClasses[align]} ${className}`}
    >
      {label && (
        <span
          className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-teal-heal" : "text-teal-heal"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-deep-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            light ? "text-slate-300" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-16 h-1 rounded-full ${
          align === "center" ? "mx-auto" : ""
        } bg-teal-heal`}
      />
    </div>
  );
}

export default SectionHeader;
