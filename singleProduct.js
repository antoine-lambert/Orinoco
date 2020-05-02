var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");

var img = document.getElementById('productImg');
var title = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');

ajaxGet("http://localhost:3000/api/teddies/" + id, function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var article = JSON.parse(reponse);

    img.src = article.imageUrl;
    img.setAttribute("alt", "Ours en peluche "+ article.name);
    title.textContent = article.name;
    description.textContent = article.description;
    price.textContent = (article.price /100 + ',00 €');  

 

    var select = document.getElementById("colorSelect");
    var options = article.colors;
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }


});
