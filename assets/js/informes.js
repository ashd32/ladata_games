
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	$(document).ready(function(){
		//var url_string = window.location.href
		//var url = new URL(url_string);
		//var id = url.searchParams.get("id");		
		var id = getQueryString('id');
		
		switch(id) {
			case "mundial":
				addMundial();
				break;
			case "russia2018":
				addRusia();
				break;
			case "eshop":
				addEshop();
				break;
			case "poke":
				addPoke();
				break;
			case "auto":
				addAuto();
				break;
			case "movie":
				addMovies();
				break;
			case "comics":
				addComics();
				break;
			case "messi":
				addMessi();
				break;
			case "manu":
				addManu();
				break;
			case "pesos":
				addPesos();
				break;
			default:
				break;
		}

	});
	
	function getQueryString() {
	  var key = false, res = {}, itm = null;
	  // get the query string without the ?
	  var qs = location.search.substring(1);
	  // check for the key as an argument
	  if (arguments.length > 0 && arguments[0].length > 1)
		key = arguments[0];
	  // make a regex pattern to grab key/value
	  var pattern = /([^&=]+)=([^&]*)/g;
	  // loop the items in the query string, either
	  // find a match to the argument, or build an object
	  // with key/value pairs
	  while (itm = pattern.exec(qs)) {
		if (key !== false && decodeURIComponent(itm[1]) === key)
		  return decodeURIComponent(itm[2]);
		else if (key === false)
		  res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
	  }

	  return key === false ? res : null;
	}
	function addElement(parentId, elementTag, elementId, html) {
		// Adds an element to the document
		var p = document.getElementById(parentId);
		var newElement = document.createElement(elementTag);
		newElement.setAttribute('id', elementId);
		newElement.innerHTML = html;
		p.appendChild(newElement);			
	}
	function removeElement(elementId) {
		// Removes an element from the document
		var element = document.getElementById(elementId);
		element.parentNode.removeChild(element);
	}
	

	function addMundial() {
		var o_iframe = ""
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {
		//if(true == true){
			console.log("Mobile");
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" style="text-align:center;" width="320" height="880" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiYTcxMWEzMjEtNGZkMy00OTNhLTkxMzgtYWY1M2Y1Njg1YTdiIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe style="text-align:center;" width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZDVlMmQxOWYtZDk0NC00N2MzLWFjMTAtYjcyODBiYmMzNjY1IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		
		var html = '<header class="major special" visibility: hidden>'
					+ '<h1>Mundiales</h1>'
					+ '<p style="text-align:justify">En este informe encontrarán la posibilidad de conocer las posiciones históricas de todos los mundiales hasta el día de hoy. Junto con el mismo, podrán navegar a los detalles de las formaciones originales de los equipos dando click derecho o manteniendo sobre el país de la tabla continuando en "Obtención de detalles". Algunos países no contenían la información respectiva de sus jugadores, que es el caso de aquellos que por lo general clasificaban por primera vez.'
					+ '	<br/>Así mismo podemos encontrar una segunda página para explorar el fixture histórico del mundial para conocer los detalles de los enfrentamientos. El conjunto de datos cuenta con datos hasta 2014. Próximamente veré la posibilidad de incorporar el mundial de Rusia cuando se completen los resultados finales.'
					+ '	<br/>Detalle de orígenes: Este conjunto de datos fue extraído de diversas fuentes encontradas en internet. Mayoritariamente puede encontrarse muchos datos en github al respecto, incluyendo un proyecto Football.db para extraer datos diariamente de distintos eventos futbolisticos.  (champions league, fifa worldcup, etc).'
					+ '	<br/>Junto con esta información se llevó también un scrappeo de wikipedia y otros sitios.</p>'
				+ o_iframe
				+ '</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addMessi() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {			
			o_iframe = '<b>Informe NO ajustable a pantalla celular. Cargando versión escritorio..</b><br/><iframe width="990" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZjhhYTZhNDUtMGViYS00ZmQzLTgxOTctNGE0ODJhNzVkMTkwIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZjhhYTZhNDUtMGViYS00ZmQzLTgxOTctNGE0ODJhNzVkMTkwIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		var html = '<header class="major special">'
					+ '<h1>This is Lionel Messi</h1>'
					+ '<p style="text-align:justify">El crack del fútbol mundial, considerado por muchos el mejor de la historia, ya tiene su propio informe. Este informe representa estadísticas de Messi a lo largo de su carrera futbolistica en la Liga Española, Champions League, Mundial y Copa America desde 2004.'
					+ '	<br/>Conocé el qué, cuando, cómo del crack para goles y asistencias. ¿Sabes su promedio de gol por partido? No esperes más y chequealo aquí.'
					+ '	<br/>COMPARÁ sus resultados contra sus rivales en la página 4 ingresando el nombre del equipo o país rival (en inglés).'
					+ '	<br/>Agradezco al creador de éste informe Tristan Malherbe que construyo estas maravillosas estadísticas con la api cuyos datos están en la última página.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
		function addManu() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {			
			o_iframe = '<b>Informe NO ajustable a pantalla celular. Cargando versión escritorio..</b><br/><iframe width="990" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiNjVkMWE3ZGUtOTQ0ZS00NDczLTg1OTYtZDRlNTNlMDE0NWQ1IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiNjVkMWE3ZGUtOTQ0ZS00NDczLTg1OTYtZDRlNTNlMDE0NWQ1IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		var html = '<header class="major special">'
					+ '<h1>This is Manu Ginóbili</h1>'
					+ '<p style="text-align:justify">El titán del basket mundial se retiró. Luego de 16 temporadas de increíble juego dentro de la mejor liga mundial del mundo (NBA) ha decidido dejar las canchas.'
					+ '	<br/>Tantas emociones en partidos de máxima competencia nos ha dado que no podía dejar de lado hacer un análisis de sus datos. Conocé los detalles de su carrera en San Antonio Spurs.'
					+ '	<br/>COMPARÁ sus resultados contra sus rivales seleccionando las abreviaciones de los otros equipos.'
					+ '	<br/>Todos los datos fueron extraídos de fuentes ofiales de NBA. Si querés aún más detalles podes ver el máximo fino de sus estadísticas tabla por tabla <a href="https://www.basketball-reference.com/players/g/ginobma01.html" target="_blank">aquí</a>.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addComics() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {		
		//if(true == true){			
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" style="text-align:center;" width="320" height="880" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiOWY5NTYxNTktNDgzZS00Y2EyLWE4NjctNzA0ZmM3ZjZhMmI0IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiMDVhZDgyNDQtZjJlZC00MmU5LWFiOWItMDRiNjY5YjdhZWFkIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		var html = '<header class="major special">'
					+ '<h1>Personajes DC Comics y Marvel</h1>'
					+ '<p style="text-align:justify">El mejor es Cyborg. ¡NO! me gusta Ironman. Para ricos está Batman que es más cool. No me digas que traigo a Hulk y listo. Pero pones a Superman y te liquida. De que hablas si está Capitana Marvel que supera todo. Se las verá con Shazam entonces. '
					+ '	<br/>¿De quien sos fanático? ¿DC Comics o Marvel?'
					+ '	<br/>Este informe es para fanáticos de los comics. Para que puedan buscar personajes y equivalencias entre las franquicias como así tambien conocer curiosidades de algunos de ellos entre villanos o heroes.'
					+ '	<br/>Si te queda inconcluso siempre podes ir a la WIKIA de cada uno con el link creado para conocer y saber más en detalle de ellos. No bastaría decir que los datos son un scrapping de wikia de ambos. También están en .csv por una persona solidaria que lo puso en github.'
					+ '	<br/>No solo comics, sino también conocé en una de las páginas las PELICULAS de las franquicias. Las históricas y las próximas a estrenar.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addEshop() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {
		//if(true == true){
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" style="text-align:center;" width="320" height="880" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiYWM1MzYwZDctMjQxZi00ZmRjLWI1MzEtOTMxMGY5MjkzNzcxIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiN2M2Njk0ZmItMTJkMi00ZGNlLWE0OWMtNjU4YjYxNjRmNjc3IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9" frameborder="0" allowfullscreen></iframe>'
		}			
		var html = '<header class="major special">'
					+ '<h1>Nintendo EShop</h1>'
					+ '<p style="text-align:justify">Este informe es la clara esencia de la pobreza Argentina y su devaluación del dolar constante. El reporte contiene la posibilidad de conocer los juegos que tienen mayor diferencia de precios en cualquier tienda del mundo respecto de la tienda de Estados Unidos.'
					+ '	<br/>Así mismo, en ambas páginas, cuenta con un buscador de juegos a nivel mundial para poder comparar sobre un juego selectivamente.	'
					+ '	<br/>¡Llegó la hora de comprar sin ser cagado!'
					+ '	<br/>Detalle de orígenes: Este conjunto de datos fue extraído de un sitio que previamente a scrappeado o formado un dataset muy bueno con la información necesaria.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addAuto() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {			
			o_iframe = '<b>Informe NO ajustable a pantalla celular. Cargando versión escritorio..</b><br/><iframe width="990" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZTUzYWQ5YzAtZGNiZi00ZGM0LWIyZjYtODY4ZTAwMDZiYzk4IiwidCI6ImFkZWVlOTQ1LTQ2NWQtNDY5Zi05YzEwLWJiZjU1YmVkNDllYSIsImMiOjR9"></iframe>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZTUzYWQ5YzAtZGNiZi00ZGM0LWIyZjYtODY4ZTAwMDZiYzk4IiwidCI6ImFkZWVlOTQ1LTQ2NWQtNDY5Zi05YzEwLWJiZjU1YmVkNDllYSIsImMiOjR9"></iframe>';
		}
		var html = '<header class="major special">'
					+ '<h1>Registro Automotor</h1>'
					+ '<p style="text-align:justify">Aun que pocos lo crean. El gobierno argentino si publica datos abiertos para poder consumirlos y realizar análisis interesante de diversos tópicos.'
					+ '	<br/>Uno de los que más me gustó a mi y es posible mezclarlo con negocios relacionados a la industria automotriz, es el conocimiento de los patentamientos históricos nacionales en todo el país y en cada provincia en particular.'
					+ '	<br/>En este informe se puede apreciar varias páginas con medidas de cantidad de vehículos patentados. Por ejemplo en la primera página, hay un mapa que contiene dos medidas. Tamaño de círculos es el promedio de vehículos por habitantes y la saturación de color es la cantidad de vehículo, siendo rojo el más alto.'
					+ '	<br/>En otras se puede apreciar a nivel evolutivo como es el porcentaje de crecimiento a medida que pasa el tiempo y una predicción de los próximos años en cantidad.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addPesos() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {		
		//if(true == true){			
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" style="text-align:center;" width="320" height="880" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiODFkOTE1ZGYtM2RhNi00Y2ViLTkwYjAtZWZmYzA0ZDcyYjMzIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZGQyMTE1MTItZWViMC00YTQwLWIxOTItMjI4YzNiN2M1Nzk5IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		var html = '<header class="major special">'
					+ '<h1>Devaluación Histórica del Peso Argentino ARS</h1>'
					+ '<p style="text-align:justify">La economía Argentina ha pasado por tremendos cambios a lo largo de los últimos años. '
					+ '	<br/>¿Cómo estuvimos antes? ¿a quien no se le cruza por la cabeza pensar que hubiera pasado si cambiaba dolares en el momento perfecto?'
					+ '	<br/>Este informe presenta como ha cambiado el peso respecto al dolar a lo largo del tiempo tanto en un promedio mensual como al fino de cada día en que subía y bajaba como loco.'
					+ '	<br/>Tal vez no pensabas en dolares o te interesa conocer a otros paises. La segunda página nos revelara las relaciones con las otras monedas del mundo.'
					+ '	<br/>Los datos son recolectados diariamente de la página web del Banco Central. Agradezco especialmente la segunda página a un amigo que se encargo de la recolección de datos para todas las monedas.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addPoke() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {			
			o_iframe = '<b>Informe NO ajustable a pantalla celular. Cargando versión escritorio..</b><br/><iframe width="990" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiYzAwM2E2OTYtNmNjOS00NjVhLWFkZWYtNjAxMmU4ZjA5NDAwIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9"></iframe>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiOTY1MTJiMmMtOTQ3Zi00NmY3LTk0ZTctZWIwYmZkYzk2ZTk5IiwidCI6IjQxMGJiOTRmLTg0ODgtNGIzMy05MDg3LTQzNTU3OTZjNzcyYyIsImMiOjh9"></iframe>';
			//VIEJO: https://app.powerbi.com/view?r=eyJrIjoiYzAwM2E2OTYtNmNjOS00NjVhLWFkZWYtNjAxMmU4ZjA5NDAwIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9
		}
		var html = '<header class="major special">'
					+ '<h1>Pokemon Go</h1>'
					+ '<p style="text-align:justify">¿Seguis Jugando Pokemon GO?.'
					+ '	<br/>Si no lo haces esta es tu oportunidad para volver.'
					+ '	<br/>Conoce toda la información del juego y sus personajes para ser el mejor entrenador pokemon y poder capturarlos a todos.'
					+ '	<br/>Historia contada en la comunidad de Power Bi: <a href="http://community.powerbi.com/t5/Data-Stories-Gallery/Pokémon-GO/td-p/53729">Enlace Directo</a>.</p>'
				+ o_iframe
				+'</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addRusia() {
		var o_iframe = ""
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {
		//if(true == true){
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" style="text-align:center;" width="320" height="880" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZjEwOTkwMTMtZjgxZC00MjcyLWI2MGMtYzkyNDJlNGNhZDUzIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe style="text-align:center;" width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiZTY3YmQ3NGEtZGU5Ni00NWQ5LTg1OGItY2UyOWRhYzhjMzU3IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>';
		}
		
		var html = '<header class="major special" visibility: hidden>'
					+ '<h1>Rusia 2018</h1>'
					+ '<p>Como dejar pasar la posibilidad de analizar el día a día.'
					+ '	<br/>Ojala que google no liquide la posibilidad de tener esta página a mano para disfrutar el conocimiento del mundial al dia de partido conociendo como los grupos van evolucionando.'
					+ '	<br/>Conoce como van los grupos y cuando son los partidos de la copa del mundo Rusia 2018.'
					+ '	<br/>Agradezco a Curbal Bi por sus datos para poder llevar este informe al día.</p>'
				+ o_iframe
				+ '</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	
	function addMovies() {
		var o_iframe = "";
		if ( $( "#divito" ).length ) {
			removeElement('divito');
		}
		if (isMobile.any()) {
		//if(true == true){
			o_iframe = '<div class="resp-container"><iframe class="resp-iframe" width="450" height="1065" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiOWY2NTg0NGEtYWU5Ni00ZDcxLTg3NGQtYWVmYTdhNDY0N2Q2IiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe></div>';
		}
		else {
			o_iframe = '<iframe width="1020" height="550" scrolling="auto" src="https://app.powerbi.com/view?r=eyJrIjoiMzIwNTczYzAtODAyYy00NjY2LTk2MGMtNTE2MmExN2M3NTczIiwidCI6ImRjZmI2MzJhLWI4OTYtNDI4OC04NDEzLWVjOGQ5NTQxMDZlNiIsImMiOjR9"></iframe>'
		}
		var html = '<header class="major special">'
					+ '<h1>Películas IMDB</h1>'
					+ '<p style="text-align:justify">Cuando ya no sabes que película ver y nadie te recomienda nada que esté interesante o ya viste de todo. Siempre podes pasar por aquí'
					+ '	<br/>Este conjunto de datos publicado en una competencia de Kaggle, contiene información de las películas de IMDB. El sitio mundial en el cual miles de personas votan y critican lo más grande del cine.'
					+ '	<br/>Aprovechate del buscador para encontrar tu película ideal buscando por genero o tag. Sino también podes buscar el rating de algunas específica por año de lanzamiento o título.'
					+ '	<br/>Para darle un toque especial. Tiene adicionalmente un enlace al sitio para leer la crítica completa o los comentarios de los votantes como así también a una búsqueda de youtube para buscar el trailer.</p>'
				+ o_iframe
				+ '</header>';
		addElement('dentro', 'div', 'divito', html);
	}
	function dele() {
		removeElement('divito');
	}
