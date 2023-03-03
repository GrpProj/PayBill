
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#8a36ab";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}


/*

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      // Use the latitude and longitude to get the street name
      var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyALVfQMevuvqotuQ3CV4cfI1ZCVjgaJHHc`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var street = data.results[0].address_components.find(function(component) {
            return component.types.includes("route");
          });
          alert("Your current street: " + street.long_name);
        });
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  */
/*
  // set endpoint and your access key
var ip = '134.201.250.155'
var access_key = '97f8d1db4dfd8f4d9c786d05d39952c7';

// get the API result via jQuery.ajax
$.ajax({
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {

        // output the "capital" object inside "location"
        alert(json.location.city);
        console.log(json.location.continent);

    }
});
*/
fetch('https://api.geoapify.com/v1/ipinfo?apiKey=23fc6c7f86e1471aae6ba27c8d960977')
.then(resp => resp.json())
.then((userLocationData) => {
	console.log(userLocationData.city.name);
  alert(`Thank you for joining us from  ${userLocationData.city.name}`)
}, []);

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
