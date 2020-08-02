function generateValueArray(length){ 
    let res = new Array(length);
    for(let i=0; i<res.length; i++){
        res[i]=i;
    }
    return res;
}

function getRandomValue(array, willRemove){
    let i = Math.floor((Math.random() * (array.length) ));
    let result = array[i];
    if(willRemove == true){
        array.splice(i,1);
    }
    return result;

}

class randomCode extends Array{

    constructor(depth, length, duplicate){
        super(length);
        let listValues = generateValueArray(depth);
        for (let i=0;i<length;i++){
            this[i] = getRandomValue(listValues, !duplicate);
        }
    }
}

export{
    generateValueArray,
    getRandomValue,
    randomCode
}