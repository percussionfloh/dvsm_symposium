<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="grid grid-cols-3 justify-items-center p-4">
        <div class="flex p-4">
            <img src="/assets/hu_logo.png" class="max-h-12 md:max-h-35" alt="Logo HU">
        </div>
        <div class="flex items-center">
            <!-- <img src="/assets/fu_logo.png" class="max-h-12 md:max-h-35" alt="Logo FU"> -->
        </div>
        <div class="flex p-4">
            <img src="/assets/udk_logo.png" class="max-h-12 md:max-h-35" alt="Logo UDK">
        </div>
    </div>
    <div class="border-t border-gray-200 py-6">
        <p class="text-center text-sm text-gray-500">© {{ currentYear }}, Florian Moldaschl. Alle Rechte vorbehalten.</p>
    </div>
</template>