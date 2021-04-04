const getNoteId = () => {
  let noteObj = getExistingNotes();
  if (!noteObj) {
    return 1;
  }
  const keysArray = Object.keys(noteObj);
  const numberKeys = keysArray.map((key) => Number(key));
  console.log(numberKeys);
  return Math.max(...numberKeys);
};

const getExistingNotes = () => {
  let notes = localStorage.getItem("notes");
  if (!notes) {
    return null;
  }
  return JSON.parse(notes);
};
