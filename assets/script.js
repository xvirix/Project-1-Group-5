// api key: 0ddc2d3e97msh3111ed9b96b98ccp13b69cjsnd1f77c75710f


var username = $('#username-text');
var displayUsername = $('#displayREsults');
var apexBaseUrl = "https://apex-legends.p.rapidapi.com/stats/"

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apex-legends.p.rapidapi.com/stats/imshleepdawg/PC",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0ddc2d3e97msh3111ed9b96b98ccp13b69cjsnd1f77c75710f",
		"x-rapidapi-host": "apex-legends.p.rapidapi.com"
	}
};
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


//Username function when you click the search populates information
$(document).ready(function () {
	var searchBar = $('#search-bar')
	var displayContainer = $('#displayResults')
	searchBar.submit(function (event) {
		event.preventDefault();
		var usernameType = $(this).serializeArray();
		var username = usernameType[0].value;
		var displayUser = $('<div class="displayResults">');
		console.log(username)
		displayUser.text(username)
		displayContainer.append(displayUser)
	});
	// Have not inserted into main function because I cant get authorization 
	function getUserStats(username) {
		var apexUrl = apexBaseUrl + username + "/PC"
		fetch(apexUrl).then(function (response) {
			return response.json();
		}).then(function (global) {
			var username = global.name
			var usernameDiv = $("<div class='user-name")
			usernameDiv.append(username)
		});
	};
});