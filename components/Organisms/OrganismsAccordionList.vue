<script setup lang="ts">
import type { AccordionListProps } from "./OrganismsAccordionList.props";
defineProps<AccordionListProps>();
</script>

<template>
  <div class="flex flex-col divide-y-[1px] divide-gray-400">
    <div v-for="acc in list">
      <MoleculesAccordion v-bind="acc"></MoleculesAccordion>
    </div>
  </div>
</template>
