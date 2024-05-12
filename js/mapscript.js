/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.672677135289625, -1.2628907159824847], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/* bepaal de rechthoek rondom het gebouw van AP */
let bounds = [[51.6730314339476, -1.2630087331878088],[51.67302311710951, -1.2620350912829619],[51.67229122937874, -1.26302214423333],[51.67230619992809, -1.26176955258164]];

/* kleur de rechthoek in met de rode AP-kleur */
L.rectangle(bounds, {color: "#9F750F", weight: 1}).addTo(map);

/* plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33" */
let marker = L.marker([51.672677135289625, -1.2628907159824847]).addTo(map);
marker.bindPopup("<b>Hoofdkantoor Safezone Corp.</b><br>Science Park, The Pentagon, Barton Ln, Abingdon OX14 3YP, Verenigd Koninkrijk").openPopup();


L.marker([51.672677135289625, -1.2628907159824847],).addTo(map);