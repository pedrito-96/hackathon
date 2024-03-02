<script setup lang="ts">
const lista = [
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
  { title: "tile", image: "/placeholderImage.png" },
];
</script>

<template>
  <OrganismsCardList :list="lista" />
</template>
