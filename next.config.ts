import { Domain } from "domain";
import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com",
        
      },
      {
        hostname: "ik.imagekit.io",
        protocol:"https",

      }
       

    ],
    
  }
};

export default nextConfig;
