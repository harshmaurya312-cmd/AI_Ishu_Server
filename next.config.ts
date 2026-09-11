import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to be accessed over the local network (e.g. when you
  // open http://192.168.x.x:3000 from another device). Add your own LAN IP here
  // if you see the "Blocked cross-origin request" warning in `npm run dev`.
  allowedDevOrigins: [
    "192.168.56.1",
    "192.168.1.102",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
