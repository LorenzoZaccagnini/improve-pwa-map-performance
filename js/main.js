const $latitude = 33.29939,
		  $longitude = -84.55608,
		  $map_zoom = 14;


const map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
    }
	const map = new google.maps.Map(document.getElementById('map'), map_options);
	//add a custom marker to the map
	const marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	});

  const toggle_map = () => {
    if (document.getElementById('map').style.display === 'none')
      document.getElementById('map').style.display = 'block'
    else
      document.getElementById('map').style.display = 'none'

  }

  const swap_map = () => {
    if (document.getElementById('map').style.display === 'none')
      {
        document.getElementById('map').style.display = 'block'
        document.getElementById('static_map').style.display = 'none'
      }


  }
