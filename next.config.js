const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'three29.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'github-profile-summary-cards.vercel.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '**',
      },
    ],
  },
}
