const useApi = $fetch.create({
  // 请求拦截
  onRequest(context) {
    console.log("请求拦截:", context);
    context.options.baseURL = "http://k8s-uverse-gateway.dev.sametoyou.cn";
    context.options.headers = context.options.headers || {};
    // context.options.headers = {
    //   authorization: ''
    // }
  },
  // 请求错误拦截
  onRequestError(context) {
    console.log("请求错误拦截:", context);
  },
  // 响应拦截
  async onResponse(context) {
    console.log("响应拦截:", context);
  },
  // 响应错误拦截
  onResponseError(context) {
    console.log("响应错误拦截:", context);
  },
});

export default useApi;
