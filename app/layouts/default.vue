<script setup>
import logo from '~/assets/mi.png'

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
    <div class="flex justify-end p-4">
    </div>
    <TheHeader />
    <main class="py-8">
        <slot></slot>
    </main>
    <TheFooter />
</template>

