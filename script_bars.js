const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");
const btnEl = document.querySelector(".btn");

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

function animateButton() {
  btnEl.addEventListener("click");
  btnEl.classList.toggle("btn_filled");
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
    // BARS
    [
      "Secret Garden",
      59.32272153317182,
      18.072048711694084,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.secretgardensthlm.se/" target="blank">' +
        "<h2>Secret Garden</h2></a>" +
        "<p><i>Awarded twice by QX Magazine as the “Gay Place of The Year”</i></p>" +
        "<p><b>Address:</b> Kornhamnstorg 59, 111 27 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Sunday 11am–3am</p>" +
        "<p><b>Phone:</b> +46 820 99 02</p>",
    ],
    [
      "Rågsved's Pub",
      59.26048486943272,
      18.025912185163854,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://ragsvedskrog.webnode.se/" target="blank">' +
        "<h2>Rågsved's Pub</h2></a>" +
        "<p><i>Restaurant and pub with queer karaoke nights</i></p>" +
        "<p><b>Address:</b> Sköllerstagatan 6, 124 66 Bandhagen</p>" +
        "<p><b>Hours:</b> Monday-Sunday 3pm-1am</p>" +
        "<p><b>Phone:</b> +46 85 687 98 88</p>",
    ],
    [
      "Side Track",
      59.31683965930412,
      18.063298940929318,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.sidetrack.nu/" target="blank">' +
        "<h2>Side Track</h2></a>" +
        "<p><i>Gay bar in the heart of Söder</i></p>" +
        "<p><b>Address:</b> Wollmar Yxkullsgatan 7, 118 50 Stockholm</p>" +
        "<p><b>Hours:</b> Wednesday-Saturday 6pm-1am</p>" +
        "<p><b>Phone:</b>+4686411688</p>",
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
