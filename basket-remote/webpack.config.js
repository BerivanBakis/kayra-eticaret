const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.jsx", 
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],  
  },
  output: {
    publicPath: "auto", 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "basketRemote",
      filename: "remoteEntry.js", 
      exposes: {
        './Basket': './src/components/Basket', 
      },
      remotes: {
        hostApp: 'hostApp@http://localhost:3000/_next/static/chunks/remoteEntry.js',
      },
      shared: ["react", "react-dom"], 
    }),
  ],
};
