const axios = require("axios");

const searchSets = (q) => {
  const QUIZLET_API_KEY = "XsDu3eW473";
  var QUIZLET_URL = "https://api.quizlet.com/2.0/search/sets?q="
  var separated_strings = q.split(' ');
  var new_string = '';
  for (var i=0; i<separated_strings.length; i++) {
    new_string += "?" + separated_strings[i];
  }
  const REQUEST = QUIZLET_URL + new_string + "&client_id=" + QUIZLET_API_KEY;
  return axios.get(REQUEST, {
    params: {
      new_string,
      QUIZLET_API_KEY,
		},
	})
	.then(result => {

    let output;
    let finalOutput = "";

    output = result.sets.id[0];
    if (output === undefined) {
  		finalOutput = "Unfortunately, I wasn't able to find information on that subject.";
      return finalOutput;
  	} else {
      /*REQUEST = "https://api.quizlet.com/2.0/sets/" + output + "&client_id=XsDu3eW473";
      return axios.get(REQUEST, {
        params: {
          XsDu3eW473,
        },
      })
    }
    .then (result => {
      finalOutput
    })
    */
    finalOutput = [title:result.sets.title[0], id:result.sets.id[0]];
  }

    return finalOutput;
	})
}
