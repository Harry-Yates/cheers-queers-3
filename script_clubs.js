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
    // CLUB & PARTY
    [
      "Club Backdoor",
      59.290700251011565,
      18.0839642828795,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://tolvstockholm.se/vi-i-tolv/club-backdoor/" target="blank">' +
        "<h2>Club Backdoor</h2></a>" +
        "<p><i>The best gay club north of Ibiza</i></p>" +
        "<p><b>Address:</b> Arenavägen 75, 121 77 Stockholm</p>" +
        "<p><b>Hours:</b> Friday-Saturday 11pm-5am</p>",
    ],
    [
      "Golden Hits",
      59.335866596376,
      18.066887998516354,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://goldenhits.se/en/" target="blank">' +
        "<h2>Golden Hits</h2></a>" +
        "<p><i>Stockholms funniest nightclub, karaoke & dinnershow</i></p>" +
        "<p><b>Address:</b>Kungsgatan 29, 111 56 Stockholm</p>" +
        "<p><b>Hours:</b> Friday-Saturday 7pm-3am</p>",
    ],
    [
      "Patricia - Restaurant and Nightclub on a boat",
      59.316855790422984,
      18.06180550593136,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.patriciastockholm.se/" target="blank">' +
        "<h2>Patricia - Restaurant and Nightclub on a boat</h2></a>" +
        "<p><i>Legendary Gay Sunday Nights with a stunning view from the sun deck</i></p>" +
        "<p><b>Address:</b> Söder Mälarstrand, Kajplats 19</p>" +
        "<p><b>Hours:</b> Friday & Saturday 9pm–5am, Sunday 6pm–5am</p>" +
        "<p><b>Phone:</b> +46 874 30 570</p>",
    ],
    [
      "SLM Stockholm",
      59.316855790422984,
      18.06180550593136,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://slmstockholm.se/" target="blank">' +
        "<h2>SLM Stockholm</h2></a>" +
        "<p><i>Scandinavian Leather Men - fetish club for men only</i></p>" +
        "<p><b>Address:</b> Wollmar Yxkullsgatan 18, 118 50 Stockholm</p>" +
        "<p><b>Hours:</b> Wednesday 7pm–12am, Friday, 10pm–2am, Saturday, 10pm–3am</p>" +
        "<p><b>Phone:</b> +46 864 33 100</p>",
    ],
    [
      "Klubb MOXY",
      59.333377997133226,
      18.047063227160514,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.klubbmoxy.se/" target="blank">' +
        "<h2>Klubb MOXY</h2></a>" +
        "<p><i>Largest lesbian club in Sweden</i></p>" +
        "<p><b>Address:</b> Flatastigen 4, 112 28 Stockholm</p>",
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
