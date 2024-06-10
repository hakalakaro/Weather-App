// Event listener to the search box
document.getElementById('search-button').addEventListener('click', () => {
	const city = document.getElementById('city-input').value;
	if (city) {
		getWeather(city)
	}
});

// Function to fetch weather data
function getWeather(city) {
	const apiKey = '36a67266ae3511531aa801452e39bc54';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data.cod == 200) {
				// Display weather information
				document.getElementById('city-name').textContent = data.name;
				document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
				document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
				document.querySelector('.weather-info').style.display = 'block';
			} else {
				alert('City not found!');
			}
		})
		.catch(error => {
			console.error('Error fetching the weather data:', error);
			alert('An error occurred while fetching the weather data.');
		});
}