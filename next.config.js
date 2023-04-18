// paste into next.config.js in your root project directory
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'ist-363-subaru-spring-2023.local',
        },
        {
            protocol: 'https',
            hostname: 'subaru.ist363.xyz',
        }
      ],
    },
  }