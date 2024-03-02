<script setup lang="ts">
const response = ref([]);
const answer = ref([]);
const handleEnter = async (value: string) => {
  const res = await $fetch("/api/chat", {
    method: "POST",
    body: {
      text: value,
    },
  });

  response.value = res.response.data
    .toReversed()
    .map((i) => i.content[0].text.value);
};
</script>

<template>
  <MoleculesTextInput
    placeholder="scrivi"
    @on-enter="handleEnter"
    name="text"
  />
  <pre>{{ response }}</pre>
</template>
