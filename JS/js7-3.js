const diccionari = ["sol","luna"," casa", "amigo", "bonito","planta",  "coche"];

let palabraSolucion;
let palabraGuiones = [];
let listaLetras = [];
let errores = 0;

function Inicializar() {

  let indexRandom = Math.floor(Math.random() * diccionari.length);
  palabraSolucion = diccionari[indexRandom];

  palabraGuiones = [];
  for (let i = 0; i < palabraSolucion.length; i++) {
    palabraGuiones.push("_");
  }

  document.getElementById("palabra").innerHTML = "";

  for (let i = 0; i < palabraGuiones.length; i++) {
    document.getElementById("palabra").innerHTML += `${palabraGuiones[i]} `;
  }

  document.getElementById("lista_letras").innerHTML = "";

  listaLetras = [];
  errores = 0;

  document.getElementById("palabra").innerHTML = palabraGuiones.join(" ");

  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();

  document.getElementById("imagen").src = "IMG/A0.png";

  document.getElementById("imagen-final-ganar").src = "IMG/Que_pro.webp";
  document.getElementById("final-ganar").style.display = "none";
  document.getElementById("imagen-final-perder").src = "IMG/perdiste.jpg";
  document.getElementById("final-perder").style.display = "none";
}


function enviarLetra() {

  let letraInput;
  letraInput = document.getElementById("letra").value.trim();
  letraInput = letraInput.toLowerCase();

  listaLetras.push(letraInput);

  document.getElementById("lista_letras").innerHTML += `${letraInput}<br>`;

  let esCorrecta = false;
  for (let i = 0; i < palabraSolucion.length; i++) {
    if (palabraSolucion[i] == letraInput) {
      palabraGuiones[i] = letraInput;
      esCorrecta = true;
    }
  }

  if (!esCorrecta) {
    errores++;
    DIBUJAR();
  }

  document.getElementById("palabra").innerHTML = palabraGuiones.join(" ");

  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();

  if (errores == 6) {
    document.getElementById("final-perder").style.display = "block";
    document.getElementById("solucion").innerHTML = `${palabraSolucion}`;
    document.getElementById("boton-perder").focus();


  } else if (!palabraGuiones.includes("_")) {
    document.getElementById("final-ganar").style.display = "block";
    document.getElementById("boton-ganar").focus();
  }
}


function DIBUJAR() {
  switch (errores) {
    case 0: document.getElementById("imagen").src = "IMG/A0.png"; break;
    case 1: document.getElementById("imagen").src = "IMG/A1.png"; break;
    case 2: document.getElementById("imagen").src = "IMG/A2.png"; break;
    case 3: document.getElementById("imagen").src = "IMG/A3.png"; break;
    case 4: document.getElementById("imagen").src = "IMG/A4.png"; break;
    case 5: document.getElementById("imagen").src = "IMG/A5.png"; break;
    case 6: document.getElementById("imagen").src = "IMG/A6.png"; break;
  }
}
