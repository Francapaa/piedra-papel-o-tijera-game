import {renderWelcome} from '../pages/welcome';
import {renderInstrucciones} from '../pages/instrucciones'; 
import {renderJuego} from  '../pages/juego';
import {renderResultado} from '../pages/resultado';




function getCleanPathFromUrl(): string{
  const fullPath = window.location.pathname; 
  const basePath = '/piedra-papel-o-tijera-game'; 
  if (fullPath.startsWith(basePath)){
    return fullPath.replace(basePath, "") || "/"; 
  }
  return fullPath; 
}


export function initRouter (): void{

  const initPath = getCleanPathFromUrl();

 renderPath(initPath); 
}


const routes : Record<string, () => void> = {
  "/" : renderWelcome,
  "/instrucciones": renderInstrucciones,
  "/juego": renderJuego,
  '/resultado': renderResultado
}


function renderPath(path: string): void{
const app = document.getElementById("app");

if (!app){
  console.error("No pudimos encontrar la aplicacion"); 
}

const renderFunction = routes[path]; 
  

if (typeof renderFunction === "function"){
  renderFunction()
}
else{
  console.error("Ruta no encontrada, verifique si existe", path);
  if (typeof routes["/"] === 'function') {
    routes["/"]();
  }
}
}


function goTo (path: string): void{

  const basePath = '/piedra-papel-o-tijera-game'; 

  history.pushState({}, "", basePath + path ); 

  renderPath(path);
}