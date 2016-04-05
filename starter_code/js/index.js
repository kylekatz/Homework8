// document ready and prevent default on submit
$(document).ready(function() {
	$('#submit-btn').click(function(){
    event.preventDefault();
// save city entered to variable
// clear input
// standardize input entry to lowercase
    var city = $("#city-type").val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
    // remove previous class and add class nyc if New York City, NYC or New York is entered
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').removeClass();
      $('body').addClass('nyc');
    }
    //remove previous class and add class sf if SF, San Francisco or Bay Area is enetered
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').removeClass();
      $('body').addClass('sf');
    }
    //remove previous class and add class austin if Austin or ATX is entered
    else if (city == 'austin' || city == 'atx') {
      $('body').removeClass();
      $('body').addClass('austin');
    }
    //remove previous class and add class la if Los Angeles, LA or LAX is entered
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').removeClass();
      $('body').addClass('la');
    }
    //remove previous class and add class sydney if Sydney or SYD is entered
    else if (city == 'sydney' || city == 'syd') {
      $('body').removeClass();
      $('body').addClass('sydney');
    }
    //remove previous class and add class boston if Boston or BOS is entered
    else if (city == 'boston' || city == 'bos') {
      $('body').removeClass();
      $('body').addClass('boston');
    }
  });
});