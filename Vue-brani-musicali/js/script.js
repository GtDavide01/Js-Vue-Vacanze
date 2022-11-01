// ESERCIZIO VUE

// 1. Creare un'app con la lista di brani musicali. 
//     Milestone 1.
//     Creare l'array di brani musicali. Ogni brano ha nome, cantante, genere, duratata.

//     Milestone 2.
//     Visualizzare i brani musicali in pagina

//     Milestone 3.
//     Al click su un brano deve comparire un'icona play. Per far scomparire l'icona l'utente deve cliccare al brano un'altra volta.
//     ATTENZIONE: solo visualizzare / fare nascondere l'icona, non dovete riprodurre i brani ;) 

//     Milestone 4.
//     Predisporre gli input che permettono all'utente di aggiungere un nuovo brano alla lista.

const {createApp} = Vue ; 

createApp({
    data(){
        return{
            playlist: [
                {
                    nome: "Faded",
                    cantante: "Alan Walker",
                    genere: "Pop",
                    durata: 3.23,
                    done: false,
                },
                {
                    nome: "Murder Mind",
                    cantante: "Kordhell",
                    genere: "Elettronica",
                    durata: 2.24,
                    done: false,
                },
                {
                    nome: "Sharks", 
                    cantante: "Image Dragons",
                    genere: "Rock",
                    durata: 3.11,
                    done: false,
                },
                {
                    nome: "T.N.T.",
                    cantante: "AC/DC",
                    genere: "Rock",
                    durata: 4.14,
                    done: false,
                },
                {
                    nome: "Heat Waves",
                    cantante: "Glass Animals",
                    genere: "Indie",
                    durata: 3.57,
                    done: false,
                },
            ],
            insertAutor: "",
            insertDurata:"",
            insertGenere:"",
            insertName:"",
        }
    },
    methods : {
        changeDone: function(index){
            this.playlist[index].done = !this.playlist[index].done;
        },
        insertSong: function(){
            this.playlist.push({
                nome: this.insertName , 
                cantante: this.insertAutor,
                genere: this.insertGenere ,
                durata: this.insertDurata,
                done: false,
            })
        }
    }
}).mount("#app");