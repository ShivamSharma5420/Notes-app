const { default: chalk } = require("chalk");
const fs = require("fs");

const getNotes = () => {
    return "Your notes...";
}


const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicate = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log("new note added");
    }
    else {
        console.log("Title already taken try another one");
    }




}



const saveNotes = (notes) => {
    dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}




const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}





const removeNote = (title) => {
    const notes = loadNotes();

    const otherthanTitle = notes.filter((note) => {
        return note.title !== title;
    });

    if (otherthanTitle.length === notes.length) {
        console.log(chalk.bgRed("No note found with this title"));
    }
    else {
        console.log(chalk.bgGreen("note removed"));
    }

    saveNotes(otherthanTitle);

}


const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);

    });
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}