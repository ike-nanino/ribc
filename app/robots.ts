

// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/sign-in",
        "/api",
        "/_next",
        "/*" // blocks all other routes
      ],
    },
    sitemap: `https:royalinvestmentsbank.com/sitemap.xml`,
  };
}
