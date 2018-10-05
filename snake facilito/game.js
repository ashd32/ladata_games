//En canvas es alreves el valor +- sobre ejes y
;(function(){
	
	class Random{
		//statico para llamarlo de cualquier lado y no con la clase.
		static get(inicio, fin){
			return Math.floor(Math.random() * fin) + inicio
		}
	}
	
	class Food{
		constructor(x,y){
			this.x = x
			this.y = y
			this.width = 10
			this.height = 10
		}
		
		draw(){
			ctx.fillRect(this.x, this.y,this.width,this.height)
		}
		
		static generate(){
			return new Food(Random.get(0,350), Random.get(0,300))
		}
	}
	
	class Square{
		constructor(x,y){
			this.x = x
			this.y = y
			this.width = 10
			this.height = 10
			this.back = null//Cuadrado de atras. Todo square tendrá un cuadrado atrás.
		}
		draw(){
			ctx.fillRect(this.x, this.y,this.width,this.height)
			if(this.hasBack()){
				this.back.draw()
			}
		}
		
		add(){
			if(this.hasBack()){
				return this.back.add() //Si ya hay uno atras se lo delega al de atras sucesivamente hasta que no tenga.
			}
			this.back = new Square(this.x, this.y)
		}
		
		hasBack(){
			//siDevuelve falso si back es nullo
			return this.back !== null
		}
		
		copy(){
			if(this.hasBack()){
				this.back.copy()
				this.back.x=this.x
				this.back.y=this.y
			}
		}
		right(){
			this.copy()
			this.x +=10
		}
		left(){
			this.copy()
			this.x -=10			
		}
		up(){
			this.copy()
			this.y -=10
		}
		down(){
			this.copy()
			this.y +=10
		}
		
		hit(head, segundo=false){
			if(this === head && !this.hasBack()){
				return false
			}
			if(this === head){
				return this.back.hit(head,true)
			}
			
			if(segundo && !this.hasBack()){
				return false
			}
			if(segundo){
				return this.back.hit(head)
			}
			
			//No es ni cabeza ni segundo
			if(this.hasBack()){
				return squareHit(this,head) || this.back.hit(head)
			}
			
			//No es la cabeza ni el segundo
			return squareHit(this, head)
		}
		
		hitBorder(){
			return (this.x > 340 || this.x < 0 || this.y > 290 || this.y < 0)
		}
	}
	
	class Snake{
		constructor(){
			this.head = new Square(100,0)
			this.draw()
			this.direction = "right"
			this.head.add()
		}
		draw(){
			this.head.draw()
			//ctx.fillRect(20,20,10,10)
		}
		
		right(){
			//this.head.x +=10 si se quedara quieto, moveriamos en el canvas el lugar así
			if(this.direction==="left") return;
			this.direction = "right"
		}
		left(){
			//this.head.x -=10
			if(this.direction==="right") return;
			this.direction = "left"
		}
		up(){
			//this.head.y -=10
			if(this.direction==="down") return;
			this.direction = "up"
		}
		down(){
			//this.head.y +=10
			if(this.direction==="up") return;
			this.direction = "down"
		}
		
		move(){
			if (this.direction === "up") return this.head.up()
			if (this.direction === "down") return this.head.down()
			if (this.direction === "left") return this.head.left()
			if (this.direction === "right") this.head.right()
		}
	
		eat(){			
			this.head.add()
			if( segundos==0 ) { segundos = 1 }
			puntos = puntos + (1/segundos)
			console.log("Puntos: "+puntos)
			console.log("Segundos: "+segundos)
			segundos = 0
			score.innerHTML = "Score: " + puntos.toString();
		}
		
		dead(){
			//si es verdadero hay un choque
			//Chocar conmigo mismo            //Chocar con bordes
			return this.head.hit(this.head) || this.head.hitBorder()			  
		}
	
	}
	
	const canvas = document.getElementById('canvas_snake')
	const ctx = canvas.getContext('2d')
	var puntos = 0
	var segundos = 0
	var score = document.getElementById("score");
	//Dibujar en canvas -> ctx.fillRect(0,0,50,50) ubicacion arriba abajo y ancho alto

	const snake = new Snake()
	
	let foods = []
	
	//Si fuera sobre canvas, tendrías que darle click para que funcione
	window.addEventListener('keydown', function(event){
		//console.log(event.keyCode) para reconocer el codigo de teclas
		//para quitar comportamiento por default del navegador (que las flechas no te jodan moviendo la pantalla para jugar)
		if(event.keyCode > 36 && event.keyCode < 41){
			event.preventDefault()
		}	
		
		if(event.keyCode === 40) return snake.down();
		if(event.keyCode === 39) return snake.right();
		if(event.keyCode === 38) return snake.up();
		if(event.keyCode === 37) return snake.left();		
		
		return false
		
	})
	
	document.getElementById("d").addEventListener("click", function(){return snake.down()});		
	document.getElementById("u").addEventListener("click", function(){return snake.up()});		
	document.getElementById("l").addEventListener("click", function(){return snake.left()});		
	document.getElementById("r").addEventListener("click", function(){return snake.right()});		
	
	const animacion = setInterval(function(){
		snake.move()
		// borra lo que se encuentra en el cuadrado que dibujemos (0,0,200,200) comenzando en y x en 0 0 borra 200 a tal y 200 a tal
		ctx.clearRect(0,0,canvas.width, canvas.height) 
		snake.draw()
		drawFood()
		
		if(snake.dead()){
			alert('Perdiste. Puntaje: '+ puntos.toString() );
			window.clearInterval(animacion)
		}
		
	}, 1000 / 13) //ejecutar la funcion segun milisegundos / fotogramas
	
	setInterval(function(){
		segundos = segundos + 1
	}, 1000)
	
	setInterval(function(){
		const food = Food.generate()
		foods.push(food)		
		
		setTimeout(function(){
			//Eliminar comida
			removeFromFoods(food)
		},10000)
	
	}, 3000)
	
	
	function drawFood(){
		for(const i in foods){
			const food = foods[i]
			if(typeof food !== "undefined"){
				food.draw()
				if(hit(food,snake.head)){
					snake.eat()
					removeFromFoods(food)
				}
			}			
			
		}
	}
	function removeFromFoods(food){
		//[food1, food2, food3]		
		foods = foods.filter(function(f){
			return food !== f
		})
	}
	
	function squareHit(cuadrado1, cuadrado2){
		//si coinciden dos cuadrados en posiciones, estan chocando.
		return cuadrado1.x == cuadrado2.x && cuadrado1.y == cuadrado2.y
	}
	
	function hit(a,b){
		var hit = false;
		//Colisiones horizontales
		if(b.x + b.width >= a.x && b.x < a.x + a.width){
			//Colisiones verticales
			if(b.y + b.height >= a.y && b.y < a.y + a.height){
				hit = true;
			}
			
		}		
		//Colisiones de a con b
		if(b.x <= a.x && b.x + b.width >= a.x + a.width){
			if(b.y <= a.y && b.y + b.height >= a.y + a.height){
				hit=true;
			}
		}
		return hit;	
	}
	
	function roundToTwo(num) {    
		return +(Math.round(num + "e+4")  + "e-4");
	}
	
	
})()
	
	