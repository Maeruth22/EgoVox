var nombre = prompt("Bienvenidx! Ingresá tu nombre"); //prompt para obtener datos del usuario
document.body.style.background = "#eaf2e3";//fondo de color de la pagina

var titulo1 = document.getElementById("proximamente")
titulo1.innerHTML = "<h2>"+nombre+", ¿qué álbum querés ver?"//utiliza los datos del prompt para dirigirse al usuario

var subirAlbum = document.getElementById("subirAlbum")//form para que el usuario ingrese los datos del proximo disco a analizar
subirAlbum.innerHTML = `<form>
<input type="text" id="album" placeholder="Nombre del album">
<input type="text" id="artista" placeholder="Nombre del artista">
<br>
<input type="submit" value="Subir" onclick="return agregarLista();" />
</form>`


function agregarLista() {
    alert("Se agregó a la lista!");
    return true;
 }//funcion que devuelve el alert cuando se presiona el submit

var recomendaciones = ["La Biblia-Vox Dei","Mirage-Camel","Pretender-Pretenders","Divididos por la felicidad-Sumo","Kerosene Hat-Cracker"]
recomendaciones.sort()
document.write("Discos sin review que recomiendo: "+recomendaciones+"")//array en orden alfabetico sobre disco que recomiendo

