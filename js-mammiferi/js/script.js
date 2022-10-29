// 1. Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const arrayAnimals = [
    {
        name: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        name: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        name:  'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        name: 'pappagalli',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        name:   'gatto',
        famiglia: 'felini',
        classe: 'mammiferi'
    }
]
console.log(arrayAnimals);

//Creo un nuovo array con la lista dei solo animali mammiferi tramite filter

const onlyMammiferi = arrayAnimals.filter(function(animal){
    return (animal.classe === 'mammiferi');
});
console.log(onlyMammiferi);
