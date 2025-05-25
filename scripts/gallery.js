const path="assets/imgs/"   
const columns = [
  document.getElementById("c1"),
  document.getElementById("c2"),
  document.getElementById("c3"),
  document.getElementById("c4")
];

function placeImgs(i,query=null) {
  fetch('assets/imglist.json')
    .then(res => res.json())
    .then(images => {
      images.forEach(({image, tags}, index) => {
        if(!query || tags.includes(query)){
          const img = document.createElement('img');
          img.src = path + image;

          const link = document.createElement('a');
          link.href = `Bjorn.html?img=${encodeURIComponent(image)}`;
  
          link.appendChild(img)
          columns[(index+i) % 4].appendChild(link);
        }
      });
    });
}

const search = document.getElementById('search_tag');
search.addEventListener('keydown', searchImgs);

function searchImgs(event){
  if (event.key === 'Enter'){
    const query = event.target.value.trim().toLowerCase();
    columns.forEach(col => col.innerHTML = '');
    for(let i=0;i<4;i+=1){
      placeImgs(i,query);
    }  
    search.value='';
  }
}

for(let i=0;i<4;i+=1){
  placeImgs(i);
}
