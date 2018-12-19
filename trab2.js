var fill = d3.scale.category20();

function deleteThis() {
    document.getElementById("dois").innerHTML = "";
}

function pegarNews() {
    url_parte1 = "https://newsapi.org/v2/everything?q=";
    var url_parte3 = "&apiKey=";
    var key = "21abd04126a0427baf5922b6643ed7d1";
    var keyword_input = document.getElementById("keyword_input").value;
    console.log("Keyword: " + keyword_input);
    var url = url_parte1 + keyword_input + url_parte3 + key;
    console.log("URL: " + url);
    var espaco_news = document.getElementById("um");
    espaco_news.innerHTML = "";
    var palavras = [];
    var novas_palavras = [];
    var h = 0;
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.articles.length; i++) {
            novas_palavras =  data.articles[i].description.split(" ");
            for (h = 0; h < novas_palavras.length; h++) {
                if (novas_palavras[h].length < 5)
                {
                    //console.log(novas_palavras[h]);
                    novas_palavras.splice(h, 1);
                }
                else
                {
                    palavras[palavras.length] = novas_palavras[h]; 
                }
            }
            //palavras = palavras.concat(novas_palavras);
            espaco_news.innerHTML += "<h3>" + data.articles[i].title + "</h3>"
            + "<img src = '" + data.articles[i].urlToImage + "'/>"
            + "<h4>" + data.articles[i].description + "</h4><a href='"
            + data.articles[i].url + "'>Link</a><br><br>";
        }
        console.log(palavras);

        d3.layout.cloud()
        .size([500, 500])
        .words(palavras
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 90};}))
            .padding(5)
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();
 });

    function draw(words) {
            if(document.getElementsByClassName("dois") != null) {
                deleteThis();
            }
            d3.select("#dois").append("svg")
            .attr("width", 500)
            .attr("height", 500)
            .append("g")
            .attr("transform", "translate(250,250)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return (d.size) + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

