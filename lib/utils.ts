// Simple cn utility - no external dependency needed
type ClassValue = string | number | boolean | null | undefined | { [key: string]: boolean };

export function cn(...classes: ClassValue[]): string {
  return classes
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === "string") return cls;
      if (typeof cls === "object" && cls !== null) {
        return Object.entries(cls as { [key: string]: boolean })
          .filter(([, val]) => Boolean(val))
          .map(([key]) => key)
          .join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ")
    .trim();
}

export function formatPhone(phone: string): string {
  return phone;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
