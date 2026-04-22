import type { NextConfig } from "next";

const STUDIO_URL = "https://toolia.studio.voler.ai";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Landing at root → serve public/landing.html
        {
          source: "/",
          destination: "/landing.html",
        },
      ],
    };
  },
  async redirects() {
    return [
      // I link /login e /register nella landing vanno allo Studio
      { source: "/login", destination: STUDIO_URL, permanent: false },
      { source: "/register", destination: STUDIO_URL, permanent: false },
    ];
  },
};

export default nextConfig;
