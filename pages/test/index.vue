<template>
  <div>
    <viewer :images="images">
      <NuxtImg v-for="src in images" :key="src" width="400" height="400" :src="src" />
    </viewer>

    <div class="images" v-viewer>
      <NuxtImg v-for="src in images" :key="src" width="400" height="400" :src="src" />
    </div>

    <button type="button" @click="show">Click to show</button>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {});

const images = ref([
  '/test.jpg',
  '/images/test.jpg'
]);

const show = () => {
  console.log();

}

</script>

<style scoped lang="less"></style>
