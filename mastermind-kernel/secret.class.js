function computeHistrogram(code){
    //var result = [];
    //result.length = Math.max.apply(null, code)
    var result = new Array(Math.max.apply(null, code));
    result.fill(undefined);
    for(let i=0; i<code.length; i++){
        if (result[code[i]] ==1){
            result[code[i]] +=1;
        }
        else{
            result[code[i]] =1;
        }
    }

    return result;
}

function computeWellPlaced(secret, code){
    var result = new Array();
    for(let i=0; i<secret.length; i++){
        if(secret[i]==code[i]){
            result.push(secret[i]);
        }
    }
    return result;
}

function computeMisplaced(secretHistrogram, codeHistrogram) {
    var result = 0;
    for(let i=0; i<Math.max(secretHistrogram.length, codeHistrogram.length); i++){
        if (secretHistrogram[i]==undefined){
            secretHistrogram[i]=0;
        }
        if(codeHistrogram[i]==undefined){
            codeHistrogram[i]=0;
        }
        result +=Math.min(secretHistrogram[i], codeHistrogram[i]);
    }
    return result;
} 

class Secret { 
    //l'attribut d'instance _secret (tableau d'entier),
    _secret = new Array();

    constructor(secret){
        this._secret=secret;
    }

    compare(code){
        var misPlaced = computeMisplaced(computeHistrogram(this._secret),computeHistrogram(code ));
        var wellPlaced = computeWellPlaced(this._secret,code ).length;
        return{
            "wellPlaced" : wellPlaced,
            "misPlaced" : misPlaced
        }
    }
}

export { 
    Secret, 
    computeHistrogram,
    computeWellPlaced,
    computeMisplaced
};



