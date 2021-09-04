mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJzaW1hcnRpIiwiYSI6ImNrdDE0ZWR3ZjA2d3oyb3IyOTFzenMxNmoifQ.cCLEt8GznnslzvKb_ROjpQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/arsimarti/ckt30oi7u0s2817ohgoez32qe", // style URL
  center: [43.816, 45.611], // starting position [lng, lat]
  zoom: 3, // starting zoom
});

const places = [
  [37.65297, 55.724258],
  [44.57983, 48.500645],
  [38.982958, 45.040922],
  [45.966398, 51.586537],
  [39.203243, 51.671439],
  [44.57038, 40.219916],
  [82.974814, 55.022634],
];

places.forEach(function (item, index) {
  const markerElement = document.createElement("div");
  markerElement.id = "mapbox-marker-" + index;
  markerElement.className = "marker";

  new mapboxgl.Marker({
    element: markerElement,
    offset: [0, -20],
  })
    .setLngLat(item)
    .addTo(map);

  markerElement.addEventListener("click", function () {
    map.flyTo({
      center: places[index],
      zoom: 17,
    });
  });
});

const mapElement = document.querySelector("#map");

document.querySelector(".cities__list").addEventListener("click", (e) => {
  const { classList } = e.target;
  if (classList.contains("cities__link")) {
    const { dataset } = e.target;
    const { cityIndex } = dataset;

    mapElement.scrollIntoView({
      behavior: "smooth",
    });

    map.flyTo({
      center: places[cityIndex],
      zoom: 17,
    });
  }
});
