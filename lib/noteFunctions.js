const fs = require('fs');
const path = require('path');

function noteCreateNew(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
    return note;
}

function noteDelete(noteArray, id) {
    let delID = parseInt(id);
    noteArray.splice(delID, 1);

    for (let i = delID; i < noteArray.length; i++) {
        noteArray[i].id = i.toString();
}

fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({
        notes: noteArray
    }, null, 2)
)
}

module.exports = {
    noteCreateNew,
    noteDelete
};