const parole = ['diventerò uno sviluppatore', 'sono un creatore di filtri ar', 'mi piace apprendere nuove cose', 'amo il dialogo', 'ho molte ambizioni', 'sono un problem solver', 'mi piace il design', 'sono affascinato dalla blockchain', 'penso con razionalità'];
let counter = 0;
let parola = document.getElementById("array");

setInterval(cambiaParola, 1500);

function cambiaParola(){
    document.getElementById("array").innerHTML = parole[counter];
    counter++;
    if(counter >= parole.length){
        counter = 0;
    }
}