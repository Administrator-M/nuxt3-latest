<template>
  <div>
    <NuxtImg src="/test.jpg" width="400" height="400" />
    <button type="button" @click="show">Click to show</button>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log(useNuxtApp().vueApp.config.globalProperties);

});

const arr = reactive(["/test.jpg", "/images/test.jpg"]);

const show = () => {
  const $viewerApi = useNuxtApp().vueApp.config.globalProperties.$viewerApi;
  $viewerApi({
    images: arr,
  });
};
</script>

<style scoped lang="less"></style>
