//seleziono gli elementi che mi interessano
//contenitore per il gioco
const boxContainer = document.getElementById('box-container');
//play
const btnPlay = document.getElementById('btn-play');
//difficolta
const selectDifficult = document.getElementById('select-difficult');

console.log('btnPlay');

btnPlay.addEventListener("click", function () {
    // l'utente sceglie il livello
    const level = selectDifficult.value;

  //recupero il numero di celle che bisogna creare
    const totalCell = getCellNum(level);

  //invoco il numero di celle da creare
    generateGrid(totalCell);

   // let numeroBombe = 16;
   
    numeroBombe = placeBomb(16, totalCell);
});

//in base alla scelta adella difficolta genera un numero differente di celle, e qui calcolo il numero di celle di cui ho bisogno
function getCellNum(level){
  let result;

  switch (parseInt(level)){
    case 1: 
    result = 100;

    break;
    case 2: 
    result = 81;

    break;
    case 3: 
    result = 49;
      break;

  }
  return result;
}

//la funzione mi crea il numero di celle 
//in base alla scelta della difficolta

function generateGrid(cellNumber){

//cosi rigenero sempre il contenuto del box container e nonn mi si aggiungono altre a quello di partenza
  boxContainer.innerHTML = '';

//per calcolare larghezza e altezza delle celle
  const perRowCells = Math.sqrt(cellNumber);
  const cellSize = 100 / perRowCells;

  //creo le celle
  for (let i = 0; i < cellNumber; i++) {
      const singleCell = document.createElement('div');  //creo il div contenitore

      singleCell.classList.add('cella');                //metto la classe che crea la singola cella
      singleCell.style.width = cellSize + '%';         //do la larghezza alla cella
      singleCell.style.height = cellSize + '%';       //do la l'altezza alla cella
      singleCell.textContent = i + 1

      singleCell.addEventListener('click', cliccoSingolaCella)

        boxContainer.append(singleCell);//inserisco il contenuto all'interno l'html
  }

}

function cliccoSingolaCella(){

    const currentCella = parseInt(this.textContent)
    if(numeroBombe.includes(currentCella)){
      this.classList.add('bombr');
    } else{
        this.classList.toggle('clickup'); //aggiungo la classe che da il colore alle singole  celle
    }
}

const numCelle = 81;

//questa function mi servirà per inserire i 16 numeri generati
function generareNumeroBombe(numCelle, numMaxRandom){
 
 // let arrayBombe = [];
  let i =0;



while (arrayBombe.length < numMaxRandom){
  const nuovaBomba =  generareNumeroBombe (1, numCelle);

  let numeroNuovo = arrayBombe.includes(nuovaBomba);


  if (!numeroNuovo){
    arrayBombe.push(nuovaBomba);
  }
 
} 
 
 
}







function placeBomb(numerboms, numeroMassimo){
  const bombeArray = [];

  while (bombeArray.length < 16){
    const newBombs = generateRandom (1, numeroMassimo);
    let numeroReali = bombeArray.includes(newBombs);


    if (!numeroReali){
      bombeArray.push(newBombs);
    }
  }
  console.log(bombeArray)

  return bombeArray
}
placeBomb(16, numCelle);



function generateRandom (minNumber = 1, maxNumber = 10){
 const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  console.log(numRandom)
    return numRandom;
}