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
console.log(journalEntries);

//function that prints journal entries to the DOM
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

//collects each journal entry and puts them in an array so they can be printed
const buildJournal = allJournalEntries => {
	let journalEntriesHTMLString = "";
	for (let i = 0; i < allJournalEntries.length; i++) {
		const singleEntry = buildJournalEntry(allJournalEntries[i]);
		journalEntriesHTMLString += singleEntry;
	}
	// console.log(journalEntriesHTMLString);
	return journalEntriesHTMLString;
};

document.querySelector(".entryLog").innerHTML = buildJournal(journalEntries);

	document
		.querySelector("#submit-button")
		.addEventListener("click", function() {
			console.log("Submitted!");
			const journalDateInput = document.querySelector("#journalDate").value;
			const journalConceptInput = document.querySelector("#journalConcept")
				.value;
			const journalEntryInput = document.querySelector("#journalEntry").value;
			const journalMoodInput = document.querySelector("#journalMood").value;
			const journalInputs = {
				date: journalDateInput,
				concept: journalConceptInput,
				entry: journalEntryInput,
				mood: journalMoodInput
			};
			console.log(journalInputs);
			journalEntries.push(journalInputs)
			console.log(journalEntries)
			document.querySelector(".entryLog").innerHTML = buildJournal(journalEntries);
		});

