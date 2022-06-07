class ListPerson {

    showData(array) {
        for(let i = 0; i < array.length; i++) {
            alert("Name: " + array[i].name + "\nLastname: " + array[i].lastname + "\nAge: " 
            + array[i].age + "\nId: " + array[i].id);
        }
    }

    sumAge(array) {
        let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum = sum + array[i].age;
        }
        return sum;
    }

    mayAge(array) {
        let may = 0;
        for(let i = 0; i < array.length; i++) {
            if(array[i].age > may) {
                may = array[i].age;
            }
        }
        return may;
    }

    searchPerson(array, id) {
        let i = 0;
        let found = false;
        while(i < array.length && !found) {
            if(array[i].id === id) {
                found = true;
            }else {
                i++;
            }
        }
        return found;
    }
}