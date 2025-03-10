function initMap() {
    const map = new google.maps.Map(document.getElementById("quakeMap"), {
        center: { lat: 14.5995, lng: 120.9842 }, // Manila default
        zoom: 6
    });

    // Example earthquake epicenter
    const epicenter = new google.maps.Marker({
        position: { lat: 13.41, lng: 123.29 }, // Example coordinates
        map,
        title: "Recent Earthquake",
        icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
    });
}
