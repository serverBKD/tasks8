import million from "million/compiler";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/serverbkd-trifaxic-ts.appspot.com/o/**",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
    ],
  },
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
    },
  },
};

export default million.next(nextConfig, { auto: { rsc: true } });
