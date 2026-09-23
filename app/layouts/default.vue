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
    <div class="flex justify-end p-4">
        <UButton to="/einfacheSprache" color="white" size="xxl"> 
        <template #trailing>
            <UIcon
            name="my-icon:icon-leichte-sprache-klein"
            class="size-5 md:size-8"
            />
        </template>
        </UButton>
    </div>
    <TheHeader />
    <main class="py-8">
        <slot></slot>
    </main>
    <TheFooter />
</template>

