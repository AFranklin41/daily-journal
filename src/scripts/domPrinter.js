// Module that contains function to print to the DOM

import journalEntryHTML from "./singleJournalEntry.js";

// const domPrinter = {
// 	printSingleEntry: entryFromJSON => {
// 		// Build HTML string for individual entry
// 		const htmlString = journalEntryHTML.buildSingleEntry(entryFromJSON);
// 		// Add HTML string to DOM
// 		document.querySelector("#entryLog").innerHTML += htmlString;
// 	}
// };


const domPrinter = {
	printJournalEntries: arrayOfEntries => {
		let journalEntries = "";
		for (let i = 0; i < arrayOfEntries.length; i++) {
			journalEntries += journalEntryHTML.buildJournalEntry(arrayOfEntries[i])
		  }
		  document.querySelector("#entryLog").innerHTML += journalEntries
		//   `<div class="row">${journalEntries}</div>`;
	}
}

export default domPrinter;
