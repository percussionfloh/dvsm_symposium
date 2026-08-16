<script setup>

</script>

<template>
    <div class="grid grid-cols-2">
        <div class="text-center">
            <h2 class="text-2xl font-bold">Anfahrt</h2>
            <p>
                Das müssen wir klären :)
            </p>
        </div>
        <div>
            <LMap
            style="height: 400px;"
            :zoom="12.2"
            :center="[52.5104550, 13.3303811]"
            :use-global-leaflet="false"
            >
            <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
            />
            <LMarker :lat-lng="[52.5104550, 13.3303811]" />
            <LMarker :lat-lng="[52.511912, 13.327182]" />
            <LMarker :lat-lng="[52.518153, 13.393735]" />
            </LMap>
        </div>
    </div>
</template>