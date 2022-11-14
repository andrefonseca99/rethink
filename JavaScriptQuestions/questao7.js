const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
]

function averageAge(array){
    let averageAge = 0;
    let sumAge = 0;
    let count = 0;
    array.forEach(pessoa => {
        sumAge+=pessoa.age;
        count+=1;
    });
    averageAge = sumAge / count;
    return (averageAge);
}

console.log(averageAge(pessoas));