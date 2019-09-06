import journalEntryHTML from "./singleJournalEntry.js";

const domPrinterSingle = {
    printSingleEntry: entryFromJSON => {
        // Build HTML string for individual entry
        const htmlString = journalEntryHTML.buildJournalEntry(entryFromJSON);
        // Add HTML string to DOM
        document.querySelector("#entryLog").innerHTML += htmlString;
    }
};

export default domPrinterSingle;