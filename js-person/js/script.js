// 2. Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const listPerson = [
    {
        name: 'Mario',
        lastname: 'Rossi',
        age: 24
    },
    {
        name: 'Lucia',
        lastname: 'Bianchi',
        age: 45
    },
    {
        name: 'Gianni',
        lastname: 'Morandi',
        age: 12
    },
    {
        name: 'Luca',
        lastname: 'Acciarito',
        age: 15
    },
    {
        name: 'Roberto', 
        lastname: 'Rinaldi',
        age: 34
    },
    {
        name: 'Beatrice',
        lastname: 'Osso',
        age: 17
    },
]

const listPersonHtml = document.getElementById("list-person");
console.log(listPersonHtml);

for ( let i = 0 ; i < listPerson.length ; i++){
    listPersonHtml.innerHTML += `
    <div>
        <ul>
            <li> nome : ${listPerson[i].name}</li>
            <li>cognome : ${listPerson[i].lastname}</li>
            <li> anni : ${listPerson[i].age}</li>
        </ul>
    </div>
    `
}
const listPersonMap = [];
for(let i = 0 ; i< listPerson ; i++){
    listPersonMap = listPerson.map(function(agePerson){
        if(listPerson[i].age > 18){
            return agePerson = "La persona può  guidare ";
        }else{
            return agePerson = "La persona non può guidare";
        }
})

}
console.log(listPersonMap );
