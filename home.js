fetch('https://api.geoapify.com/v1/ipinfo?apiKey=23fc6c7f86e1471aae6ba27c8d960977')
  .then(resp => resp.json())
  .then((userLocationData) => {
      //console.log(userLocationData);
      alert("Thank You for joining us from "+ userLocationData.city.name)
  });
