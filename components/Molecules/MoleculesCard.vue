<script setup lang="ts">
import type { CardProps } from "./MoleculesCard.props";
defineProps<CardProps>();
</script>

<template>
  <div class="container relative rounded-xl w-[340px]">
    <img :src="image" class="relative" />
    <p class="absolute bottom-[13px] text-center w-full">{{ title }}</p>
  </div>
</template>
