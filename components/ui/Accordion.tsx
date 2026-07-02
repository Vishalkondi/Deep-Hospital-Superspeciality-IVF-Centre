"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({
  items,
  className = "",
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div
            key={index}
            className="border border-soft-grey rounded-lg overflow-hidden"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-warm-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-medical-blue focus-visible:outline-offset-2"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-text-primary pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`flex-shrink-0 w-5 h-5 text-text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 py-4 text-text-muted leading-relaxed bg-warm-white border-t border-soft-grey">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
