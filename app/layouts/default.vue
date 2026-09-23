<script setup>
import logo from '~/assets/logo_small_lila.png'

const { locale, locales, setLocale } = useI18n()

const items = computed(() =>
    locales.value.map(l => ({
        label: l.name,
        onSelect: () => setLocale(l.code)
    }))
)

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
    <div class="flex justify-end items-end pt-3">
        <UDropdownMenu :items="items">
            <UButton icon="lucide:book-open-check" variant="ghost" color="neutral"/>
        </UDropdownMenu>
    </div>
    <TheHeader />
    <main class="py-8">
        <slot></slot>
    </main>
    <TheFooter />
</template>

