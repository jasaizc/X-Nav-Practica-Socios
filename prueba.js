var words;

jQuery(document).ready(function() {  
    $(function() {
		  $( "#tabs" ).tabs();
  	});
  cambiafrase("timeline.json")
  $("#tab1").click(function(){ cambiafrase("timeline.json")});  
  $("#tab2").click(function(){ cambiafrase("myline.json")});       
});
  function cambiafrase(datas)
  {
    words = null;
   
    $.getJSON( datas, function( data ) {
    words = data;
    }).done(function(){
     var tabla = $("#tabs-1").html();
     if(datas != "update.json")
     {
       var menus = $("#tabs-1").accordion( "instance" );
       if(menus != undefined){
    			$("#tabs-1").accordion("destroy");
					tabla = " ";
          $("#tabs-1").html(tabla);
				}
     }
     var menus = $("#tabs-1").accordion( "instance" );
     if(menus != undefined){
        $("#tabs-1").accordion("destroy");
        tabla2 = tabla;
        tabla = " ";
        $("#tabs-1").html(tabla);
			}
     
     var imagen = document.getElementById("imagen1");
     for (var i=0 ; i < words.Lista.length; i+=1)
     {
        var nombre = words.Lista[i].Autor;
        var fecha = words.Lista[i].Fecha;
        var titulo = words.Lista[i].Titulo;
        var imagen = "<img src="+ words.Lista[i].Avatar +" style='width: 60px; height: 60px;'>";
        var contenido = words.Lista[i].Contenido;
        tabla += "<h2>"+ imagen + " " + nombre + " - " + titulo + " - " + fecha + "</h2><div><p>"+ contenido +"<br></p></div> ";        
     }   
     if(datas == "update.json")
     {
        tabla += tabla2;
        $("#actualizar").html(0);
     }
     $("#tabs-1").html(tabla);
     $("#tabs-1").accordion({active: true});
     if(datas == "timeline.json")
     {
       $.getJSON( "update.json", function( data ) {
        words1 = data;
        }).done(function(){
          $("#actualizar").html(words1.Lista.length);
          
        }); 
     }
     if(datas == "myline.json")
     {
          $("#actualizar").html(0); 
     }
    }); 
  }
  function Actualizar()
  {
    var valor  = document.getElementById('actualizar').innerHTML  
    if ( valor != 0)
    {
      cambiafrase("update.json")
      
    }
    
    
    
  }

