/* eslint-disable no-undef */
function mapInit() {
  const map = L.map('map', {scrollWheelZoom: false}).setView(
      [55.774906445034176, 37.632641498705205],
      14
  );

  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  const basicIcon = L.icon({
    iconUrl: 'img/svg/map-marker.svg',
    iconSize: [33, 44],
  });

  L.marker([55.774906445034176, 37.632641498705205], {icon: basicIcon}).addTo(map);
}

export {mapInit};
