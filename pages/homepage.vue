<script setup lang="ts">
const faq = [
  {
    title: "Ma cos'è il TFR??",
    content: "Chiedi a Zana: 34..",
  },
  {
    title: "Quel 1.2 di ferie che significa?",
    content: "Chiedi a Zana: 34..",
  },
  {
    title: "Ma cosa sono i ROL?",
    content: "Chiedi a Zana: 34..",
  },
  {
    title: "Non mi funziona il pc! A chi devo chiedere?",
    content: "Chiedi a Zana: 34..",
  },
  {
    title: "Dove inserisco i giorni di smart su Paprika?",
    content: "Chiedi a Zana: 34..",
  },
];
const fav = [
  {
    title: "Come faccio a fare la nota spese?",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,venenatis volutpat tellus.",
  },
  {
    title: "Come faccio a fare la nota spese?",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,venenatis volutpat tellus.",
  },
  {
    title: "Come faccio a fare la nota spese?",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,venenatis volutpat tellus.",
  },
];
const imgs = [
  {
    title: "Il tuo ufficio",
    image: "/office.png",
  },
  {
    title: "Il tuo team",
    image: "/ufficio.png",
  },
  {
    title: "Extra Lavoro",
    image: "/lavoro.png",
  },
  {
    title: "Team Building",
    image: "/ska.png",
  },
  {
    title: "Le tue pausePl",
    image: "/office.png",
  },
];
const isClicked = ref(false);
</script>

<template>
  <div class="py-[78px] px-[100px] xl:px-[135px]">
    <div class="w-full flex justify-end pb-[46px]">
      <MoleculesFavourite
        @click="isClicked = !isClicked"
        :is-click="isClicked"
      />
    </div>
    <OrganismsAccordionList
      v-if="!isClicked"
      :list="faq"
      class="pb-[100px]"
    ></OrganismsAccordionList>
    <OrganismsAccordionList
      v-else
      :list="fav"
      class="pb-[100px]"
    ></OrganismsAccordionList>

    <OrganismsCardList
      :list="imgs"
      class="-mx-[100px] xl:-mx-[135px]"
    ></OrganismsCardList>
  </div>
</template>
