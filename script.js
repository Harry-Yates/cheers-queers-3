const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");
const btnEl = document.querySelector("button");

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
