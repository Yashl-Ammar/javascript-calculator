window.onload = ()=>{

    var text = "";

    var resultfield = document.getElementById('ResultTextField');
    var buttons = document.querySelectorAll('.btn');

    const evil = (fn) => {
        return eval(fn);
      };

    let boolean = false;

    function factorial(num){
        let fact = 1;
        for(let i = 1 ; i <= num; i++){
            fact *= i;
        }
        return fact;
    }

    function factorialfunc(arr){
        if(arr.length === 0){
            return 0;
        }
        let x = "";

        for(let i = 0; i< arr.length ; i++){
            x += arr[i];
        }

        x = eval(x); 
        return factorial(x);
    }

    function Permutationfunc(arr1,arr2){
    
        let n = "";
        let r = "";

        for(let i = 0; i< arr1.length ; i++){
            n += arr1[i];
        }
        for(let i = 0; i< arr2.length ; i++){
            r += arr2[i];
        }

        n = eval(n);
        r = eval(r); 

        if(n-r < 0){
            text = "";
            return null;
        }

        return factorial(n)/factorial(n-r);
    }

    function Combinationfunc(arr1,arr2){
    
        let n = "";
        let r = "";

        for(let i = 0; i< arr1.length ; i++){
            n += arr1[i];
        }
        for(let i = 0; i< arr2.length ; i++){
            r += arr2[i];
        }

        n = eval(n);
        r = eval(r); 

        if(n-r < 0){
            text = "";
            return null;
        }

        return factorial(n)/(factorial(r) * factorial(n-r));
    }

    function calcperm(){
        if(text === 'P'){
            text = "";
            return null;
        }
        else{
            for(let j = 0 ; j < noOfP ; j++){
                let index = 0;
                for(let i = 0 ; i < text.length ; i++){
                    if(text.charAt(i) === 'P'){
                        index = i;
                        break;
                    }
                }

                let arr1 = [];
                let startIndex = 0;
                for(let i = index-1 ; i >= 0 ; i--){
                    if(text.charAt(i) === '+' || text.charAt(i) === '-' || text.charAt(i) === '/' || text.charAt(i) === '!' || text.charAt(i) === 'C' || text.charAt(i) === '*'){
                        if(arr1.length === 0){
                            text = "";
                        }
                        startIndex = i+1;
                        break;
                    }
                    arr1.unshift(text.charAt(i));
                }
                let arr2 = [];
                let endIndex = text.length;
                for(let i = index+1 ; i < text.length ; i++){
                    if(text.charAt(i) === '+' || text.charAt(i) === '-' || text.charAt(i) === '/' || text.charAt(i) === '!' || text.charAt(i) === 'C' || text.charAt(i) === '*'){
                        if(arr2.length === 0){
                            text = "";
                        }
                        endIndex = i;
                        break;
                    }
                    arr2.push(text.charAt(i));
                }
                let x = Permutationfunc(arr1,arr2);
                console.log(text.substring(startIndex,endIndex));
                if(x === null){
                    text = "";
                    return null;
                }
                else{
                    text = text.replace(text.substring(startIndex,endIndex),x);
                }

            }
        }
    }

    function calcComb(){

        if(text === 'C'){
            text = "";
            return null;
        }
        else{
            for(let j = 0 ; j < noOfC ; j++){
                let index = 0;
                for(let i = 0 ; i < text.length ; i++){
                    if(text.charAt(i) === 'C'){
                        index = i;
                        break;
                    }
                }

                let arr1 = [];
                let startIndex = 0;
                for(let i = index-1 ; i >= 0 ; i--){
                    if(text.charAt(i) === '+' || text.charAt(i) === '-' || text.charAt(i) === '/' || text.charAt(i) === '!' || text.charAt(i) === 'C' || text.charAt(i) === '*'){
                        if(arr1.length === 0){
                            text = "";
                        }
                        startIndex = i+1;
                        break;
                    }
                    arr1.unshift(text.charAt(i));
                }
                let arr2 = [];
                let endIndex = text.length;
                for(let i = index+1 ; i < text.length ; i++){
                    if(text.charAt(i) === '+' || text.charAt(i) === '-' || text.charAt(i) === '/' || text.charAt(i) === '!' || text.charAt(i) === 'C' || text.charAt(i) === '*'){
                        if(arr2.length === 0){
                            text = "";
                        }
                        endIndex = i;
                        break;
                    }
                    arr2.push(text.charAt(i));
                }
        
                let x = Combinationfunc(arr1,arr2);
                console.log(x);
                console.log(text.substring(startIndex,endIndex));
                if(x === null){
                    text = "";
                    return null;
                }
                else{
                    text = text.replace(text.substring(startIndex,endIndex),x);
                }
            }
        }
    }

    let noOfP = 0;
    let noOfC = 0;
    buttons.forEach((item)=>{
        item.addEventListener("click" , ()=>{
            if(boolean === true){
                text = "";
                boolean = false;
            }
            if(item.textContent === 'AC'){
                text = "";
                noOfP = 0;
                noOfC =0;
            }
            else if(item.textContent === '='){

                if(calcperm() !== null){
                    if(calcComb() !== null){
                        text = evil(text);
                    }
                }
                
                boolean = true;
                noOfP = 0;
                noOfC = 0;
            }
            else if(item.textContent === 'nPr'){
                text = text + 'P';
                noOfP++;
            }
            else if(item.textContent === 'nCr'){
                text = text + 'C';
                noOfC++;
            }
            else if(item.textContent === 'x'){
                text = text + '*';
            }
            else if(item.textContent === '!'){
                text = text + '!'
                if(text === "!"){
                    text = "";
                }
                else{
                    let index = 0;
                    for(let i = 0 ; i < text.length ; i++){
                        if(text.charAt(i) == '!'){
                            index = i;
                            break;
                        }
                    }
    
                    let arr = [];
                    for(let i = index-1 ; i >= 0 ; i--){
                        if(text.charAt(i) === '+' || text.charAt(i) === '-' || text.charAt(i) === '/' || text.charAt(i) === 'P' || text.charAt(i) === 'C' || text.charAt(i) === '*'){
                            if(arr.length === 0){
                                text = "";
                            }
                            break;
                        }
                        arr.unshift(text.charAt(i));
                    }
                    console.log(arr);
                    let fact = factorialfunc(arr);
                    text = text.substring(0, text.length-arr.length-1);
                    text += fact;
                }
            }
            else{
                text = text + item.textContent;
            }
            resultfield.textContent = text;
        })
    })
}
