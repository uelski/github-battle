var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getProfile(username) {
	return axios.get('https://api.github.com/users/' + username + params)
		.then(function(user) {
			return user.data;
		}); 
}

module.exports = {

	battle: function(players) {

	},

  	fetchPopularRepos: function (language) {
    	var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    	return axios.get(encodedURI)
      		.then(function (response) {
        	return response.data.items;
      	});
  	}
};