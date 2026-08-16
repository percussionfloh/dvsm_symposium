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
    <div class="grid grid-rows-[1fr_0.5fr_0.2fr_0.8fr_0.7fr_1fr] gap-10 pt-20 px-30">
      <Infotext />
      <Anmeldung />
      <Zeitplan />
      <Anfahrt />
      <Awareness />
      <Mi />
  </div>
</template>