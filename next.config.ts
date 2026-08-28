import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
    return [
      { source: '/o-livro', destination: '/book' },
      { source: '/sobre', destination: '/about' },
      { source: '/contato', destination: '/contact' },
    ]
  }
};

export default nextConfig;
