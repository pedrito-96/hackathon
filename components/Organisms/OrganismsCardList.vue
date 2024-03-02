<script setup lang="ts">
import type { CardListProps } from "./OrganismsCardList.props";
defineProps<CardListProps>();
</script>

<template>
  <div class="flex gap-4 overflow-hidden overflow-x-auto hide-scroll">
    <div v-for="card in list">
      <MoleculesCard v-bind="card" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
