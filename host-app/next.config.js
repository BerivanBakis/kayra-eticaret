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
        exposes: {
          './store': './shared/store/store',
          './basketSlice': './shared/store/basketSlice',
        },
        filename: 'static/chunks/remoteEntry.js', 
        shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
      })
    );
    return config;
  },
};
