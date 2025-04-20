const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.jsx",  // React uygulamanızın başlangıç dosyasına doğru yolu gösterin
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],  // .jsx uzantısını eklediğinizden emin olun
  },
  output: {
    publicPath: "auto", // veya localhost:3001 gibi sabit bir URL de kullanabilirsiniz
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // .jsx ve .js dosyalarını işlemek için doğru kural
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
      filename: "remoteEntry.js", // Bu dosya remote bileşenleri dışa aktaracak
      exposes: {
        './Basket': './src/components/Basket', // Bileşen doğru şekilde expose ediliyor
      },
      remotes: {
        hostApp: 'hostApp@http://localhost:3000/_next/static/chunks/remoteEntry.js',
      },
      shared: ["react", "react-dom"],  // Bu kütüphaneleri paylaşıyoruz
    }),
  ],
};
