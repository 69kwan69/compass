const compass = document.querySelector('.compass');
const longitude = document.querySelector('.longitude');
const latitude = document.querySelector('.latitude');

function displayLocation(position) {
    const coords = position.coords;

    if (coords.heading) {
        compass.style.rotate = `${coords.heading}deg`;
    }

    longitude.textContent = `Longitude: ${coords.longitude}`;
    latitude.textContent = `Latitude: ${coords.latitude}`;
}

navigator.geolocation.watchPosition(displayLocation, err => alert('Ch-Chotto matte, baka onii-chan! I need your location to work this out!'));

