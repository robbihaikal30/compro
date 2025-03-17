function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -6.324278519782119, lng: 107.00461641349337 }, // Jakarta
        zoom: 10
    });

    google.maps.event.addListener(map, "click", function(event) {
        let lat = event.latLng.lat(-6.324278519782119);
        let lng = event.latLng.lng(107.00461641349337);
        document.getElementById("output").innerText = "Koordinat: " + lat + ", " + lng;
    });
}

window.onload = initMap;
