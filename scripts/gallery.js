const path="assets/imgs"
function placeImgs(i) {
  fetch('assets/imglist.json')
    .then(res => res.json())
    .then(images => {
      const columns = [
        document.getElementById("c1"),
        document.getElementById("c2"),
        document.getElementById("c3"),
        document.getElementById("c4")
      ];

      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = path + "/" + image;
        columns[(index+i) % 4].appendChild(img);
      });
    });
}

for(let i=0;i<10;i+=1){
  placeImgs(i);
}
console.log("v"); //debugging
