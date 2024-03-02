<script setup lang="ts">
definePageMeta({
  layout: false,
});
const response = ref([]);
const isLoading = ref(false);
const handleEnter = async (input: string) => {
  console.log(isLoading.value);
  isLoading.value = true;
  const res = await $fetch("/api/chat", {
    method: "POST",
    body: {
      text: input,
    },
  });
  isLoading.value = false;
  response.value = res.response.data
    .toReversed()
    .map((i) => i.content[0].text.value);
};
</script>

<template>
  <div class="boom flex justify-center items-center h-screen w-screen p-[10%]">
    <a href="/">
      <img src="../Icons/reask.svg" class="absolute top-[10%] left-[10%]" />
    </a>
    <div
      class="flex flex-col bg-black/10 rounded-lg w-full h-full gap-4 px-8 pt-8 pb-10 overflow-auto"
    >
      <div
        v-if="isLoading"
        class="relative p-4 bg-white ml-[60%] justify-end rounded-lg w-5/12 flex items-center"
      >
        <p>...</p>
      </div>
      <div v-else v-for="(res, index) in response" class="last:pb-10">
        <div
          v-if="index % 2"
          class="p-4 relative bg-white rounded-lg w-5/12 flex items-center"
        >
          <p>{{ res }}</p>
          <img
            src="/Icons/assistant.png"
            class="absolute -top-4 -left-4 h-10 w-10"
          />
        </div>
        <div
          v-else
          class="relative p-4 bg-white ml-[60%] justify-end rounded-lg w-5/12 flex items-center"
        >
          <p>{{ res }}</p>
        </div>
      </div>
    </div>
    <div
      class="px-[15%] fixed bottom-[10%] w-full flex items-center justify-center gap-4"
    >
      <MoleculesTextInput
        placeholder="scrivimi"
        @on-enter="handleEnter"
        name="text"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.boom {
  /* Background pattern from Toptal Subtle Patterns */
  background-image: url("/public/fade.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
