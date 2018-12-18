function pegarNews() {
    //var xmlhttp = new XMLHttpRequest();
    console.log("Chamou a função");
    var url_parte1 = "https://newsapi.org/v2/top-headlines?country=";
    var url_parte2 = "&q=";
    var url_parte3 = "&apiKey=";
    var key = "chave_aqui";
    var pais_input = document.getElementById("pais_input").value;
    console.log("País: " + pais_input);
    var keyword_input = document.getElementById("keyword_input").value;
    console.log("Keyword: " + keyword_input);
    var url = url_parte1 + pais_input + url_parte2 + keyword_input + 
    url_parte3 + key;
    console.log("URL: " + url);
    /*
    Somar url_parte1 + pais_input + url_parte2 + keyword_input + 
    url_parte3 + key pra obter url final
    */
    var req = new Request(url);
    fetch(req).then(function(response) {
            console.log(response.json());
            //parsear JSON recebido aqui
        })
}