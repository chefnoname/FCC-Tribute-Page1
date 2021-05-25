const makkahLocation = { lat: 21.4229, lng: 39.8257 };
const aqsaLocation = { lat: 31.7761, lng: 35.2358 };
const qubaLocation = { lat: 24.4392, lng: 39.6173 };
const medinaLocation = { lat: 24.4672, lng: 39.6112 };

if (document.URL.includes("makkah.html")) {
  function initMap() {
    const options = {
      zoom: 16,
      center: makkahLocation,
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
      position: makkahLocation,
      map: map,
    });
  }
} else if (document.URL.includes("aqsa.html")) {
  function initMap() {
    const options = {
      zoom: 16,
      center: aqsaLocation,
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
      position: aqsaLocation,
      map: map,
    });
  }
} else if (document.URL.includes("quba.html")) {
  function initMap() {
    const options = {
      zoom: 16,
      center: qubaLocation,
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
      position: qubaLocation,
      map: map,
    });
  }
} else {
  function initMap() {
    const options = {
      zoom: 16,
      center: medinaLocation,
    };

    const map = new google.maps.Map(document.getElementById("map"), options);

    const marker = new google.maps.Marker({
      position: medinaLocation,
      map: map,
    });
  }
}
