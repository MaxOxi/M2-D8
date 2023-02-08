ESERCIZI JAVASCRIPT

21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"


  let x = "John"; 
  y = "Doe"
console.log(x,y);

22) Crea un oggetto con le seguenti proprietà: name, surname, email

const me = {
  name: 'Max',
  surname: 'Oxi',
  email:'oxintimaxim@hotmail.it',
}
  
console.log(me)


23) Cancella la proprietà email dall'oggetto appena creato.

const arr21 = [ 'name: Max', 'surname: Oxi', 'email: oxintimaxim@hotmail.it']

arr21.pop()  //  metodo "pop()" rimuove l'ultimo elemento

console.log(arr21)

24) Crea un array contenente 10 stringhe

const arr24 = ['Max', 'Oxi', '50', 'Mark', 'Rossi', '19', '12', '15', '130', '10']


25) Mostra in console ogni stringa del precedente array

const arr25 = ['Max', 'Oxi', '50', 'Mark', 'Rossi', '19', '12', '15', '130', '10']

console.log(arr25)  // non sono se ho capito bene la domanda


26) Crea un array contenente 100 numeri random

const randomNumbers = [];
for (let i = 0; i < 100; i++){
  const randomNumber = Math.round (Math.random()*100)
  randomNumbers.push (randomNumber)

}
console.log(randomNumbers)


27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato.


let arr27 = [  97, 89,  6, 57, 17, 12, 99, 41, 35,  37,  27, 27,
  2, 77, 57, 95, 87, 76, 46, 20, 41, 100, 100, 37,
 77, 98, 95,  9, 48, 48, 84, 74, 64,  86,  87, 56,
 83, 27, 67, 44, 10, 32, 92, 27, 74,  60,  70, 27,
 56, 49, 14, 62,  3, 83,  8, 67, 84,   4,  73, 61,
 80, 76, 62, 87, 17, 58, 80, 80, 81,  59,  19,  3,
 16, 18, 61, 32, 78, 37, 52, 26, 57,  15,  32, 14,
 83,  3, 89, 12, 82, 35, 28, 56, 68,  98,  68, 73,
 39, 60, 47, 41];
let maxNum = arr27.reduce((prev, current) => {
  return Math.max(prev, current)
});

let minNum = arr27.reduce((prev, current) => {
  return Math.min(prev, current)
});

console.log(maxNum,minNum);


28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random.


let array = [];
    for (let i = 0; i < 1; i++) {
        let array2 = []; 
        for (let j = 0; j < 10 ; j++) { 
        let num = Math.floor(Math.random()*100);
        array2.push(num) 
        } 
        array.push(array2) 
    }
    console.log(array)


29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi



30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore




ESERCIZI SUL DOM

31) Seleziona l'elemento con id "container" nella pagina.
script

document.getElementById('container');      

32) Seleziona tutti gli elementi di tipo <td> nella pagina

document.querySelectorAll('td')   


33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina


let td = [];
let cells = document.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML.match()) {
        td[td.length] = cells[i].innerHTML;
    }
}

34) Scrivi una funzione per cambiare il titolo della pagina

const changeTitle = function (newTitle) {
  const title = document.querySelector('h1')
  title.innerText = newTitle                   

}
changeTitle('new title')

35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina


const addTr = function (content) {
  document.querySelector('table1')
  const tr = document.createElement('tr');
        tr.innerClass = 'new tr'
        table.appenChild(tr);           //non funziona
      }

addTr();


36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella




37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina

const paintLinksRed = function () {
  const links = document.getElementsByTagName("a");
  for (let list of links) { 
    list.style.backgroundColor = "red" 

  }
}

paintLinksRed();



38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi


window.onload = function () {       
  alert("Page loaded")
}

39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina.


const addLi = function (content) {
  document.querySelector('secondalista')

  const li = document.createElement('li');
  li.innerText = ' new list'
  ul.appenChild(li) = content;

}

addLi();



40) Scrivi una funzione per svuotare una lista nella pagina



       const emtyinnertext = function () {
        const fisrtList = document.getElementById('empty');
        fisrtList.remove();        
      }

      emtyinnertext();

                   // non mi funzionano e non ho capito dove sbaglio

      const emptytext = function () {
        const title = document.getElementById('empty')
        title.innerText.remove('Terzo Elemento')
       
      }
      emptytext()





