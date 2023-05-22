<template>
  <div>
    <button @click="get">GET</button>
    <button @click="post">POST</button>
    <button @click="put">PUT</button>
    <button @click="del">DELETE</button>
    <button @click="test">TEST</button>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log(useApi());

})

const test = () => {
  const params = {
    id: 1,
    obj: {
      test1: 1,
      test2: 2,
    }
  };
  useApi().test.logOut(params).then((res: any) => {
    console.log(res);
  })
}

const get = () => {
  const params = {
    id: 1
  };
  useApi().test.loginGet(params).then((res: any) => {
    console.log(res);
  })
};

const post = () => {
  const params = {
    a: 1
  };
  useApi().test.loginPost(params).then((res: any) => {
    console.log(res);
  })
};

const put = () => {
  const params = {};
  useApi().test.loginPut().then((res: any) => {
    console.log(res);
  })
};

const del = () => {
  const params = {};
  useApi().test.loginDelete().then((res: any) => {
    console.log(res);
  })
};

</script>

<style scoped lang="less">

</style>
