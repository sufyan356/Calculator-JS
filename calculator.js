function inputData(userInput){
    var textInput = document.getElementById('input');
    var oldInput = textInput.value;
    var length = oldInput.length;
    var lastChar = oldInput[length-1];
    
    var operatorSymbol = ["+","-","/","*","."];
        if(operatorSymbol.includes(userInput)){
            if(operatorSymbol.includes(lastChar)){
                var removeLastChar = oldInput.slice(0,-1);
                textInput.value = removeLastChar + userInput;
    
            }
            else{
                textInput.value = (oldInput + userInput);
            }
        }
        else{
            textInput.value = (oldInput + userInput);
        }
    }
    
    function calculation(){
        var textInput = document.getElementById('input');
        var calcultedValue = eval(textInput.value);
        textInput.value = calcultedValue;
    }
    
    function clearAll(){
        document.getElementById('input').value = "";
    }