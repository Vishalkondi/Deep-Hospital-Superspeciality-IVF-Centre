"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "emergency" | "outline" | "teal";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-medical-blue text-white hover:bg-blue-700 focus-visible:outline-medical-blue",
  ghost:
    "border-2 border-white text-white hover:bg-white hover:text-deep-navy",
  emergency:
    "bg-emergency-red text-white hover:bg-red-700 focus-visible:outline-emergency-red",
  outline:
    "border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white",
  teal:
    "bg-teal-heal text-white hover:bg-teal-700 focus-visible:outline-teal-heal",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
    const radiusClass = "rounded-sm"; // 4px border radius per design
    const classes = `${baseClasses} ${radiusClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
