var nameContainer = document.getElementById("name-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() 
{
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'http://ip-api.com/json');
	ourRequest.onload = function() 
		{
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData);
		};
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";
		htmlString += "<p> country: " + data.country + "</p>";
		htmlString += "<p> country code: " + data.countryCode + "</p>";
		htmlString += "<p> country code: " + data.query + "</p>";

	nameContainer.insertAdjacentHTML('beforeend', htmlString);
}