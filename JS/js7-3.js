//  ──  declaración global de variables  ─────────────────────────────────

const diccionari = ["luis", "gato", "sol"];

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

  // borra lletres anteriors
  document.getElementById("lista_letras").innerHTML = "";

  // ── Buida ListaLetras: lletres ja dites pel jugador ──────────
  listaLetras = [];

  // ── Comptador d'errors ─────────────────────────────────
  errores = 0;


  // Actualitzar la paraula a pantalla
  document.getElementById("palabra").innerHTML = palabraGuiones.join(" ");


  // Netejar el camp input
  document.getElementById("letra").value = "";
  document.getElementById("letra").focus();

  document.getElementById("imagen").src = "IMG/A0.png";
}


// ── FUNCIÓN enviarLetra ────────────────────────────────
// Llegeix la lletra del camp input, la afegeix a la llista
// i comprova si està a la paraula solució

function enviarLetra() {

  let letraInput;
  // Llegir el valor del camp id="letra" 
  // eliminant possibles espais al principi i al final, i convertir a minúscula
  letraInput = document.getElementById("letra").value.trim();
  letraInput = letraInput.toLowerCase();

  // Guardar la lletra al array ListaLetras
  listaLetras.push(letraInput);

  // Mostrar la lletra al panell dret (id="lista_letras")
  document.getElementById("lista_letras").innerHTML += `${letraInput}<br>`;

  // Recórrer la paraula solució per buscar la lletra (FOR)
  let esCorrecta = false;
  for (let i = 0; i < palabraSolucion.length; i++) {
    if (palabraSolucion[i] == letraInput) { // 
      palabraGuiones[i] = letraInput;  // substituir "_" per la lletra
      esCorrecta = true;
    }
  }
    // Si la lletra NO és correcta  incrementar errors i canviar imatge
    if (!esCorrecta) {
      errores++;
      DIBUJAR();
    } else {
      // Si la lletra és correcta, actualitzar la paraula a pantalla
      for (let i = 0; i < palabraGuiones.length; i++) {
        document.getElementById("palabra").innerHTML = `${palabraGuiones[i]} `;
      }
    }

    // poner el foco en el input de la letra y limpiar el campo
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();

    // final del juego
  if (errores == 6) {
    // mostrar el div de derrota
    document.getElementById("final-perder").style.display = "block";
    // mostrar la palabra solución
    document.getElementById("solucion").innerHTML = `${palabraSolucion}`;
    document.getElementById("boton-perder").focus();
  } else if (!palabraGuiones.includes("_")) {
    // mostrar el div de victoria
    document.getElementById("final-ganar").style.display = "block";
    document.getElementById("boton-ganar").focus();
  }

}  /// fin de la función enviarLetra






// declaración de la función para dibujar

function DIBUJAR() {
  switch (errores) {
    case 0:
      document.getElementById("imagen").src = "IMG/A0.png";
      break;
      case 1:
        document.getElementById("imagen").src = "IMG/A1.png";
        break;
      case 2:
        document.getElementById("imagen").src = "IMG/A2.png";
        break;
      case 3:
        document.getElementById("imagen").src = "IMG/A3.png";
        break;
      case 4:
        document.getElementById("imagen").src = "IMG/A4.png";
        break;
      case 5:
        document.getElementById("imagen").src = "IMG/A5.png";
        break;
      case 6:
        document.getElementById("imagen").src = "IMG/A6.png";
        break;
    }
  }
