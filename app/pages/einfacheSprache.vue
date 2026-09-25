<script setup>
</script>

<template>

    <div class="gap-3 pt-4 px-4 
                sm:gap-6 sm:pt-9 sm:px-15 
                md:gap-10 md:pt-20 md:px-20 
                lg:gap-10 lg:px-20 lg:px-30">
    Einfache Sprache wird in Kürze veröffentlicht.
    </div>
    <div class="flex justify-center items-center p-4">
        <UButton to="/" color="white" size="xxl"> Einfache Sprache verlassen
        <template #trailing>
            <UIcon name="my-icon:icon-leichte-sprache-klein" class="size-5 md:size-8 ml-2"/>
        </template>
        </UButton>
    </div>
</template>