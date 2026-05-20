//  ──  declaración global de variables  ─────────────────────────────────

const diccionari = ["Luis", "gato", "sol"];

let palabraSolucion;
let palabraGuiones = [];
let listaLetras = [];
let errores = 0;

// ── INICI DEL PROGRAMA ─────────────────────────────────
function Inicializar() {

  // ── Selecció aleatòria de la paraula ───────────────────
  let indexRandom = Math.floor(Math.random() * diccionari.length);
  palabraSolucion = diccionari[indexRandom];

  // ── PalabraGuiones: array de "_" per a cada lletra ─────
  palabraGuiones = [];
  for (let i = 0; i < palabraSolucion.length; i++) {
    palabraGuiones.push("_");
  }

  // borra palabra guiones anterior
  document.getElementById("palabra").innerHTML = "";

  // Mostra la paraula inicial amb guions i la primera imatge
  for (let i = 0; i < palabraGuiones.length; i++) {
    document.getElementById("palabra").innerHTML += `${palabraGuiones[i]} `;
  }

  // ── Buida ListaLetras: lletres ja dites pel jugador ──────────
  listaLetras = [];

  // ── Comptador d'errors ─────────────────────────────────
  errores = 0;

  
  // Actualitzar la paraula a pantalla
  document.getElementById("palabra").innerHTML = palabraGuiones.join(" ");
  
  
  // Netejar el camp input
  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();
}


// ── FUNCIÓN enviarLetra ────────────────────────────────
// Llegeix la lletra del camp input, la afegeix a la llista
// i comprova si està a la paraula solució

function enviarLetra() {
  
  // Llegir el valor del camp id="letra"
  let letraInput = document.getElementById("letra").value.trim();
  letraInput = letraInput.toLowerCase();
  
  // Guardar la lletra al array ListaLetras
  listaLetras.push(letraInput);
  
  // Mostrar la lletra al panell dret (id="lista_letras")
  document.getElementById("lista_letras").innerHTML += letraInput.toLowerCase() + " ";
  
  // Recórrer la paraula solució per buscar la lletra (FOR)
  let esCorrecta = false;
  for (let i = 0; i < palabraSolucion.length; i++) {
    if (palabraSolucion[i].toLowerCase() === letraInput){ // 
      palabraGuiones[i] = letraInput;  // substituir "_" per la lletra
      esCorrecta = true
    }
  }
  
// función dibujar para sacar las imagenes si fallas//
function DIBUJAR() {
  switch (errores) {
    case 0: document.getElementById("imagen").src = "IMG/A0.png"; break;
    case 1: document.getElementById("imagen").src = "IMG/A1.png"; break;
    case 2: document.getElementById("imagen").src = "IMG/A2.png"; break;
    case 3: document.getElementById("imagen").src = "IMG/A3.png"; break;
    case 4: document.getElementById("imagen").src = "IMG/A4.png"; break;
    case 5: document.getElementById("imagen").src = "IMG/A5.png"; break;
    case 6: document.getElementById("imagen").src = "IMG/A6.png"; break;
    case 7: document.getElementById("imagen").src = "IMG/A7.png"; break;
  }
}
      
      // Si la lletra NO és correcta  incrementar errors i canviar imatge
      if (!esCorrecta) {
        errores++;
        DIBUJAR();
      }
   document.getElementById("palabra").innerHTML = palabraGuiones.join(" ");
}


