// Erstellen und initialisieren der Karte, die Europa zeigt
var map = L.map('map').setView([54.5260, 15.2551], 4); // Mittelpunkt von Europa

// Hinzufügen der OpenStreetMap-Kacheln
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker hinzufügen
var locations = [
  { coords: [52.52, 13.4050], popup: 'Berlin, Germany' },
  { coords: [40.4168, -3.7038], popup: 'Madrid, Spain' },
  { coords: [48.8566, 2.3522], popup: 'Paris, France' },
  { coords: [41.9028, 12.4964], popup: 'Rome, Italy' },
  { coords: [46.8182, 8.2275], popup: 'Switzerland' },
  { coords: [41.0082, 28.9784], popup: 'Istanbul, Turkey' },
  { coords: [37.9838, 23.7275], popup: 'Athens, Greece' },
  { coords: [51.5074, -0.1278], popup: 'London, England' }
];

// Durch die Orte iterieren und Marker hinzufügen
locations.forEach(function(location) {
  L.marker(location.coords).addTo(map)
    .bindPopup(location.popup);
});

//SelectBox
document.addEventListener('DOMContentLoaded', function () {
    const selectBox = document.getElementById('countrySelect');
    const output = document.getElementById('output');
  
    selectBox.addEventListener('change', function () {
      const selectedCountry = selectBox.value;
      console.log('Selected country:', selectedCountry);
      output.innerText = 'You selected: ' + selectedCountry;

       // Zuordnung von Länderinformationen für die Ausgabe
    const countryInfo = {
        Germany: "Germany is known for its rich history, beer culture, and scenic landscapes. Don't miss the Berlin Wall and the historic city of Munich.",
        Spain: "Spain is famous for its vibrant culture, delicious cuisine, and sunny beaches. Visit the Sagrada Família in Barcelona and the Alhambra in Granada.",
        France: "France is renowned for its art, fashion, and gastronomy. Explore the Eiffel Tower in Paris and the beautiful countryside of Provence.",
        Italy: "Italy is known for its ancient history, art treasures, and culinary delights. Visit the Colosseum in Rome and enjoy a gondola ride in Venice.",
        Switzerland: "Switzerland offers breathtaking landscapes, skiing resorts, and Swiss watches. Explore the Swiss Alps and picturesque towns like Lucerne.",
        Turkey: "Turkey is a blend of cultures, offering ancient ruins, vibrant markets, and stunning coastlines. Visit the Hagia Sophia in Istanbul and Cappadocia's fairy chimneys.",
        Greece: "Greece is famous for its ancient ruins, beautiful islands, and Mediterranean cuisine. Explore the Acropolis in Athens and relax on the beaches of Santorini.",
        England: "England is known for its rich history, royal palaces, and literary heritage. Visit Buckingham Palace in London and the historic city of Oxford."
      };
      
      // Ausgabe der Informationen für das ausgewählte Land
      if (countryInfo[selectedCountry]) {
        output.textContent = countryInfo[selectedCountry];
      } else {
        output.textContent = "Select a country to see more information.";
      }
    });
  });
    
  function message(){

      var text = "Message was send. We will get in touch with you shortly.";
      var messageElement = document.getElementById("message");
      messageElement.textContent = text;
  }
  