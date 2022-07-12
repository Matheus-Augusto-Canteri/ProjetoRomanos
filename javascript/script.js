const numberMap = {
    //Unidade
    0 : [
         ''		//0
        ,'I' 	//1
        ,'II'	//2
        ,'III'	//3
        ,'IV'	//4
        ,'V'	//5
        ,'VI'	//6
        ,'VII'	//7
        ,'VIII'	//8
        ,'IX'	//9				
    ]
    //Dezena
    ,1 : [
         ''		//10
        ,'X'	//10
        ,'XX'   //20
        ,'XXX'  //30
        ,'XL'   //40
        ,'L'    //50
        ,'LX'   //60
        ,'LXX'  //70
        ,'LXXX' //80
        ,'XC'   //90
    ]
    //Centena
    ,2 : [
        ''
        ,'C'	//100
        ,'CC'   //200
        ,'CCC'  //300				
        ,'CD'   //400
        ,'D'    //500
        ,'DC'   //600
        ,'DCC'  //700
        ,'DCCC' //800
        ,'CM' 	//900
    ]
    // Mil
    ,3 : [
         ''
        ,'M' //1000
    ]
};

//Obs número maximo é "3999"

function romanoIsVeryGood(input){		

    input = input.replace(/[^0-9]/, "");
    if(input == '') return'';
    
    var numero = parseInt(input);
    
    if(numero > 3999){
        return "Número máximo '1999'";
    }
    
    //Aqui descobre se é Unidade, Dezena, Centana, Milhar
    var orderNumber= Number(input).toString();
    var orderLength = orderNumber.length;
    
    var unidadeDezenaCentena = orderLength - 1;
    
    var newOrder = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        newOrder = newOrder + orderNumber.charAt(i);
    }
    
    var finalCast = '';
    for(var i = unidadeDezenaCentena; i >= 0 ;i--){
        var auxVar = parseInt(newOrder.charAt(i));
        finalCast = finalCast + numberMap[i][auxVar];
    }
    
    return finalCast;
}

document.getElementById("dec").addEventListener('keyup', function() {		
    var romanNumber = romanoIsVeryGood(this.value);
    
    document.getElementById("romano").value = romanNumber;
    
    var numberCheck = this.value.replace(/[^0-9]/, "");
    if(numberCheck == '') return false;
    
    var provaReal = 'http://numeracaoromana.babuo.com/'+ numberCheck + '-em-numeros-romanos';
    document.getElementById("provaRealBox").style = "display: block";
    document.getElementById("prova-real").href = provaReal;
    document.getElementById("prova-real").innerHTML  = 'Clique aqui para conferir: ' + numberCheck;
});