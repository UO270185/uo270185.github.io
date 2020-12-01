class NewsGetter {
    constructor() {
    }

    retrieve() {
        document.getElementById("news").innerHTML = "";

        const apikey = "a57ebbfd959743e186bafdf3ddb9172b";
        let topic = document.getElementById("key").value;
        var url = "https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}";

        fetch(url).then(a => a.json()).then(data => {
		let ul = document.createElement('ul');
		document.getElementById('news').appendChild(ul);
        for (var i=0; i< data.articles.length; i++){
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', articles[i].url);
            a.setAttribute('target', '_blank');
            a.textContent = articles[i].title;
            li.appendChild(a);
			ul.appendChild(li);
        }
        });
    }

    cargarDatos() {
        var keyword = document.getElementById("key").value;
        $.ajax({
            dataType: "json",
            url: "http://newsapi.org/v2/everything?q="+keyword+"&apiKey="+this.apikey,
            method: 'GET',
            success: function(datos) {
                $("pre").text(JSON.stringify(datos, null, 2));

                for (var i=0; i<datos.articles.length; i++) {
                    var titulo = datos.articles[i].title;
                    var autor = datos.articles[i].author;
                    var descripcion = datos.articles[i].description;
                    var aurl = datos.articles[i].url;
        
                    var str = "<h3><a href="+aurl+">"+titulo+"</a></h3>";
                    str += "<h4>"+autor+"</h4>";
                    str += "<p>"+descripcion+"</p>";
                    $("p").html(str);
                }
            }, 
            error: function() {
                $("h2").html("Error. No se han podido obtener resultados."); 
                $("h3").remove();
                $("h4").remove();
                $("pre").remove();
            }
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    borrarTodo() {
        $("h2").remove();
        $("h3").remove();
        $("h4").remove();
        $("h5").remove();
        $("p").remove();
        $("pre").remove();
    }

    verJSON() {
        this.borrarTodo();
        this.crearElemento("h2","Noticias sobre "+this.keyword, "footer"); 
        this.crearElemento("h3",this.success,"footer"); 
        this.crearElemento("h4","JSON","footer");         
        this.crearElemento("pre","","footer"); 
        this.crearElemento("h4","Noticias","footer"); 
        this.crearElemento("p","","footer"); 
        this.cargarDatos();
    }
}

var newsGetter = new NewsGetter();