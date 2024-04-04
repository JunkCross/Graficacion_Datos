/*
window.addEventListener('DOMContentLoaded', (event) => {
    const iframeSrc = "http://localhost:3000/d-solo/adho33kqez668b/prueba-temp-copy?orgId=1&refresh=5s&from=1712190108609&to=1712190205099&theme=light&panelId=2";
    const temperatureHistoryDiv = document.getElementById('temperature-history');
    const iframeElement = document.createElement('iframe');

    iframeElement.src = iframeSrc;
    iframeElement.width = "450";
    iframeElement.height = "260";
    iframeElement.frameBorder = "0";

    temperatureHistoryDiv.appendChild(iframeElement);
});
*/

window.addEventListener('resize', function() {
    var temperatureIframe = document.getElementById('temperature-iframe');
    var humidityIframe = document.getElementById('humidity-iframe');
    var historyCharts = document.querySelector('.history-details');

    var chartWidth = historyCharts.offsetWidth;

    temperatureIframe.width = chartWidth * 0.45; // Adjust the width based on the percentage you want
    humidityIframe.width = chartWidth * 0.45; // Adjust the width based on the percentage you want
  });