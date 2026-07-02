import React from "react";
import { HOSPITAL_INFO } from "@/lib/constants";

interface MapEmbedProps {
  height?: string;
  className?: string;
  title?: string;
}

export function MapEmbed({
  height = "400px",
  className = "",
  title = "Deep Superspeciality Hospital Location",
}: MapEmbedProps) {
  return (
    <div className={`w-full overflow-hidden rounded-lg ${className}`}>
      <iframe
        src={HOSPITAL_INFO.mapEmbed}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        aria-label={title}
      />
    </div>
  );
}

export default MapEmbed;
