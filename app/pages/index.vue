<script setup>

const colorMode = useColorMode()

colorMode.preference = 'light'
colorMode.value = 'light'

</script>

<template>
  <div class="flex justify-center px-2 sm:px-4">
    <img src="/assets/titel.png" class="block w-full max-w-3xl max-h-50 sm:max-h-60 md:max-h-100 h-auto object-contain" alt="40. DVSM-Nachwuchssymposium - Critical Musicologies: Zwischen Kanonizität, Lehre und künstlerischer Praxis - 20.–22.11.2026">
  </div>
  <div class="w-full grid 
              grid-rows-[0.03fr_0.5fr_0.3fr_0.3fr_0.1fr_0.7fr]
              md:grid-rows-[0.03fr_0.5fr_0.3fr_0.3fr_0.1fr_0.7fr]
              gap-3 pt-4 px-4 
              sm:gap-6 sm:pt-9 sm:px-15 
              md:gap-10 md:pt-20 md:px-20 
              lg:gap-10 lg:px-20 lg:px-30">
    <div class="flex justify-center">
      <UButton to="/Zeitplan" trailing-icon="i-lucide-arrow-right" size="xl" class="bg-blue-600 hover:bg-blue-700 font-bold" label="Hier geht's zum Programm!"> </UButton>
    </div>    
    <Infotextx />
    <Anmeldungx />
    <Anfahrtx />
    <Awarenessx />
    <Zugangx />
    <Mix/>
  </div>
</template>
