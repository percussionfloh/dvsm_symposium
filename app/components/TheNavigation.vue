
<script setup>
import { ref } from 'vue'

const localePath = useLocalePath();

const isOpen = ref(false)

const items = [
    [{
        label: 'Start',
        to: localePath('/'),
    },
    {
        label: 'Infotext',
        to: localePath('/infotext')
    },
    {
        label: 'Anmeldung',
        to: localePath('/anmeldung'),
    },
    {
        label: 'Zeitplan',
        to: localePath('/zeitplan'),
    },
    {
        label: 'Anfahrt',
        to: localePath('/anfahrt'),
    },
    {
        label: 'Awareness',
        to: localePath('/awareness'),
    },
    {
        label: 'Zugang',
        to: localePath('/zugang'),
    },
    {
        label: 'Musica inaudita',
        to: localePath('/mi'),
    }],
]
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
            <nav class="flex flex-col gap-2">
            <NuxtLink to="/" class="p-2 hover:bg-gray-100">
                Start
            </NuxtLink>

            <NuxtLink to="/infotext" class="p-2 hover:bg-gray-100">
                Infotext
            </NuxtLink>

            <NuxtLink to="/anmeldung" class="p-2 hover:bg-gray-100">
                Anmeldung
            </NuxtLink>

            <NuxtLink to="/zeitplan" class="p-2 hover:bg-gray-100">
                Zeitplan
            </NuxtLink>

            <NuxtLink to="/anfahrt" class="p-2 hover:bg-gray-100">
                Anfahrt
            </NuxtLink>

            <NuxtLink to="/awareness" class="p-2 hover:bg-gray-100">
                Awareness
            </NuxtLink>

            <NuxtLink to="/zugang" class="p-2 hover:bg-gray-100">
                Zugang
            </NuxtLink>

            <NuxtLink to="/mi" class="p-2 hover:bg-gray-100">
                Musica inaudita
            </NuxtLink>
            </nav>
        </div>
        </aside>
    </Transition>
    </template>
