<script setup>

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 md:text-lg text-md">
        <div class="text-center">
            <h2 class="text-2xl font-bold">Anfahrt</h2>
            <p class="text-justify p-2">
                <b>Tag 1:</b> <a style="text-decoration: underline;" target="_blank" href="https://maps.app.goo.gl/Yx44yhH4GY6JpsPW8"> Freie Universität Berlin, Institut für Theaterwissenschaft <br>
                Grunewaldstraße 35, 12165 Berlin-Steglitz </a> <br>
                S-Bahn S1 & U-Bahn U9 Station: Rathaus Steglitz <br>
                Bus X83 Station: Schmidt-Ott-Str. <br> <br>
                <b>Tag 2:</b> <a style="text-decoration: underline;" target="_blank" href="https://maps.app.goo.gl/VCHhGwdo9P8aa1eD9"> Universität der Künste Berlin <br>
                Fasanenstraße 1B, 10623 Berlin-Charlottenburg </a> <br>
                S-Bahn S3/S5/S7/S9 & U-Bahn U2/U9: Station: Zoologischer Garten
                <br> <br>
                <b>Tag 3:</b> <a style="text-decoration: underline;" target="_blank" href="https://maps.app.goo.gl/WhaZSxxswhB7CqCs8"> Humboldt-Universität zu Berlin, Institut für Musikwissenschaft <br>
                Am Kupfergraben 5, 10117 Berlin-Mitte </a> <br>
                S-Bahn S1/S2/S5/S9/S7/S25 & U-Bahn U6 Station: Friedrichstraße <br>
                U-Bahn U5 Station: Museumsinsel
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
                    Freie Universität: Institut für Theaterwissenschaften
                </LTooltip>
            </LMarker>
            <LMarker :lat-lng="[52.509381, 13.328497]">                
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                Universität der Künste
                </LTooltip> 
            </LMarker>
            <LMarker :lat-lng="[52.518715, 13.393471]">                
                <LTooltip :options="{ permanent: true, direction: 'top' }">
                Humboldt-Universität: Institut für Musikwissenschaft
                </LTooltip> 
            </LMarker>
            </LMap>
        </div>
    </div>
</template>