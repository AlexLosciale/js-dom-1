/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
*/

document.getElementById("btnAccendi").addEventListener("click", function() {
    var lampadina = document.getElementById("lampadina");
    if (lampadina.src.includes("white_lamp.png")) {
        lampadina.src = "./img/yellow_lamp.png";
        this.textContent = "Spegni";
    } else {
        lampadina.src = "./img/white_lamp.png";
        this.textContent = "Accendi";
    }
});
