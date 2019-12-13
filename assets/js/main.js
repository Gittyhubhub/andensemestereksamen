
const mainBtn = document.getElementById('nav-wheel__btn');
const mainEle = document.getElementById('nav-wheel__container');
const sublinks = document.getElementsByClassName('nav-wheel__sublink');

console.log(mainBtn);
console.log(mainEle);
if(mainBtn != null){
    mainBtn.addEventListener("click", function(){
    console.log("button clicked");

    if(mainEle.classList.contains('active')){
        mainEle.classList.remove("active");  
    }else{
        mainEle.classList.add("active");  
    }
    }); 
}


let x = document.getElementById("popup");
let modal = document.getElementsByClassName("modal");
let backdrop = document.getElementsByClassName("backdrop");
if(x !== null){
    x.addEventListener("click", function(){
        if(typeof modal[0] !== "undefined" && typeof backdrop[0] != "undefined"){
            modal[0].style.display = "block";
            backdrop[0].style.display = "block";
        }
    });
}
/*
   typeof modal[0] !== "undefined" <-- tjekker om elementet er der, hvis den er undefined så er det fordi elementet ikke kan findes
   [0], bruges da getEelementsByClassName returnere et array, dvs. flere elementer på en gang. Og derfor siger vi [0] da vi gerne vil 
   have det første element til rådighed. (hvis du ikke helt forstår det så læs op på javascript arrays.) 
*/

