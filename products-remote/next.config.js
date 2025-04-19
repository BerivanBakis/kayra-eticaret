const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductList': './src/components/ProductList',
        },
        shared: ['react', 'react-dom'],
        // shared: {
        //   react: { singleton: true, requiredVersion: false, eager: true },
        //   'react-dom': { singleton: true, requiredVersion: false, eager: true  },
        // },
      })
    );
    return config;
  },
  env: {
    NEXT_PRIVATE_LOCAL_WEBPACK: process.env.NEXT_PRIVATE_LOCAL_WEBPACK
  },
};
