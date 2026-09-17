<script setup>

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="text-center">
            <h2 class="text-2xl font-bold">Anfahrt</h2>
            <p>
                Das müssen wir klären :)
            </p>
        </div>
        <div>
            <LMap
            style="height: 400px;"
            :zoom="11.2"
            :center="[52.5104550, 13.3303811]"
            :use-global-leaflet="false"
            >
            <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
            />
            <LMarker :lat-lng="[52.459067, 13.307898]" /> //Inst. f. Theaterwissenschaften
            <LMarker :lat-lng="[52.509381, 13.328497]" /> // UDK 
            <LMarker :lat-lng="[52.45439, 13.29144]" /> // FU
            <LMarker :lat-lng="[52.518715, 13.393471]" /> // HU
            </LMap>
        </div>
    </div>
</template>