<template>
  <v-layout logo="https://www.vexipui.com/vexip-ui.svg" :menus="menus">
    <template #main>
      <slot />
    </template>
  </v-layout>
</template>

<script setup lang="ts">
const menus = [
  { label: "1", name: "菜单一", icon: I1 },
  { label: "2", name: "菜单二", icon: I2 },
  { label: "3", name: "菜单三", icon: I3 },
  { label: "4", name: "菜单四", icon: I4 },
];
</script>

<style scoped>
.vxp-layout {
  min-height: 100vh;
}

:deep(.vxp-menu__title) {
  border: 1px solid red;
}
</style>
