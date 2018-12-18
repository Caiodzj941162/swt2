function pegarNews() {
    url_parte1 = "https://newsapi.org/v2/everything?q=";
    var url_parte3 = "&apiKey=";
    var key = "chave_aqui";
    var pais_input = document.getElementById("pais_input").value;
    console.log("País: " + pais_input);
    var keyword_input = document.getElementById("keyword_input").value;
    console.log("Keyword: " + keyword_input);
    var url = url_parte1 + keyword_input + url_parte3 + key;
    console.log("URL: " + url);
    var espaco_news = document.getElementById("div_da_news");
    espaco_news.innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        for (var i = 0; i < data.articles.length; i++) {
            espaco_news.innerHTML += "<h3>" + data.articles[i].title + "</h3>"
            + "<img src = '" + data.articles[i].urlToImage + "'/>"
            + "<h4>" + data.articles[i].description + "</h4><a href='"
            + data.articles[i].url + "'>Link</a><br><br>";
        }
 });
}