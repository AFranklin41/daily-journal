//Entries for my Journal
const journalEntries = [
	{
		date: "08/12/2019",
		concept: "JavaScript Basics",
		entry: "Learned JavaScript basics like for loops and other mumbojumbo.",
		mood: "meh"
	},
	{
		date: "08/16/2019",
		concept: "JavaScript HTML",
		entry: "Learning to write HTML with JavaScript",
		mood: "German"
	}
];

//function to make print journal entries
const buildJournalEntry = journalEntryObject => {
	const journalEntryHTML = `<section>
        <p>${journalEntryObject.date}</p>
        <p>${journalEntryObject.concept}</p>
        <p>${journalEntryObject.entry}</p>
        <p>${journalEntryObject.mood}</p>
        </section>
        `;
	return journalEntryHTML;
};

//builds single journal entries together to make the entire journal
const buildJournal = allJournalEntries => {
	let journalEntriesHTMLString = "";
	for (let i = 0; i < allJournalEntries.length; i++) {
		const singleEntry = buildJournalEntry(allJournalEntries[i]);
		journalEntriesHTMLString += singleEntry;
	}
	// console.log(journalEntriesHTMLString);
	return journalEntriesHTMLString;
};

buildJournal(journalEntries)
console.log(buildJournal(journalEntries))

const renderJournalEntriesToDOM = (journalEntries) => {
    document.querySelector(".entryLog").innerHTML = buildJournal(journalEntries)
}

renderJournalEntriesToDOM(journalEntries)
