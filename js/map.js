// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 8.9525, lng: -79.535 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 15,
        center: { lat: 8.983236, lng: -79.519191 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: { lat: 8.997519, lng: -79.591395 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 15,
        center: { lat: 8.9325, lng: -79.5449 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var map4 = new google.maps.Map(document.getElementById('map4'), {
        zoom: 15,
        center: { lat: 9.005556, lng: -79.485833 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var map5 = new google.maps.Map(document.getElementById('map5'), {
        zoom: 15,
        center: { lat: 8.943056, lng: -79.565 },
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: { lat: 8.9525, lng: -79.535 },
        map: map,
        icon: image
    });

    var beachMarker1 = new google.maps.Marker({
        position: { lat: 8.983236, lng: -79.519191 },
        map: map1,
        icon: image
    });

    var beachMarker2 = new google.maps.Marker({
        position: { lat: 8.997519, lng: -79.591395 },
        map: map2,
        icon: image
    });

    var beachMarker3 = new google.maps.Marker({
        position: { lat: 8.9325, lng: -79.5449 },
        map: map3,
        icon: image
    });

    var beachMarker4 = new google.maps.Marker({
        position: { lat: 9.005556, lng: -79.485833 },
        map: map4,
        icon: image
    });

    var beachMarker5 = new google.maps.Marker({
        position: { lat: 8.943056, lng: -79.565 },
        map: map5,
        icon: image
    });
}