//variables inicializadoras
let canvas
let ctx
let image 
//FPS
const FPS = 50

//tamaño de la ficha
let anchoF = 50
let altoF = 50

//tipo de ficha
/* let pasto = document.getElementById("grass");
let agua = document.getElementById("water");
let tierra = document.getElementById("earth"); */
let pasto = new Image
let agua = new Image
let tierra = new Image


//escenario Array Matriz
let escenario = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
    [0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 2, 2, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2, 0, 0, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2],
    [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],

]

//construir escenario
function dibujarEscenario() {
    let color
    //Recorrer el escenario
    for (y = 0; y < escenario.length; y++) {
        for (x = 0; x < escenario.length; x++) {
            if (escenario[y][x] == 0) {
                color = document.getElementById("grass");
            }
            if (escenario[y][x] == 1) {
                color = document.getElementById("water");
            }
            if (escenario[y][x] == 2) {
                color = document.getElementById("earth");
            }
            /* ctx.fillStyle = color
            ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF) */
            ctx.drawImage(color, x * anchoF, y * altoF, anchoF+1, altoF+1);

        }
    }
}

//Declaramos la funcion del personaje
let player = function () {
    //Atributos
    this.x 
    this.y 
    this.color = document.getElementById("character");
    
    //Metodos
    this.dibuja = function () {
        ctx.drawImage(this.color, this.x * anchoF, this.y * altoF, anchoF, altoF);
        /* ctx.fillStyle = this.color
        ctx.fillRect(this.x * anchoF, this.y * altoF, anchoF, altoF) */
    }
    this.arriba = function () {
        /* if (this.margenes(this.x, this.y-1) == false) { */
            this.y--
        /* } */
    }
    this.abajo = function () {
        /* if (this.margenes(this.x, this.y + 1) == false) { */
            this.y++
       /*  } */
    }
    this.izquierda = function () {
        /* if (this.margenes(this.x - 1, this.y) == false) { */
            this.x--
        /* } */
    }
    this.derecha = function () {
        /* if (this.margenes(this.x + 1, this.y) == false) { */
            this.x++
        /* } */
    }
/*     this.margenes = function (x, y) {
        let colisiones = false
        if (escenario[x][y] != 2) {
            colisiones = true
        }
        return (colisiones)
    } */
}

//varibale global 
let protagonista

//Lectura de teclado
document.addEventListener("keydown", function (tecla) {
    if (tecla.key == "ArrowUp" && escenario[protagonista.y-1][protagonista.x] == 2) {
            protagonista.arriba()
        }
    if (tecla.key == "ArrowDown" && escenario[protagonista.y+1][protagonista.x] == 2) {
            protagonista.abajo()
        }
    if (tecla.key == "ArrowRight" && escenario[protagonista.y][protagonista.x+1] == 2) {
            protagonista.derecha()
        }
    if (tecla.key == "ArrowLeft" && escenario[protagonista.y][protagonista.x-1] == 2) {
            protagonista.izquierda()
    }
    
/*     if (tecla.key == "w" && escenario[enemigo.y - 1][enemigo.x] == 2) {
        enemigo.arriba()
    }
    if (tecla.key == "s" && escenario[enemigo.y + 1][enemigo.x] == 2) {
        enemigo.abajo()
    }
    if (tecla.key == "d" && escenario[enemigo.y][enemigo.x + 1] == 2) {
        enemigo.derecha()
    }
    if (tecla.key == "a" && escenario[enemigo.y][enemigo.x - 1] == 2) {
        enemigo.izquierda()
    } */
})

// esta funcion activa todo
function inicializa() {
    canvas = document.getElementById("canva")
    ctx = canvas.getContext("2d")

    //creamos a el protagonista
    protagonista = new player
    protagonista.x = 14
    protagonista.y = 0
    
    /* enemigo = new player
    enemigo.x = 14
    enemigo.y = 14
    enemigo.color = "red" */
    
    //Nos permite manejar tiempos
    setInterval(function () {
        principal()
    }, 1000 / FPS)
    
}

// esta funcion centraliza las demas funciones 
function principal() {
    dibujarEscenario()
    protagonista.dibuja()
    /* enemigo.dibuja() */
}


