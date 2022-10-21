displayImage('');
function displayImage(value){
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
      for(let j = 0; j<ar.length;j++){
        remove(div);
      }
      if(value ===''){
        let im=document.createElement("img");
        let fig = document.createElement("div");
        fig.setAttribute("class","txtover");
        let figc = document.createElement("h2");
        figc.setAttribute("class","bottom-left");
        figc.innerHTML = ar[i];
        im.setAttribute("id",ar[i]);
        fetch("https://dog.ceo/api/breed/"+ar[i]+"/images/random")
        .then(res => res.json())
        .then(result =>{
          im.src=result.message;
          fig.appendChild(figc);
          fig.appendChild(im);
          div.appendChild(fig);
        });
      }
      else{
        for(let j = 0; j<ar.length;j++){
          remove(div);
        }
        if(ar[i].startsWith(value) && ar[i].includes(value)){
          console.log(ar[i].includes(value));
          let im=document.createElement("img");
          let fig = document.createElement("div");
          fig.setAttribute("class","txtover");
          let figc = document.createElement("h2");
          figc.setAttribute("class","bottom-left");
          figc.innerHTML = ar[i];
          im.setAttribute("id",ar[i]);
          fetch("https://dog.ceo/api/breed/"+ar[i]+"/images/random")
          .then(res => res.json())
          .then(result =>{
            im.src=result.message;
            fig.appendChild(figc);
            fig.appendChild(im);
            div.appendChild(fig);
          });
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
