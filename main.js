//VAR CONST LET
//Las var funcionan para todo el codigo siempre que este por detras de donde la queremos declarar y se pueden modificar.
var nombreVAR = "name";
var apellidoVAR = "last name";

//Las const también funcionan en todo el codigo siempre que esten detrás pero son valores que no se pueden modificar.
const nombreCONST = "name";
const apellidoCONST = "last name";

//Las let solo funcioann dentro de las funciones, fuera de las funciones no funciona.
function funcion() {
  let nombreLET = "name";
  let apellidoLET = "last name";
}

function funcion() {
  //Aqui ya si lo declaramos no funciona.
}

//AGREGAR HTML
var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Buenas mi nombre es ${nombreVAR}</h1>
<h2>Mi apellido es ${apellidoVAR}</h2>
`; //Aqui ahora ponemos el codigo html que queramos imprimir.

//CONDICIONALES
if ((nameVAR = "name")) {
  result = document.getElementById("result");
  result.innerHTML = `
    <h1>Su nombre es ${nameVAR} y esto es un condicional</h1>
    `;
  //Esto nos dice que en caso de que el contenido de la variable sea igual a name nos deja por el div result un mensaje.
} else {
  result = document.getElementById("result");
  result.innerHTML = `
  <h3>SU nombre no es ${nameVAR} y esto es un condicional</h3>
  `;
}

//BUCLES
// Primero hay que definir la variable que lo inicializa, luego hay que pasarle la condición y finalmente el incrementador.
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

//FUNCIONES
function MiNombreYApellido(nombreVAR) {
  ejFunc = document.getElementById("funcionesEj");
  ejFunc.innerHTML = `
  <h1>Su nombre es ${nombreVAR} y esto es un condicional</h1>`;
}
MiNombreYApellido("EjemploNombre");

//RETURN HTML
function ReturnHTML(nameVAR) {
  HTMLimport = `
  <h1>HTML importado desde un return, el nombre es: ${nameVAR} </h1>`; //Codigo que queremos sacar
  return HTMLimport; // Lo que queremos sacar de la funcion
}

var imprirHTMLreturn = document.getElementById("returnHTMLbox"); //Definir donde esta el contenedor del html que vamos a importar.
imprirHTMLreturn.innerHTML = ReturnHTML("Nombre imprimido con un return"); //Imprimir el html con el innerHTML y un return dentro de la funcion.

//Posiciones de un array
var nombres = ["name1", "name2", "name3"]; //Son varias variables declarada dentro de una variable, tambiés pueden haber numeros.
console.log(nombres[(0, 1, 2)]); //Empieza desde el numero 0 y va subiendo. El 0 representaria a "name1".

//Recorrer la array con un bucle forEach
nombres.forEach(function (nombre) {
  //Podemos hacer la callBack también con una (=>) y no tener que poner el function.
  //Hemos creado una funcion dentro de otra y es anonima ay que no la tenemos que declarar.
  document.write(nombre + "<br/>"); //Esto lo que hace es escribir el nombre y el <br/> es la etiqueta html para saltar de linea
});

//OBJETOS
var coche = {
  modelo: "Mercedes clase A",
  maxima: 300,
  antiguedad: 2020,
  MostrarDatos() {
    console.log(modelo, maxima, antiguedad); //Esto es un metodo que lo que hace es que muestra ciertos datos sobre el coche. Lo tenemos que invocar luego.
  }, //Despues de eto podemos seguir haciendo uso del objeto y le podemos meter más cosas.
  color: "azul",
}; //Con esto hemos creado una objeto dentro una variable con una serie de caracteristicas.

document.write("<h1>" + coche.modelo + "</h1>"); //Esto nos imprime en pantalla en este caso el modelo del coche.
coche.MostrarDatos(); //Invocar la funcion que hemos ejecutado en el objeto.

//PROMESAS
//Las promesas es una funcion que nos promete que va a llegar un dato sea negativo o positivo.
var saludar = new Promise((resolve, reject) => {
  //Resolve (que ha llegado la promesa) Reject (No va a llegar la promesa)

  setTimeout(() => {
    //Esta funcion lo que hace es esperarse unos segundos a que algo se ejecute.
    let saludo = "Hola buenas";

    if ((saludo = true)) {
      resolve(saludo); //En caso de que sea positivo con el resolve le pasamos el saludo
    } else {
      reject("no hay saludo disponible"); //En este caso de que sea negativa nos dice que no hay saludo disponible con el reject
    }
  }, 2000);
});

saludar
  .then((resultado) => {
    //El then quiere decir ejecutame la promesa saludar y cuando este ejecutame lo que este dentro del then.
    console.log(resultado); //El resultado es lo que nos devuelve el resolve
  })
  .catch((err) => {
    //Esto lo que hace es lo que le devuelve el reject y nos lo muestra con un alert
    console.log(err);
  });

//Clases
class Coche {
  //Las clases sirven para hacer diferentes funciones de los mismos datos.
  constructor(marca,velocidad,año){ //Le pasamos los parametros para poder representarlos abajo.
    this.marca = marca;
    this.velocidad = velocidad;
    this.año = año
  }
  //Ahora creamos una serie de funciones para poder tratarlas luego
  aumentarVelocidad(){
    this.velocidad += 1
  }
  reducirVelocidad(){
    this.velocidad -= 1
  }
}

var coche1 = new Coche("BMW","200","2017") //Creamos el objeto con los datos que queremos
//Hacemos un bucle para pasarle en este caso un aumento de velocidad
for(i=0; i< 5; i++){
  coche1.aumentarVelocidad() //le pasamos el nombre del objeto y el parametro y ejecutamos la funcion
}

//Hacemos un bucle para pasarle en este caso una reducción de la velocidad
var coche2 = new Coche("Audi","220","2013")
for(i=0; i< 10; i++){
  coche2.reducirVelocidad() //le pasamos el nombre del objeto y el parametro y ejecutamos la funcion
}

//Hacemos un bucle para pasarle en este caso un aumento de velocidad
var coche3 = new Coche("Ford","150","2022")
for(i=0; i< 15; i++){
  coche3.aumentarVelocidad() //le pasamos el nombre del objeto y el parametro y ejecutamos la funcion
}

document.write("el coche uno es de la marca: "+coche1.marca) //Lo imprimimos en este caso la marca accediendo al parametrod del objeto con el (.)

//LA HERENCIA
//Esto sirve para coger las propiedades de otra classe.
class Autobus extends Coche{
  constructor(modelo,velocidad,antiguedad){
    super(modelo,velocidad,antiguedad) //Las propiedades que le queremos pasar.
    this.altura = 5; //Aqui deifnimos un nuevo valor agregado solo a este objeto
  }
  mostrarAltura(){
    return "La altura es " + this.altura //Esto nos da un return de un string más el parametro de la altura que hemos definido anteriormente.
  }
}
var autobus1 = new Autobus('Pegasus','202',"2015") //Ahora tendra las propiedades del coche pero sin tener que hacer otra vez la classe.
console.log(autobus1.mostrarAltura()) //Esto nos esta devolviendo el return de la funcion de mostrar la altura.

//CONCATENAR
concatenation = `${nombre} and ${apellido}`; // Forma de concatenar datos en un string.
concatenation = nombre + " " + apellido; // Forma de concatenar uniendo las dos variables con el [+]
