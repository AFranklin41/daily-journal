// Module that contains function to print to the DOM

import journalEntryHTML from "./singleJournalEntry.js";


const domPrinter = {
	printJournalEntries: arrayOfEntries => {
		document.querySelector("#entryLog").innerHTML = "";
		let journalEntries = "";
		for (let i = 0; i < arrayOfEntries.length; i++) {
			journalEntries += journalEntryHTML.buildJournalEntry(arrayOfEntries[i])
		  }
		  document.querySelector("#entryLog").innerHTML += journalEntries
	},
}
export default domPrinter;
