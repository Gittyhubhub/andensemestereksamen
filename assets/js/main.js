let x = document.getElementById("popup");
let modal = document.getElementsByClassName("modal");
let backdrop = document.getElementsByClassName("backdrop");

x.addEventListener("click", function() {
    if(typeof modal[0] !== "undefined" && typeof backdrop[0] != "undefined"){
        modal[0].style.display = "block";
        backdrop[0].style.display = "block";
    }
});

/*
   typeof modal[0] !== "undefined" <-- tjekker om elementet er der, hvis den er undefined så er det fordi elementet ikke kan findes
   [0], bruges da getEelementsByClassName returnere et array, dvs. flere elementer på en gang. Og derfor siger vi [0] da vi gerne vil 
   have det første element til rådighed. (hvis du ikke helt forstår det så læs op på javascript arrays.) 
*/