import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#giphyButton").click(function () {
    const q = $("#giphyFind").val();
    $("#giphyFind").val(""); //This might be an aesthitic<sp> thing;


    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&limit=5&offset=0&rating=pg-13&lang=en&q=${q}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $("#search-result").attr("src", response.data[0].images.original.url);
    }
  });
}); 