mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdG5pZWxvdmVzbGlsYSIsImEiOiJjbDJzcWg3c3IwMWE4M2pwa3dnbjNuYmxyIn0.220K08iWkRJWRcBo4brFGw';

const locations = [
    [-157.8341479338386, 21.306777495068452], //first turn on Dominis st.
    [-157.83132125879354, 21.304041409761737], //Punahuo St.
    [-157.8352752081381, 21.298726310764707], // Beretania St.
    [-157.836761525189, 21.29920882229002], //Kalakaua Ave.
    [-157.83668716984982, 21.2929166159522768], //Continue passed Alan Wong's
    [-157.833524402752, 21.28669496944704], //Cont..
    [-157.8281500023994, 21.27838276290992], //Cont..
    [-157.82339787453827, 21.27270953072739], //Cont.. passed Kuhio Beach
    [-157.82064630134562, 21.26378392168687], //Kaimanas Beach right passed to aquarium
  ];

//Initializes map at Honolulu, HI
let map = new mapboxgl.Map({ 
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-157.858093, 21.29],
    zoom: 13,
  });

//sets marker near my home in Makiki, HI
var marker = new mapboxgl.Marker()
.setLngLat([-157.834712, 21.305988])
.addTo(map);

// counter here represents the index of the current location point
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= locations.length) return;
    marker.setLngLat(locations[counter]);
    counter++;
    move();
  }, 6000); //moves locations 10x faster than the rate of a car to final location
}

    