/* Global Variables */
const apiKey = '8632f9d0321294bbfe47ecbb00c0963d&units=imperial';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction() {
  const zipCode = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  if (!zipCode) {
    alert('Please enter a valid zip code.');
    return;
  }

  getWeatherData(baseUrl, zipCode, apiKey)
    .then((data) => {
        if (!data || data.cod !== 200) {
            alert(data?.message || 'Unable to fetch weather data.');
            return;
        }
      postData('http://127.0.0.1:8000/add', {
        date: newDate,
        temp: data.main.temp,
        feel: feelings,
      });
    })
    .then(() => updateUI());
}

// Function to GET Web API Data
const getWeatherData = async (baseUrl, zip, apiKey) => {
  const res = await fetch(`${baseUrl}${zip}&appid=${apiKey}`);
  try {
    return await res.json();
  } catch (error) {
    console.log('Error fetching weather data:', error);
}
};

// Function to POST data
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log('Error posting data:', error);
}
};

// Function to GET Project Data and update UI
const updateUI = async () => {
  const request = await fetch('http://127.0.0.1:8000/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = `Date: ${allData.date}`;
    document.getElementById('temp').innerHTML = `Temperature: ${Math.round(allData.temp)}°F`;
    document.getElementById('content').innerHTML = `Feelings: ${allData.feel}`;
  } catch (error) {
    console.log('Error updating UI:', error);
}
};
