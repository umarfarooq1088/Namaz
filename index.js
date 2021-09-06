navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    lat = lat.toFixed(7);
    long = long.toFixed(7);
    lat = String(lat).split('.')[0];
    long = String(long).split('.')[0];
    lat = parseInt(lat);
    long = parseInt(long);
    console.log(lat, long);


    let date = new Date();

    var today = new Date();
    var hours = today.getHours(); // + ":" + today.getMinutes();
    var hours = (hours % 12) || 12;
    var minutes = today.getMinutes();
    var tim = hours + ":" + minutes;
    console.log(tim);

    console.log(`http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${date.getMonth}&year=${date.getFullYear}`)

    fetch(`http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${date.getMonth}&year=${date.getFullYear}`).then((resp) => {
        return resp.json();
    }).then((data) => {
        console.log(data.data[0].timings);

        var AA = document.querySelector('tbody');


        let string = `
    <td scope="col">${data.data[0].timings.Fajr}</td>
    <td>${data.data[0].timings.Dhuhr.split('(')[0]}</td>
    <td>${data.data[0].timings.Asr.split('(')[0]}</td>
    <td>${data.data[0].timings.Maghrib.split('(')[0]}</td>
    <td>${data.data[0].timings.Isha.split('(')[0]}</td>`
            // console.log(data.data[0].timings.Fajr);
        AA.innerHTML += string;

        var audio = new Audio('azan1.mp3');
        if (tim == data.data[0].timings.Fajr) {
            alert();
            audio.play();
        } else if (tim == data.data[0].timings.Dhuhr) {
            alert();
            audio.play();
        } else if (tim == data.data[0].timings.Asr) {
            audio.play();
        } else if (tim == data.data[0].timings.Maghrib) {
            audio.play();
        } else if (tim == data.data[0].timings.Isha) {
            audio.play();
        } else {
            console.log('not yet');
        }



        // setInterval(function() { audio.play(); }, data.data[0].timings.Fajr);
        // setInterval(function() { audio.play(); }, data.data[0].timings.Dhuhr);
        // setInterval(function() { audio.play(); }, data.data[0].timings.Asr);
        // setInterval(function() { audio.play(); }, data.data[0].timings.Maghrib);
        // setInterval(function() { audio.play(); }, data.data[0].timings.Isha);

    })

})