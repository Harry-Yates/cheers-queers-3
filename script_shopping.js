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
    // SHOPPING
    [
      " Gamla Stans Bokhandel",
      59.32602495978543,
      18.067858141415183,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://gamlastansbokhandel.se/" target="blank">' +
        "<h2> Gamla Stans Bokhandel</h2></a>" +
        "<p><i>The destination bookshop in Old Town for the discerning reader. Stop by for inspiration and a cup of coffee.</i></p>" +
        "<p><b>Address:</b> Stora Nygatan 7, 111 27 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Friday 11am–6pm, Saturday 12–3pm</p>" +
        "<p><b>Phone:</b> +46 707 345 165</p>",
    ],
    [
      "StaDemonia Tattoo Stockholm",
      59.31748943984188,
      18.028058261770486,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://www.stademonia.com/" target="blank">' +
        "<h2>StaDemonia Tattoo Stockholm</h2></a>" +
        "<p><i>Queer tattoo shop in Stockholm</i></p>" +
        "<p><b>Address:</b> Slipgatan 9, 11739 Hornstull</p>" +
        "<p><b>Hours:</b> Monday-Friday 10.30am-6pm</p>" +
        "<p><b>Phone:</b> +46 87 556 655</p>",
    ],
    [
      "Platinum Ink Piercing",
      59.31007968240768,
      18.07987108684946,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.platinuminkpiercing.se/" target="blank">' +
        "<h2>Platinum Ink Piercing</h2></a>" +
        "<p><i>Safe piercing since 1993</i></p>" +
        "<p><b>Address:</b> Östgötagatan 79, 116 63 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Friday 12–6pm, Saturday 12pm-5pm</p>" +
        "<p><b>Phone:</b> +46 870 20 654</p>",
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
