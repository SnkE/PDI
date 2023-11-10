let studentName="Emilio";
let studentAge= 19;
let isEnrolled=true;

let gradeMath= 9;
let gradeScience=8;
let gradeLanguage=7;

let totalClasses=20;
let attendedClasses=17;

let averageGrade= (gradeMath+gradeLanguage+gradeScience)/3;
let attendancePercentage= (17*100)/20;

console.log("El nombre del estudiante es: "+studentAge);
console.log("La edad del estudiante es: "+studentAge);
if(isEnrolled==true){
    console.log("La inscripcion del estudiante está activa");
} else{
    console.log("El alumno no está dado de alta");
}
console.log("..:::Calificaciones:::..")
console.log("Calificacion de Matematicas: "+gradeMath);
console.log("Calificacion em Ciencias: "+gradeScience);
console.log("Calificacion de Idioma: "+gradeLanguage);
console.log("Promedio de las calificaciones: "+averageGrade);
console.log("..:::Asistencias:::..")
console.log("Numero total de asistencias: "+totalClasses);
console.log("Numero de asistencias que tiene el estudiante: "+attendedClasses);
console.log("Porcentaje de las asistencias: "+attendancePercentage+"%");