const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");

function toggleNav() {
  navTriggerEl.addEventListener("click", function () {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburgers();
  });
}

function animateHamburgers() {
  for (let item of hamburgerBarsEl) {
    item.classList.toggle("change");
  }
}

toggleNav();

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11.25,
    mapId: "d40621fad2896aaf",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  // Name
  // Latitude, Longitude
  // Image URL
  // scaledSize width, height
  // info box content
  const markers = [
    //GAY BEACHES
    [
      "Frescati Beach",
      59.36868142901492,
      18.050135194019877,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      "<h2>Frescati Beach</h2>" +
        "<p><i>Under the highway to the left, through the woods. Sunbathing and cruising.</i></p>" +
        "<p><b>Subway:</b> Universitetet</p>",
    ],
    [
      "Långholmen Beach",
      59.32318640001618,
      18.028579927901557,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      "<h2>Långholmen Beach</h2>" +
        "<p><i>Gay beach and gays on the hill. Mixed beaches around the island.</i></p>" +
        "<p><b>Subway:</b> Hornstull</p>",
    ],
    [
      "Kärsön Beach",
      59.3246317032035,
      17.909558789248372,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      "<h2>Kärsön Beach</h2>" +
        "<p><i>North end of the island. Get off at the first bus stop after the first bridge and walk around the field, then through the forest.</i></p>" +
        "<p><b>Subway:</b> Brommaplan</p>" +
        "<p><b>Bus:</b> Drottningholm</p>",
    ],
    [
      "Ågesta Beach",
      59.32318640001618,
      18.028579927901557,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      "<h2>Långholmen Beach</h2>" +
        "<p><i>Look for the sign that says Naturistbad. Mixed.</i></p>" +
        "<p><b>Subway:</b> Farsta Strand</p>" +
        "<p><b>Bus:</b> 742 or 833 to Rödmossevägen</p>",
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[6],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
