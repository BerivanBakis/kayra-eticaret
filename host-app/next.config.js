const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'hostApp',  // Bu, host uygulamanızın adı
        remotes: {
          basketRemote: 'basketRemote@http://localhost:3002/remoteEntry.js',
          productsRemote: 'productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js', // Burada filename eklenmeli
        shared: ['react', 'react-dom'],
      })
    );
    return config;
  },
};
