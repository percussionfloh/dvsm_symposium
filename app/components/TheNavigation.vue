
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const items = [
    [{
        label: 'Start',
        to: '/',
    },
    {
        label: 'Infotext',
        to: '/infotext',
    },
    {
        label: 'Anmeldung',
        to: '/anmeldung',
    },
    {
        label: 'Zeitplan',
        to: '/zeitplan',
    },
    {
        label: 'Anfahrt',
        to: '/anfahrt',
    },
    {
        label: 'Awareness',
        to: '/awareness',
    },
    {
        label: 'Zugang',
        to: '/zugang',
    },
    {
        label: 'Musica inaudita',
        to: '/mi',
    }],
];
</script>

<template>
    <UButton
        icon="i-lucide-menu"
        color="neutral"
        variant="ghost"
        class="fixed top-4 left-4 z-50"
        @click="isOpen = !isOpen"
    />

    <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/40 z-40"
        @click="isOpen = false"
        />
    </Transition>

    <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
        <aside
        v-if="isOpen"
        class="fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl"
        >
        <div class="p-2">
            <UNavigationMenu
            orientation="vertical"
            :items="items"
            />
        </div>
        </aside>
    </Transition>
    </template>
