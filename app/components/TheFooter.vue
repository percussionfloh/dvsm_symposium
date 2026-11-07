<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="grid grid-cols-3 items-center justify-items-center p-4 gap-2">
        <img src="/assets/hu_logo.png" class="h-12 md:h-35 w-auto max-w-full object-contain" alt="Logo HU">
        <img src="/assets/fu_logo.jpg" class="h-12 md:h-35 w-auto max-w-full object-contain" alt="Logo FU">
        <img src="/assets/udk_logo.png" class="h-12 md:h-35 w-auto max-w-full object-contain" alt="Logo UDK">
    </div>
    <div class="border-t border-gray-200 py-6">
        <p class="text-center text-sm text-gray-500">© {{ currentYear }}, Florian Moldaschl von musica inaudita. Alle Rechte vorbehalten.</p>
    </div>
</template>