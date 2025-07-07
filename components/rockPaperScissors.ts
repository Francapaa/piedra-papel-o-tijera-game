export function photosOfRockPaperScissors (){

const rock = document.createElement("img");
rock.className = "img-rock"; 
rock.src = '../public/rock.png'; 
const paper = document.createElement("img");
paper.className = "img-paper.png";
paper.src = '../public/paper';
const scissors = document.createElement("img");
scissors.className = "img-scissors.png";
scissors.src = '../public/scissors'; 

return {rock, paper, scissors}; 
} 