import journalEntryHTML from "./singleJournalEntry.js";

const domPrinterSingle = {
    printSingleEntry: entryFromJSON => {
        //clear the container
        document.querySelector("#entryLog").innerHTML = "";
        // Build HTML string for individual entry
        const htmlString = journalEntryHTML.buildJournalEntry(entryFromJSON);
        // Add HTML string to DOM
        document.querySelector("#entryLog").innerHTML += htmlString;
    },
    printJournalEditForm: (journalObjectToEdit) => {

        const targetCard = document.querySelector(`#journal-card-${journalObjectToEdit.id}`)
        console.log(targetCard)

        targetCard.innerHTML += `
          <section>
          <h5>Edit Concept</h5>
          <input id="edit-concept-${journalObjectToEdit.id}" type="text" value="${journalObjectToEdit.concept}">
          <h5>Edit Date</h5>
          <input id="edit-date-${journalObjectToEdit.id}" type="date" value="${journalObjectToEdit.date}">
          <h5>Edit Entry</h5>
          <input id="edit-entry-${journalObjectToEdit.id}" type="text" value="${journalObjectToEdit.entry}">
          <h5>Edit Mood</h5>
          <input id="edit-mood-${journalObjectToEdit.id}" type="text" value="${journalObjectToEdit.mood}">
		  <button id="save-edit-${journalObjectToEdit.id}">Save</button>
		</section>`

	}
};

export default domPrinterSingle;