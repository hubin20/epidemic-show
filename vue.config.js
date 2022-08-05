module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.muxiaoguo.cn/", // 需要代理的域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求	的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // ws: false, // 是否启用websockets
        // pathRewrite: {
        //   //重写匹配的字段，如果不需要在请求路径上，重写为""
        //   "^/api": "",
        // },
      },
      "/springTravel": {
        target: "http://apis.juhe.cn/", // 需要代理的域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求	的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // ws: false, // 是否启用websockets
        // pathRewrite: {
        //   //重写匹配的字段，如果不需要在请求路径上，重写为""
        //   "^/api": "",
        // },
      },
    },
  },
};
