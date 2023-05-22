const $api = $fetch.create({
  // 请求拦截
  onRequest(context) {
    console.log("请求拦截:", context);

    const config = useRuntimeConfig();
    context.options.baseURL = config.public.BASE_URL;
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

    // context.response._data = context.response._data.data;
  },

  // 响应错误拦截
  onResponseError(context) {
    // console.log("响应错误拦截:", context);
    console.table(context);

  },
});

export default $api;
