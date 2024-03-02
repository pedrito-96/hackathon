<script setup lang="ts">
definePageMeta({
  layout: false,
});

const addImg = ref(false);
const message = ref("");

const first = ref("");
const firstStatus = ref(false);
const firstAnswer = ref("First answer");
const firstAnswerStatus = ref(false);

const second = ref("");
const secondStatus = ref(false);
const secondAnswer = ref("Second answer");
const secondAnswerStatus = ref(false);

const third = ref("");
const thirdStatus = ref(false);
const thirdAnswer = ref("Third answer");
const thirdAnswerStatus = ref(false);

const addMessage = () => {
  if (firstStatus.value === false) {
    first.value = message.value;
    message.value = "";
    firstStatus.value = true;
    setTimeout(() => {
      firstAnswerStatus.value = true;
    }, "2000");
  } else if (firstStatus.value === true && secondStatus.value === false) {
    second.value = message.value;
    message.value = "";
    secondStatus.value = true;
    setTimeout(() => {
      secondAnswerStatus.value = true;
    }, "2000");
  } else if (
    firstStatus.value === true &&
    secondStatus.value === true &&
    thirdStatus.value === false
  ) {
    third.value = message.value;
    message.value = "";
    thirdStatus.value = true;
    setTimeout(() => {
      thirdAnswerStatus.value = true;
    }, "2000");
  }
};

const answer = ref("dasoidjasodijass");
</script>
<template>
  <div class="boom flex justify-center items-center h-screen w-screen p-[10%]">
    <a href="/">
      <img src="../Icons/reask.svg" class="absolute top-[10%] left-[10%]" />
    </a>
    <div
      class="flex flex-col bg-black/10 rounded-lg w-full h-full gap-4 p-8 overflow-auto"
    >
      <div
        class="w-5/12 ml-[60%] flex justify-end items-center p-4 bg-white rounded-lg"
      >
        <p>Ciao</p>
      </div>

      <div
        v-if="firstStatus"
        class="p-4 bg-white rounded-lg w-5/12 flex items-center"
      >
        <p>{{ first }}</p>
      </div>

      <div
        v-if="firstAnswerStatus"
        class="p-4 bg-white ml-[60%] justify-end rounded-lg w-5/12 flex items-center"
      >
        <p>{{ firstAnswer }}</p>
      </div>
      <div
        v-if="secondStatus"
        class="p-4 bg-white rounded-lg w-5/12 flex items-center"
      >
        <p>{{ second }}</p>
      </div>

      <div
        v-if="secondAnswerStatus"
        class="p-4 bg-white ml-[60%] justify-end rounded-lg w-5/12 flex items-center"
      >
        <p>{{ secondAnswer }}</p>
      </div>
      <div
        v-if="thirdStatus"
        class="p-4 bg-white rounded-lg w-5/12 flex items-center"
      >
        <p>{{ third }}</p>
      </div>

      <div
        v-if="thirdAnswerStatus"
        class="p-4 bg-white ml-[60%] justify-end rounded-lg w-5/12 flex items-center"
      >
        <p>{{ thirdAnswer }}</p>
      </div>
    </div>
    <div
      class="px-[15%] fixed bottom-[10%] w-full flex items-center justify-center gap-4"
    >
      <MoleculesTextInput
        type="text"
        v-model="message"
        name="assistant"
        placeholder="Che cos'è Paprika?"
      />

      <button
        class="bg-black border-[60%] text-white rounded-full h-16 w-16"
        @click="addMessage()"
      >
        >
      </button>
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
