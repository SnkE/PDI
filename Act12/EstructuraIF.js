let numero=0;

if(numero>0 && numero%2==0){
    console.log(`El numero ${numero} es positivo y es par`);
}else if(numero>0 && numero%2!=0){
    console.log(`El numero ${numero} es positivo y es impar`);
}else if(numero<0 && numero%2==0){
    console.log(`El numero ${numero} es negativo y es par`);
}else if(numero<0 && numero%2!=0){
    console.log(`El numero ${numero} es negativo y es impar`);
}else{
    console.log("El numero es 0");
}
