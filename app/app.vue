<script setup>
import logo from '~/assets/logo_small_lila.png'


useHead({
  title: '40. DVSM-Nachwuchssymposium',
  link: [
    {
      rel: 'icon',
      href: logo
    }
  ]
})
</script>

<template>
      <TheHeader />
    <div class="grid grid-rows-[1fr_1fr] gap-10 pt-20 px-30">
      <Infotext />
      <Anmeldung />
      <Anreise />
  </div>
</template>