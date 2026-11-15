<script setup>

const colorMode = useColorMode()

colorMode.preference = 'light'
colorMode.value = 'light'

</script>

<template>
  <main>
    <header class="flex justify-center px-4 pt-4">
      <img src="/assets/titel.png" class="w-full max-w-3xl h-auto object-contain" alt="40. DVSM-Nachwuchssymposium - Critical Musicologies: Zwischen Kanonizität, Lehre und künstlerischer Praxis - 20.–22.11.2026">
    </header>

    <UContainer class="py-8 sm:py-12 lg:py-16 flex flex-col gap-10 lg:gap-16">
      <div class="flex flex-wrap justify-center gap-8">
        <UButton to="/symposium_programmheft.pdf" external download="DVSM-Nachwuchssymposium-Programmheft.pdf" trailing-icon="i-lucide-download" size="xl" class="bg-blue-600 hover:bg-blue-700 font-bold" label="Programmheft herunterladen" />
        <UButton to="/Zeitplan" trailing-icon="i-lucide-arrow-right" size="xl" class="bg-blue-600 hover:bg-blue-700 font-bold" label="Hier geht's zum Zeitplan!" />
      </div>
      <Infotextx />
      <Anmeldungx />
      <Anfahrtx />
      <Awarenessx />
      <Zugangx />
      <Mix />
    </UContainer>
  </main>
</template>