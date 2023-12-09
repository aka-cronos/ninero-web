/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es-mx'],
    defaultLocale: 'es-mx',
  },
  async rewrites() {
    return [
      {
        // proxy calls from /payload to the payload endpoint
        source: '/payload/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
