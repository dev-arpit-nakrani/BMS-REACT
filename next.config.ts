import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, // false = 307, true = 308
      }
    ]
  },
}

export default nextConfig
