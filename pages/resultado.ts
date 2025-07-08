import state from '../src/state';
import {goTo} from '../src/routes';
import { photosOfRockPaperScissors } from '../components/rockPaperScissors';

const app = document.getElementById("app");


export function renderResultado(){

if (!app){
  console.log("Application not detected");
  return; 
}

app.innerHTML = `
<div class = "results-page">
<h1 class = "resultado-actual">${resultado} </h1>
<div class = "container-img-played"> </div>

<div class = "names-participants"> 
<h2 class = "user-name">(VOS)</h2> 
<h2 class ="ia-name"> (IA) </h2>
</div>

<div class = "history-results">
<h2 class "user-results">${userResults}</h2>
<h2 class "ia-results"> ${iaResults} </h2>  
</div>

<button class = "play-again-btn">VOLVER A JUGAR !</button 
</div>
`;

const btnPlayAgain = app.querySelector(".play-again-btn");
btnPlayAgain?.addEventListener('click', () =>{
  goTo('/juego');
});

const resultado = app.querySelector(".resultado-actual");

}