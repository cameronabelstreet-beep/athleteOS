"use client";

import { Widget } from "@typeform/embed-react";
import { siteConfig } from "@/lib/content";

/** The Typeform embedded INLINE (not a popup) for the /apply page. */
export function ApplyEmbed() {
  return (
    <Widget
      id={siteConfig.typeformId}
      className="w-full overflow-hidden rounded-2xl border border-line"
      style={{ height: "42rem" }}
    />
  );
}
