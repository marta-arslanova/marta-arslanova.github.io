const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [37.649, 55.722],
      },
      properties: {
        title: "Mapbox",
        description: "Moscow",
      },
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [44.578, 48.498],
      },
      properties: {
        title: "Mapbox",
        description: "Volgograd",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [39.121, 45.035],
      },
      properties: {
        title: "Mapbox",
        description: "Krasnodar",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [55.173, 30.201],
      },
      properties: {
        title: "Mapbox",
        description: "Saratov",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [65.57, 57.192],
      },
      properties: {
        title: "Mapbox",
        description: "Voronezh",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [45.018, 53.19],
      },
      properties: {
        title: "Mapbox",
        description: "Jerevan",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [31.204, 54.269],
      },
      properties: {
        title: "Mapbox",
        description: "Novosibirsk",
      },
    },
  ],
};

mapboxgl.accessToken = process.env.MAP_ACCESS_TOKEN;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/arsimarti/ckt30oi7u0s2817ohgoez32qe", // style URL
  center: [43.816, 45.611], // starting position [lng, lat]
  zoom: 3, // starting zoom
});

for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
}
map.on('click', 'circle', (e) => {
  map.flyTo({
  center: e.features[0].geometry.coordinates
  });
  });

document.querySelectorAll(".cities__link").forEach((element) => {
  element.addEventListener("click", () => {
    const { city } = element.dataset;
    const cityToFly = geojson.features.find(
      (cityData) => cityData.properties.description === city
    );

    const { coordinates } = cityToFly.geometry;
    map.flyTo({
      center: {
        lng: coordinates[0],
        lat: coordinates[1],
      },
      zoom: 16,
      essential: true,
    });
  });
});
