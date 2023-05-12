export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      xxx: $fetch.create({
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
        async onResponse({ request, options, response }) {
          // console.log("响应拦截:", context.response._data.data);
          return response._data.data;
        },
        // 响应错误拦截
        onResponseError(context) {
          console.log("响应错误拦截:", context);
        },
      })
    }
  }
  // $fetch = $fetch.create({
  //   // 请求拦截
  //   onRequest(context) {
  //     console.log("请求拦截:", context);
  //     context.options.baseURL = "http://k8s-uverse-gateway.dev.sametoyou.cn";
  //     context.options.headers = context.options.headers || {};
  //     // context.options.headers = {
  //     //   authorization: ''
  //     // }
  //   },
  //   // 请求错误拦截
  //   onRequestError(context) {
  //     console.log("请求错误拦截:", context);
  //   },
  //   // 响应拦截
  //   async onResponse(context) {
  //     if (context.response.status == 200) {
  //       return;
  //     }
  //     console.log("响应拦截:", context);
  //     // return context.response._data.code;
  //   },
  //   // 响应错误拦截
  //   onResponseError(context) {
  //     console.log("响应错误拦截:", context);
  //   },
  // });
});
