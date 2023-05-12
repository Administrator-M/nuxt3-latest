<template>
  <div>
    <button @click="xxx">CLICK</button>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const xxx = () => {
  console.log(config.public.BASE_URL);
};

</script>

<style scoped lang="less">

</style>
