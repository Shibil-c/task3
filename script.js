displayImage('');
function displayImage(value){
  value.toLowerCase
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      displayData(data);
    })
  .catch((error) => console.error("FETCH ERROR:", error));
  function displayData(data){
    let breed = data.message;
    let ar = [];
    let div = document.getElementById("list");
    let se = document.getElementById("search");
    Object.keys(breed).forEach((key) => {
    ar.push(key);
    });
    ar.sort();
    for(let i=0;i<ar.length;i++){
      remove(div);
      if(value ===''){
        fetchImage(ar[i]);
      }
      else{
        if(ar[i].startsWith(value) && ar[i].includes(value)){
          fetchImage(ar[i]);
        }
      }
    }
  }
}
function remove(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}
function fetchImage(name){
  let div = document.getElementById("list");
  let im=document.createElement("img");
  let fig = document.createElement("div");
  fig.setAttribute("class","txtover");
  let figc = document.createElement("h2");
  figc.setAttribute("class","bottom-left");
  figc.innerHTML = name;
  im.setAttribute("id",name);
  fetch("https://dog.ceo/api/breed/"+name+"/images/random")
    .then(res => res.json())
    .then(result =>{
    im.src=result.message;
    fig.appendChild(figc);
    fig.appendChild(im);
    div.appendChild(fig);
  });
}
