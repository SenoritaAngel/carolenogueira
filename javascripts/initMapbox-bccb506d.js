mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vub3JpdGFhbmdlbCIsImEiOiJjanNlazE5bjYwMGtxNDRxbWhucXJrNHBqIn0.58-OaaZu5tbcpFppbBjacg';
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-1.711850, 43.385433], // starting position [lng, lat]
    zoom: 7 // starting zoom
  });

  const marker = new mapboxgl.Marker()
    .setLngLat([-1.711850, 43.385433])
    .addTo(map);

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
