const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/list-with-products/",
  transpileDependencies: true,
  devServer: {
    proxy: "https://movies-ypff.onrender.com",
  },
});
