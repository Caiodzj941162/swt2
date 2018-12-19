function pegarNews() {
    //console.log("Chamou a função");
    var url_parte1 = "https://newsapi.org/v2/everything?";
    var url_parte2 = "q=";
    var url_parte3 = "&apiKey=";
    var key = "21abd04126a0427baf5922b6643ed7d1";
    //var pais_input = document.getElementById("pais_input").value;
    //console.log("País: " + pais_input);
    var keyword_input = document.getElementById("keyword_input").value;
    //console.log("Keyword: " + keyword_input);
    var url = url_parte1 + url_parte2 + keyword_input + 
    url_parte3 + key;
    //console.log("URL: " + url);
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

function pegarTweets() {
    console.log("CHAMOU A FUNÇÃO");
    var url_part1 = "https://api.twitter.com/1.1/search/tweets.json?";
    var url_part2 = "q=";
    var keyword_input_tweet = document.getElementById("keyword_input").value;

    var url_tweet = url_part1 + url_part2 + keyword_input_tweet;
    console.log("Url: " + url_tweet);
    console.log("Keyword: " + keyword_input_tweet);

    var req = new Request(url_tweet);
    fetch(req).then(function(response) {
            console.log(response.json());
            //parsear JSON recebido aqui
        })
}