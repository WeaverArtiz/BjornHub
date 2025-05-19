const dialogueBox = document.querySelector(".game .dialogueBox .text");
const choicesBox = document.querySelector(".game .options");
let scenes = {};
let affection = 0;
let currentScene = "";

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
      currentScene = Object.keys(scenes)[0];
      renderScene(currentScene);
    })  
    .catch(error => console.error('Failed to fetch data:', error)); 
}

function renderScene(id){
  const scene=scenes[id];
  dialogueBox.innerHTML = "";
  choicesBox.innerHTML = "";
  let speaker = "";

  scene.lines.forEach(line => {
    const p = document.createElement("p");
    if(speaker != `${line.character}`){
      const btn = document.createElement("button");
      btn.textContent = "next";
      btn.className = "next";
      btn.onclick = () => {
        
      }
      speaker = `${line.character}`;
      p.textContent = `${line.character}: ${line.text}`;
    }
    else{
      p.textContent = `${line.text}`;
    }
    dialogueBox.appendChild(p);

    if (line.choices) {
      line.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.className = "choice";
        btn.onclick = () => {
          affection += choice.affection || 0;
          id = choice.next;
          renderScene(id);
        };
      choicesBox.appendChild(btn);
      });
    }
  });
}

/*function renderScene(id){

  genText(id, lineid, ); genOptions(id, lineid); chspeaker;
  chScene(id lineid);
  

function renderScene(id){
  let i = 0;
  if(genText(id,i)){
    i+=1;

  }
}
function genText(id, lineid){

}*/
