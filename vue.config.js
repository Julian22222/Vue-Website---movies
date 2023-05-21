const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/Vue-Website---movies",
  transpileDependencies: true,
  devServer: {
    proxy: "https://movies-ypff.onrender.com",
  },
});
