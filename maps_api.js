function initMap() {
    // Set the location (latitude, longitude)
    const location = { lat: 31.14, lng: 75.34 }; // San Francisco, CA

    // Create a map instance
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });

    // Add a marker to the map
    new google.maps.Marker({
        position: location,
        map: map,
        title: "San Francisco, CA",
});
}