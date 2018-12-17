function onLoadDoc() {
    var xmlhttp = new XMLHttpRequest();
    var url_parte1 = "https://newsapi.org/v2/top-headlines?country=";
    var url_parte2 = "&apiKey=";
    var key = "api_key_aqui";
    //Somar url_parte1 + pais_input + url_parte2 + key pra obter url final
    var pais_input = document.getElementById("pais_input").value;
    var keyword_input = document.getElementById("keyword_input").value;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myContext = this.responseText;
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(myContext,"text/html");
            if (xmlDoc) {
                //parsear xml pra pegar infos de news
                } 
            else {
                document.getElementById("destino").innerHTML = "Não tem notícias com essas características.";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}