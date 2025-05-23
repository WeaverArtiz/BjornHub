const dialogueBox = document.querySelector(".game .dialogueBox .text");
const choicesBox = document.querySelector(".game .options");
const nextBtn = document.querySelector(".game .dialogueBox .next");
let scenes = {};
let affection = 0;
let currentScene = "";
let i = 0;

getData(`./story/test.json`);

function getData(file){
  fetch(file)
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
      return response.json();  
    })
    .then(data => {
      scenes = data.scenes;
      loadScene();
      if(!scenes[currentScene] || !(scenes[currentScene].lines && scenes[currentScene].lines[i])){
        currentScene = Object.keys(scenes)[0];
        i=0;
      }
      console.log("3"); //debugging
      renderScene();
    })  
    .catch(error => console.error('Failed to fetch data:', error)); 
}

function renderScene(){
  dialogueBox.innerHTML = "";
  choicesBox.innerHTML = "";
  i=0;
  genText(i);
  i+=1;
}

function genText(i){
  const scene=scenes[currentScene];
  const p = document.createElement("p");
  dialogueBox.innerHTML = "";
  nextBtn.style.visibility = "visible";
  
  p.textContent = `${scene.lines[i].character}: ${scene.lines[i].text}`;
  dialogueBox.appendChild(p);
  if(scene.lines[i].choices){
    genOptions(i);  
    nextBtn.style.visibility = "hidden";
  }
}

function genOptions(i){
  const scene=scenes[currentScene];

  scene.lines[i].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.className = "choice";

    btn.onclick = () => {
      affection += choice.affection || 0;
      currentScene = choice.next;
      renderScene();
    };
    choicesBox.appendChild(btn);
  });
}

nextBtn.onclick = () => {   
  if(i<scenes[currentScene].lines.length){
  genText(i);
  i+=1;
  }
  if(i==scenes[currentScene].lines.length){
    nextBtn.style.visibility = "hidden";
  }
}


function saveScene() {
  const gameState = {
    it: i,
    scene: currentScene
  }
  localStorage.removeItem("gameState");
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

function loadScene() {
  const data = localStorage.getItem("gameState");
  if(data){
    const gameState = JSON.parse(data);
    i = gameState.it;
    currentScene = gameState.scene;
  }
}

window.addEventListener("beforeunload", saveScene);
