<script setup>

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="text-center">
            <h2 class="text-2xl font-bold">Anfahrt</h2>
            <p>
                Infos kommen bald!
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
            <LMarker :lat-lng="[52.459067, 13.307898]">
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                    Institut für Theaterwissenschaften
                </LTooltip>
            </LMarker>
            <LMarker :lat-lng="[52.509381, 13.328497]">                
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                UDK
                </LTooltip> 
            </LMarker>
            <LMarker :lat-lng="[52.45439, 13.29144]">                
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                FU
                </LTooltip> 
            </LMarker>
            <LMarker :lat-lng="[52.518715, 13.393471]">                
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                HU
                </LTooltip> 
            </LMarker>
            </LMap>
        </div>
    </div>
</template>