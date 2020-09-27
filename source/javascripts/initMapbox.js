mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vub3JpdGFhbmdlbCIsImEiOiJjanNlazE5bjYwMGtxNDRxbWhucXJrNHBqIn0.58-OaaZu5tbcpFppbBjacg';
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-1.74, 43.38], // starting position [lng, lat]
    zoom: 8 // starting zoom
  });

  // // create the popup
  // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
  //   'Route de la Corniche 64122 Urrugne'
  // );

  // // create DOM element for the marker
  // const el = document.createElement('div');
  //   el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([-1.711850, 43.385433])
  //   .setPopup(popup) // sets a popup on this marker
  //   .addTo(map);

  map.on('load', function () {
    map.loadImage(
      '/images/cn_location_marker_picto.png',
      // Add an image to use as a custom marker
      function (error, image) {
        if (error) throw error;
        map.addImage('cn-location-marker', image);

        map.addSource('places', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'properties': {
                  'description':
                  '<h5><strong>Carole Nogueira Comportementaliste Équin</strong></h5><p>Route de la Corniche<br>64122 Urrugne</p>'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-1.711850, 43.385433]
                }
              }
            ]
          }
        });

        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': 'cn-location-marker',
              'icon-allow-overlap': true
            }
        });
    }
  );

  // Create a popup, but don't add it to the map yet.
  const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
  });

  map.on('mouseenter', 'places', function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
});

  // Add full screen control to the map.
  map.addControl(new mapboxgl.FullscreenControl());
  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
