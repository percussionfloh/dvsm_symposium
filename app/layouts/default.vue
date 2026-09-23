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
        <UButton to="/einfacheSprache" color="white" size="xxl"> Einfache Sprache 
        <template #trailing>
            <UIcon name="my-icon:icon-leichte-sprache-klein" class="size-5 md:size-8 ml-2"/>
        </template>
        </UButton>
    </div>
    <TheHeader />
    <main class="py-8">
        <slot></slot>
    </main>
    <TheFooter />
</template>

