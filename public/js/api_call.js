function buildEverything(t_loc) {
  //clear out old cards and info
  wx_cards.empty();
  var geo_url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + t_loc + ',US&appid=' + api_key;
  console.log(geo_url);
  fetch(geo_url, {
      cache: 'reload',
  })
      .then(function (response) {
          console.log(response.status);
          if (response.status !== 200) {
              console.log(response.status);
              return false;
          }
          return response.json();
      })

      .then(function (data) {
          latitude = data[0].lat;
          longitude = data[0].lon;
          var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=' + api_key;
          t_place = { lat: latitude, lng: longitude };
          console.log(t_place);
          initMap(t_place);
          //executes a fetch from openweathermap.org.  API key is sdseney508 key and is stored as a const
          fetch(url, {
              cache: 'reload',
          })
              //make sure the response wasnt a 404
              .then(function (response) {
                  if (response.status !== 200) {
                      city_curr_title.append('<h3>City Not Found Please Try Again</h3>');
                      return false;
                  }
                  return response.json();
              })
              .then(function (data) {
                  if (data == false) {
                      return;
                  }
                  //build current wx card title
                  console.log(data);
                  //build a for loop to extract the data for the current day (list item 0) and the next 5 days, list 1-5.
                  for (i = 0; i < 5; i++) {
                      //change to jday
                      let wx_numb = parseFloat(data.daily[i].dt * 1000);
                      var wx_date = dayjs(wx_numb).format('MMMM D, YYYY')

                      var temp_hi = data.daily[i].temp.max;
                      var temp_low = data.daily[i].temp.min;
                      var winds = data.daily[i].wind_speed;
                      var humidity = data.daily[i].humidity;

                      let day_id = i;
                      wx_cards.append('<div class="column" id="i-hate-css-' + i + '"></div>');
                      let wx_cards2 = $('#i-hate-css-' + i);
                      wx_cards2.append('<div class="card future_wx" id="day-' + i + '"></div>');
                      let future_wx_cards = $('#day-' + i);
                      // clear prior search results
                      future_wx_cards.empty();
                      // build the cards
                      future_wx_cards.append('<div class="card-divider">' + wx_date + '</div>')
                      // future_wx_cards.append('<div>' + wx_date + '</div>');
                      future_wx_cards.append('<div><img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon
                          + '@2x.png" alt="WX Icon" class="weather-icon"></div>');
                      future_wx_cards.append('<div>Forecast Hi: ' + temp_hi + '</div>');
                      future_wx_cards.append('<div>Forecast Low: ' + temp_low + '</div>');
                      future_wx_cards.append('<div>Wind: ' + winds + ' MPH</div>');
                      future_wx_cards.append('<div>Humidity: ' + humidity + ' %</div>');
                  }
              })
          targetDate = dayjs().format('YYYY-MM-DD')  //originally this was"2022-02-07"
          console.log(targetDate);
          let starSearch = {
              "style": "navy",
              "observer": {
                  "latitude": latitude,
                  "longitude": longitude,
                  "date": targetDate
              },
              "view": {
                  "type": "area",
                  "parameters": {
                      "position": {
                          "equatorial": {
                              "rightAscension": 0,
                              "declination": 0
                          }
                      },
                      "zoom": 3
                  }
              }

          }
          sendApiRequest(starSearch);
          fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=" + latitude + "&lon=" + longitude,
              {
                  method: "GET",
                  headers: {
                      "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
                      "x-rapidapi-key": TrailApi
                  }
              })
              .then(function (response) {
                  console.log(response);
                  return response.json()
              })
              .catch(function (err) {
                  console.error(err);
              })
              .then(function (data) {
                  console.log('this is from thje trailapi:');
                  console.log(data);
                  
                  console.log(data.data[0].name);
                  //and now we build out the accordion for the trails with links to their info
                  for (i = 0; i < 5; i++) {
                      // debugger;
                      let card_title = $('#acc-' + i + '-title');
                      let card_content = $('#acc-' + i + '-content');
                      let card_link = $('#acc-' + i + '-link');
                      console.log(card_link);
                      //empty from prior searches
                      // card_title.empty();
                      // card_content.empty();
                      // card_link.empty();
                      //now get values and put them into the cards
                      let title = data.data[i].name;
                      let content = data.data[i].description;
                      console.log(content);
                      let hyp_link = data.data[i].url;
                      card_link.attr("href", hyp_link);
                      card_link.html(title);
                      card_content.html(content);
                      console.log(card_link);
                      card_title.html(title);
                  }
              })

      });
}

