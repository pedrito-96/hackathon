<script setup lang="ts">
definePageMeta({
  layout: "layout-no-search-bar",
});
</script>

<template>
  <div class="py-[78px] px-[100px] xl:px-[135px]">
    <div class="flex gap-12 justify-between w-full pb-[20px] xl:pb-[120px]">
      <div class="container-sinistro">
        <p class="font-bold pb-8 text-[32px]">Ciao Giovanni,</p>
        <p class="pb-8 text-[16px] pb-10">
          Scommetto che non sai da che parte girati, non ti preoccupare, siamo
          qui apposta per aiutarti. Troverai tutte le risposte che cerchi e se
          non le troverai, ti affidiamo un buddy a cui puoi fare riferimento 😎
        </p>

        <p class="font-bold text-[16px] pb-[20px]">IL TUO PANE QUOTIDIANO</p>
        <div class="flex gap-4">
          <a href="https://rtx-digital.paprika-worldwide.com/?" target="_blank">
            <div>
              <img src="/paprika.png" class="h-[102px] w-[102px]" />
              <p class="pl-2">Paprika</p>
            </div></a
          >
          <a
            href="https://retexspa.atlassian.net/servicedesk/customer/user/login?destination=user%2Frequests%3Fpage%3D1%26statuses%3Dopen"
            target="_blank"
          >
            <div>
              <img src="/jira.png" />
              <p class="pl-2">Jira</p>
            </div></a
          >
          <a
            href="https://portale.tpservice.it/HRPORTAL/jsp/login.jsp"
            target="_blank"
          >
            <div>
              <img src="/zucc.png" />
              <p class="pl-2">Cedolino</p>
            </div></a
          >
          <a
            href="https://serviziweb.inaz.it/heportaleretex/Default.aspx"
            target="_blank"
          >
            <div>
              <img src="/inaz.png" />
              <p class="pl-2">Nota spese</p>
            </div></a
          >
        </div>
      </div>
      <MoleculesCardAccount class="shrink-0" />
    </div>
    <MoleculesFavourite />
    <div class="flex flex-col gap-4 pt-[50px]">
      <div
        class="border border-gray-300 py-6 w-[815px] pl-4 pr-[100px] rounded-[13px]"
      >
        <p class="text-[14px] font-bold">Come faccio a fare la nota spese?</p>
        <p class="text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
          ac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,
          venenatis volutpat tellus.
        </p>
      </div>
      <div
        class="border border-gray-300 py-6 w-[815px] pl-4 pr-[100px] rounded-[13px]"
      >
        <p class="text-[14px] font-bold">Come faccio a fare la nota spese?</p>
        <p class="text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
          ac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,
          venenatis volutpat tellus.
        </p>
      </div>
      <div
        class="border border-gray-300 py-6 w-[815px] pl-4 pr-[100px] rounded-[13px]"
      >
        <p class="text-[14px] font-bold">Come faccio a fare la nota spese?</p>
        <p class="text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
          ac lacus vitae rhoncus. Proin justo sapien, volutpat tempus erat ut,
          venenatis volutpat tellus.
        </p>
      </div>
    </div>
  </div>
</template>
