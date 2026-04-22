import type { NextConfig } from "next";

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
};

export default nextConfig;
