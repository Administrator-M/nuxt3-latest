<template>
  <div>
    <VNumberInput v-model:value="value" :precision="2" style="max-width: 300px;"></VNumberInput>
    <VButton @click="getValue">获取值</VButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const value = ref();

const getValue = () => {
  // console.log(value.value);
  let number = 1.005;
  let i1 = Math.round(number * 10) / 10;
  let i2 = Math.round(number * 100) / 100;
  let i3 = Math.round(number * 1000) / 1000;
  let i4 = Math.round(number * 10000) / 10000;
  console.log(i1);
  console.log(i2);
  console.log(i3);
  console.log(i4);
}

</script>

<style scoped></style>
