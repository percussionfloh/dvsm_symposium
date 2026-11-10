<script setup>

const colorMode = useColorMode()

colorMode.preference = 'light'
colorMode.value = 'light'

</script>

<template>
  <div class="w-full grid 
              grid-rows-[0.05fr_1fr_0.5fr_0.5fr_0.7fr_0.1fr]
              md:grid-rows-[0.05fr_1fr_0.5fr_0.5fr_0.7fr_0.1fr]
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