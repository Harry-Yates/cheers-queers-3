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
    //EROS
    [
      "Blue Vision - Club, Cinema, Shop",
      59.334281977993086,
      18.031027003749003,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="http://www.bluevision.se/" target="blank">' +
        "<h2>Blue Vision</h2></a>" +
        "<p><i>A playground and meeting place for adults</i></p>" +
        "<p><b>Address:</b> Fridhemsgatan 44, 112 40 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Thursday 10am–3am, Friday 10am–8am, Saturday 12pm–8am, Sunday 12pm–3am </p>" +
        "<p><b>Phone:</b> +46 865 28 620</p>",
    ],
    [
      "Manhattan Cinema",
      59.33054980171891,
      18.038376972109944,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://www.manhattan.nu/" target="blank">' +
        "<h2>Manhattan Cinema</h2></a>" +
        "<p><i>Movie booths, darkrooms and cruise area</i></p>" +
        "<p><b>Address:</b> Hantverkargatan 49, 112 21 Stockholm</p>" +
        "<p><b>Hours:</b> Sunday-Thursday 12am–12am, Friday-Saturday 12pm–6am</p>" +
        "<p><b>Phone:</b> +46 865 392 10</p>",
    ],

    [
      "US Video",
      59.338336099005154,
      18.067544633496937,
      "Anonymous_gay_pride_flag.svg",
      24,
      18,
      '<a href="https://www.usvideo.se/" target="blank">' +
        "<h2>US Video</h2></a>" +
        "<p><i>Adult entertainment store</i></p>" +
        "<p><b>Address:</b> Regeringsgatan 76, 111 39 Stockholm</p>" +
        "<p><b>Hours:</b> Monday-Sunday 12am–12am</p>" +
        "<p><b>Phone:</b> +46 854 515 830</p>",
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
