<script setup lang="ts">
const lista = [
  { title: "tile", content: "/placeholderImage.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholdercontent.png" },
  { title: "tile", content: "/placeholderImage.png" },
];
</script>

<template>
  <OrganismsAccordionList :list="lista" />
</template>
