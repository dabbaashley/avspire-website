import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({ url: `https://avspire.com${l.href === "/" ? "" : l.href}` }));
}
