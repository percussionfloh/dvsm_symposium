<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const showMenuButton = ref(true)

let lastScrollY = 0

const handleScroll = () => {
    const currentScrollY = window.scrollY

    // Ganz oben auf der Seite
    if (currentScrollY <= 10) {
        showMenuButton.value = true
    }
    // Nach oben gescrollt
    else if (currentScrollY < lastScrollY) {
        showMenuButton.value = true
    }
    // Nach unten gescrollt
    else {
        showMenuButton.value = false

        // Menü schließen, wenn man nach unten scrollt
        if (isOpen.value) {
            isOpen.value = false
        }
    }

    lastScrollY = currentScrollY
}

onMounted(() => {
    lastScrollY = window.scrollY

    window.addEventListener('scroll', handleScroll, {
        passive: true
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

    <!-- Menü-Button -->
    <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
    >
        <UButton
            v-if="showMenuButton"
            icon="i-lucide-menu"
            color="neutral"
            variant="soft"
            class="fixed top-4 right-4 z-[10000]"
            @click="isOpen = !isOpen"
        />
    </Transition>


    <!-- Dunkles Overlay -->
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
            class="fixed inset-0 z-[9999] bg-black/40"
            @click="isOpen = false"
        />
    </Transition>


    <!-- Sidebar -->
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
            class="fixed top-0 left-0 z-[10000] h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl"
        >

            <div class="p-2">

                <nav class="flex flex-col gap-2">

                    <NuxtLink
                        to="/"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Start
                    </NuxtLink>

                    <NuxtLink
                        to="/infotext"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Infotext
                    </NuxtLink>

                    <NuxtLink
                        to="/anmeldung"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Anmeldung
                    </NuxtLink>

                    <NuxtLink
                        to="/zeitplan"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Zeitplan
                    </NuxtLink>

                    <NuxtLink
                        to="/anfahrt"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Anfahrt
                    </NuxtLink>

                    <NuxtLink
                        to="/awareness"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Awareness
                    </NuxtLink>

                    <NuxtLink
                        to="/zugang"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Zugang
                    </NuxtLink>

                    <NuxtLink
                        to="/mi"
                        class="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        @click="isOpen = false"
                    >
                        Musica inaudita
                    </NuxtLink>

                </nav>

            </div>

        </aside>
    </Transition>

</template>
