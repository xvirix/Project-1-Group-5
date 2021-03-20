fetch("https://apex-legends.p.rapidapi.com/stats-by-uid/1008786770571/PS4", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0ddc2d3e97msh3111ed9b96b98ccp13b69cjsnd1f77c75710f",
		"x-rapidapi-host": "apex-legends.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});