const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();

  // If note is already present

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log("Note saved successfully !!");
  } else {
    console.log("Note already present !!");
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find((note) => note.title === title);

  if (!noteToRead) {
    console.log("Note not present");
    return;
  }
  console.log(
    "Note Title: " + noteToRead.title + ". Note Body: " + noteToRead.body
  );
};

const removeNote = (title) => {
  if (title.trim() === "") {
    console.log("Invalid Title");
    return;
  }

  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  if (newNotes.length === notes.length) {
    console.log("No note found to delete");
    return;
  }
  saveNotes(newNotes);
  console.log("Note removed successfully");
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log("No notes present");
    return;
  }

  notes.forEach((note) => {
    console.log(`Note title : ${note.title}`);
  });
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("./data/data.json");
    const notesJSON = notesBuffer.toString();
    const notes = JSON.parse(notesJSON);
    return notes;
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("./data/data.json", notesJSON);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
