// La fonction d'action du formulaire avant la soumission
function willSubmit(numberElement, radiusElement, circlesElement) {
    // Récupère un entier pour le nombre de disques et leur rayon
    var numberElement = numberElement.value;//numberElement??
    var radiusElement = radiusElement.value;//radiusElement??
    // Construit une instance de CircularArrangement
    var cA = new CircularArrangement(numberElement);
    // Vider le contenu de l'élément passé en paramètre circlesElement
    while (circlesElement.hasChildNodes()){
        circlesElement.removeChild(circlesElement.firstChild);
    }

    // Créer un élément DOM de type div avec les classes CSS "disk" et "center" et l'ajoute à l'élément passé en paramètre circlesElement
    var DomDC = document.createElement("div");
    DomDC.setAttribute("class", "disk center");
    circlesElement.appendChild(DomDC);

    // Créer un élément DOM de type div avec la classe CSS "content" et l'ajoute à l'élément passé en paramètre circlesElement
    var DomC = document.createElement("div");
    DomC.setAttribute("class", "content");
    circlesElement.appendChild(DomC);

    // Modifier le style CSS "font-size" de l'élément passé en paramètre circlesElement pour qu'il vaille 2*radius pixels
    var radiusPixel = 2*radiusElement;
    //circlesElement.style.fontSize = `${radiusPixel}px`;
    circlesElement.style.fontSize = radiusPixel + "px";
    // Puis créer un élément DOM de type div pour chaque disque :
    //  - lui affecter la classe CSS "disk" et le numéro d'indice+1 comme contenu HTML
    //  - modifier son style CSS, left et top à partir des coordonnées de l'instance de CircularArrangement
    //  - et l'ajouter à l'élément de classes CSS "content"
    var i=0;
    while (i<numberElement){
        let disque = document.createElement("div");
            disque.setAttribute("disk")

    }

}

if (typeof module !== "undefined" && module.exports) {
    module.exports = willSubmit;
}