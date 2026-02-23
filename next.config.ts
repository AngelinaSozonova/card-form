import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://app.tablecrm.com" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://yourdomain.com" },
          { key: "Vary", value: "Origin" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/tablecrm/:path*",
        destination: "https://app.tablecrm.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;