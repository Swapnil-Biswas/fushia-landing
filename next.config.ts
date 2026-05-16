import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
