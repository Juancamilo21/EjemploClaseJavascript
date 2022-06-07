let arrayPerson = new Array(3);
let listPerson = new ListPerson();

let message = (text) => alert(text);

for(let i = 0; i < arrayPerson.length; i++) {
    let namePerson = prompt("Ingresa el nombre");
    let lastname = prompt("Ingresa el segundo apellido");
    let age = parseInt(prompt("Ingresa la edad"));
    let id = prompt("Ingresa la identificación");
    person = new Person(namePerson, lastname, age, id);
    arrayPerson[i] = person;
}

listPerson.showData(arrayPerson);
message("La suma de las edades es: " + listPerson.sumAge(arrayPerson));
message("La edad más alta es: " + listPerson.mayAge(arrayPerson));
let idPerson = prompt("Ingresa el id de la persona a buscar");
let done = listPerson.searchPerson(arrayPerson, idPerson);
if(done) {
    message("Existe en la lista");
}else {
    message("No existe en la lista");
}

