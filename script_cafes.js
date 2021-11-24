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
    //CAFES & RESTAURANTS
    [
      "Café Blå Lotus",
      59.31291560940362,
      18.07693569480408,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://www.cafeblalotus.nu/" target="blank">' +
        "<h2>Café Blå Lotus</h2></a>" +
        "<p><i>Café with breakfast, lunch, dinner, home-cooked food, beer, and wine served in a pleasant basement setting</i></p>" +
        "<p><b>Address:</b> Katarina Bangata 21, 116 39 Stockholm</p>" +
        "<p><b>Hours:</b> Tuesday-Friday 9am-7am, Saturday-Sunday 10am–5:30pm, Monday 9am–5:30pm</p>" +
        "<p><b>Phone:</b>+46 864 45 043</p>",
    ],
    [
      "Café Chokladkoppen",
      59.325986024961075,
      18.070493164151067,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.chokladkoppen.se/english/" target="blank">' +
        "<h2>Café Chokladkoppen</h2></a>" +
        "<p><i>Voted ”Gay Café of the Year” several years in a row by QX readers.</i></p>" +
        "<p><b>Address:</b> Stortorget 18, 111 29 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Sunday 10am-10pm</p>" +
        "<p><b>Phone:</b>+46 820 31 70</p>",
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
