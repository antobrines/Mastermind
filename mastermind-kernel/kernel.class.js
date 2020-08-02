import { randomCode } from "./random-code.class";

function count(array,x){
    let count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == x)
            count++;
    }
    return count;
}



class Kernel{
    
    _secret;
    _codeLength=4;
    _colorsNumber=6;
    _duplicateColor=false;

    get codeLength(){
        return this._codeLength;
    }

    get colorsNumber(){
        return this._colorsNumber;
    }

    get duplicateColor(){
        return this._duplicateColor;
    }

    isValidCode(code){
        let r = false;
        if(Array.isArray(code)){
            r = true;
        }
        if(r==true){
            
            if(code.length<=this._codeLength){
                let i = 0;
                while(i<code.length && r == true){
                    if(Number.isInteger(code[i]) && r == true){
                        if(code[i]>=0 || code[i]<this._colorsNumber){
                            i++;
                        }
                        else{
                            r = false;
                        }
                    }
                    else{
                        r = false;
                    }
                }
            }
            else{
                r = false;
            }
            if(this._duplicateColor == false){
                for(let i=0;i<code.length;i++){
                    if(count(code,code[i])>1){
                        r = false;
                    }
                }
            } 
        }
        return r;
    }

    newGame(secret){
        while(this.isValidCode(secret)==false){
            secret = new randomCode(this._colorsNumber,this._codeLength,this._duplicateColor);
        }
        this._secret = secret;
    }

    setOption(obj){
        if(Number.isInteger(obj.codeLength) && obj.codeLength>0){
            if(Number.isInteger(obj.colorsNumber)&& obj.colorsNumber>0){
                if(typeof obj.duplicateColor==='boolean'){
                    this._codeLength=obj.codeLength;
                    this._colorsNumber=obj.colorsNumber;
                    this._duplicateColor=obj.duplicateColor;
                    this.newGame(this._secret);
                }
                else{
                    throw "duplicateColor doit être un booléen";
                }
            }
            else{
                throw "colorsNumber doit être supérieur à 0 et de type int";
            }
        }
        else{
            throw "codeLength doit être supérieur à 0 et de type int";
        }
    }

    submit(code){
        let secret = this._secret.compare(code);
        return secret;
    }

    constructor(options){ 
        this.setOption(options);
    }
}

export{
    Kernel,
    count
}