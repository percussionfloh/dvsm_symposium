<script setup>
import logo from '~/assets/logo_small_lila.png'

const colorMode = useColorMode()

colorMode.preference = 'light'
colorMode.value = 'light'

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
    <TheNavigation />
    <UButton to="/tool" trailing-icon="i-lucide-arrow-right" size="xl">Einfache Sprache</UButton>
    <TheHeader />
    <main class="py-8">
        <slot></slot>
    </main>
    <TheFooter />
</template>

