class CircularArrangement {
    // Un attribut d'instance
    _circleRadius = 0;
    _disksNumber = 0;

    // Un constructeur
    constructor(diskNumber) {
        this._disksNumber = diskNumber;
        const entrer = 0.5 / Math.cos(((this._disksNumber-2)*Math.PI/diskNumber)/2);
        if (entrer <1){
            this._circleRadius = 1;
        }   
        else { 
            this._circleRadius = entrer;
        }
        
    }

    // Un accesseur à un attribut virtuel
    get circleRadius() {
        return this._circleRadius;
    }
    
    get disksNumber(){
        return this._disksNumber;
    }


    //Retourne un objet JavaScript ayant deux propriétés
    //: left et top définissant la position CSS absolue de l'élément d'indice i en « em ».
    coordinates(i){
        const x = Math.sin((i*2*Math.PI)/this._disksNumber)*this._circleRadius + "em";
        const y = -Math.cos((i*2*Math.PI)/this._disksNumber)*this._circleRadius + "em";
        return{
            "left" : x,
            "top" : y
        }
    };
}
export default CircularArrangement;
export { CircularArrangement };
