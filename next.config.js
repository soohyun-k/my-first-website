/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: '/',
  trailingSlash: true,
  basePath: ''
}

module.exports = nextConfig
