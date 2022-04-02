const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./notes");

// Adding a note

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Title of the note to add",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note to add",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const title = argv.title;
    const body = argv.body;

    addNote(title, body);
  },
});

// Removing a note

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note to remove",
      demandOption: true,
      value: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv.title);
  },
});

// List all notes

yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readNote(argv.title);
  },
});

yargs.parse();
