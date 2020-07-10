class Notes {
    constructor(){
        this.notes = []
        this.adapter = new NotesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }
    fetchAndLoadNotes(){
        this.adapter.getNotes()
        .then(notes => {
            notes.forEach(note => this.notes.push(note))
            // return console.log(notes)
        })
        .then(()=> {
            this.render()
        })
    }
        render(){
            const notesContainer = document.getElementById("notes-container");
            // notesContainer.innerHTML = "Lu, you finally fixed the live server reloading issue"
            // notesContainer.innerHTML = "Lu you the man"
            notesContainer.innerHTML = "Lu!"
            console.log("my notes are ", this.notes)
    }
}