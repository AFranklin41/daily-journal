

// Get entries from JSON Server
apiManager.getJournalEntries().then(parsedEntries => {
	// Loop through the entries from JSON Server
	parsedEntries.forEach(entries => {
		// Print each entry to the DOM
		domPrinter.printSingleEntry(entries);
	  });
	});


	// document
	// 	.querySelector("#submit-button")
	// 	.addEventListener("click", function() {
	// 		console.log("Submitted!");
	// 		const journalDateInput = document.querySelector("#journalDate").value;
	// 		const journalConceptInput = document.querySelector("#journalConcept")
	// 			.value;
	// 		const journalEntryInput = document.querySelector("#journalEntry").value;
	// 		const journalMoodInput = document.querySelector("#journalMood").value;
	// 		const journalInputs = {
	// 			date: journalDateInput,
	// 			concept: journalConceptInput,
	// 			entry: journalEntryInput,
	// 			mood: journalMoodInput
	// 		};
	// 		console.log(journalInputs);
	// 		journalEntries.push(journalInputs)
	// 		console.log(journalEntries)
	// 		document.querySelector(".entryLog").innerHTML = buildJournal(journalEntries);
	// 	});

// fetch("http://localhost:3000/entries") // Fetch from the API
// .then(entries => entries.json())  // Parse as JSON
// .then(parsedEntries => {
// 	parsedEntries.forEach(journalEntryObject => {
// 		console.log(journalEntryObject)
// 		document.querySelector("#entryLog").innerHTML += journalEntryHTML 
// 	});
// })

// //function that prints journal entries to the DOM
// const buildJournalEntry = journalEntryObject => {
// 	const journalEntryHTML = `<section>
//         <p>${journalEntryObject.date}</p>
//         <p>${journalEntryObject.concept}</p>
//         <p>${journalEntryObject.entry}</p>
//         <p>${journalEntryObject.mood}</p>
//         </section>
//         `;
// 	return journalEntryHTML;
// };

//collects each journal entry and puts them in an array so they can be printed
// const buildJournal = allJournalEntries => {
// 	let journalEntriesHTMLString = "";
// 	for (let i = 0; i < allJournalEntries.length; i++) {
// 		const singleEntry = buildJournalEntry(allJournalEntries[i]);
// 		journalEntriesHTMLString += singleEntry;
// 	}
// 	// console.log(journalEntriesHTMLString);
// 	return journalEntriesHTMLString;
// };

// document.querySelector(".entryLog").innerHTML = buildJournal(journalEntries);