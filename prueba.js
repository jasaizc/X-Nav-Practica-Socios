var words;

jQuery(document).ready(function() {  
    $(function() {
		  $( "#tabs" ).tabs();
  	});
  cambiafrase("SociosTimeline.json")
  $("#tab1").click(function(){ cambiafrase("SociosTimeline.json")});  
  $("#tab2").click(function(){ cambiafrase("MiTimeline.json")});       
});
  function cambiafrase(datas)
  {
    words = null;
    $.getJSON( datas, function( data ) {
    words = data;
    }).done(function(){
      var sentence1 = document.getElementById("tabs-1");
     var imagen = document.getElementById("imagen1");
     sentence1.innerHTML = "";
     for (var i=0 ; i < words.length; i+=1)
     {
        var newwords = "";
        var nombre =document.createElement("p");
        var tweet =document.createElement("p");
        var div =document.createElement("div");
        var br =document.createElement("br");
        nombre.innerHTML = words[i].nombre + " " + words[i].fecha;
        tweet.innerHTML = words[i].tweet;
        div.setAttribute('style', 'width:400px; height:100px; margin:0');
        var Img=document.createElement("img");
        Img.setAttribute('src', words[i].imagen);
        Img.setAttribute('alt', 'na');
        Img.setAttribute('height', '60px');
        Img.setAttribute('width', '60px');
        Img.setAttribute('style', 'float: left');

        div.setAttribute('id', 'div1');
        div.appendChild(nombre);
        div.appendChild(Img);        
        div.appendChild(tweet); 
        div.appendChild(br); 
        sentence1.appendChild(div);
     }    
    }); 
  }


