    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
document.body.onkeydown = function( e ) {
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

document.getElementById("d").addEventListener("click", function(){
	keyPress( keys[ 40 ] );
    render();
});		
document.getElementById("u").addEventListener("click", function(){
	keyPress( keys[ 38 ] );
    render();
});		
document.getElementById("l").addEventListener("click", function(){
	keyPress( keys[ 37 ] );
    render();
});		
document.getElementById("r").addEventListener("click", function(){
	keyPress( keys[ 39 ] );
    render();
});	

window.addEventListener('keydown', function(event){
	//console.log(event.keyCode) para reconocer el codigo de teclas
	//para quitar comportamiento por default del navegador (que las flechas no te jodan moviendo la pantalla para jugar)
	if(event.keyCode > 36 && event.keyCode < 41){
		event.preventDefault()
	}	
	
	return false
	
});