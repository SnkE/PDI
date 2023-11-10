function NumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
let NumIngresado;
let NumIntentos=1;
do{
    NumIngresado = NumeroAleatorio(1, 50);
    console.log("El numero ingresado es: "+NumIngresado);
   
    if(NumIngresado>=1 && NumIngresado<=10){
        console.log(`El numero que ingresaste: ${NumIngresado} está dentro del rango en su intento: ${NumIntentos}`);
    }else{
        console.log("El numero ingresado está fuera de rango, intentelo nuevamente");
    }

    NumIntentos++;

} while (NumIngresado < 1 || NumIngresado > 10);
