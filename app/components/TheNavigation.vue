<script setup>
const localePath = useLocalePath();

const items = [
    [{
        label: 'Start',
        to: localePath({name: 'index'}),
    },
    {
        label: 'Infotext',
        to: localePath({name: 'infotext'}),
    },
    {
        label: 'Anmeldung',
        to: localePath({name: 'anmeldung'}),
    },
    {
        label: 'Zeitplan',
        to: localePath({name: 'zeitplan'}),
    },
    {
        label: 'Anfahrt',
        to: localePath({name: 'anfahrt'}),
    },
    {
        label: 'Awareness',
        to: localePath({name: 'awareness'}),
    },
    {
        label: 'Zugang',
        to: localePath({name: 'zugang'}),
    },
    {
        label: 'Musica inaudita',
        to: localePath('mi'),
    }],
];
</script>

<template>
    <UNavigationMenu :items="items" class="border-b border-gray-200 dark:border-gray-800 px-2"/>
</template>