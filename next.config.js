/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

/*
I don't seems to need to add this setting to get mongoose to work...

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

* */
