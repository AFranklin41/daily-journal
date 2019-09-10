import apiManager from "./apiManager.js";
import domPrinter from "./domPrinter.js";
import domPrinterSingle from "./domPrinterSingle.js";
// ------- POST ENTRIES TO THE DOM ----------//

// When the page loads, fetch all the entries from your json-server API
apiManager.getJournalEntries().then(parsedEntries => {
	domPrinter.printJournalEntries(parsedEntries);
});
// });

// ------- CLICK EVENT FOR POSTING ENTRY TO JSON SERVER ----------//

document.querySelector("#submit-button").addEventListener("click", function() {
	//grabbing all of my moods
	const moodList = document.getElementsByName("group1");
	//empty string to store mood values
	let moodValues = "";
	//looping through mood list to determine if they are checked and to set empty string to the value of the checked mood
	moodList.forEach(mood => {
		if (mood.checked === true) {
			moodValues = mood.value;
		}
	});

	//object with the values of the input fields to post to JSON server
	const journalEntryToPost = {
		date: document.querySelector("#journalDate").value,
		concept: document.querySelector("#journalConcept").value,
		entry: document.querySelector("#journalEntry").value,
		mood: moodValues
	};
	//calling function from apiManager.js to post object to JSON Server
	apiManager
		.postOneEntry(journalEntryToPost)
		.then(apiManager.getJournalEntries)
		.then(parsedJournalEntryArray => {
			domPrinter.printJournalEntries(parsedJournalEntryArray);
		});
	//clear form values
	document.querySelector("#journalDate").value = ""
	document.querySelector("#journalConcept").value = ""
	document.querySelector("#journalEntry").value = ""
});
// ------- CLICK EVENT FOR DELETE BUTTONS ----------//

// Add an event listener to the body element because the delete buttons are loaded dynamically-- they don't exist on page load!
document.querySelector("body").addEventListener("click", () => {
	// If the user clicks on a delete button, do some stuff
	const deleteButtonModal = event.currentTarget.querySelector("#deleteModal");
	const deleteButtonSpan = event.currentTarget.querySelector(".close");
	const modalYesButton = event.currentTarget.querySelector("#modal-yes");
	const modalNoButton = event.currentTarget.querySelector("#modal-no");

	if (event.target.id.includes("delete-entry")) {
		const idToDelete = event.target.id.split("-")[2];
		deleteButtonModal.style.display = "block";
		deleteButtonSpan.onclick = function() {
			deleteButtonModal.style.display = "none";
		};
		modalNoButton.onclick = function() {
			deleteButtonModal.style.display = "none";
		};
		window.onclick = function(event) {
			if (event.target === deleteButtonModal) {
				deleteButtonModal.style.display = "none";
			}
		};
		modalYesButton.onclick = function(event) {
			if (event.target === modalYesButton) {
				console.log(event.target);
				apiManager
					.deleteOneEntry(idToDelete)
					.then(apiManager.getJournalEntries)
					.then(parsedJournalEntryArray => {
						domPrinter.printJournalEntries(parsedJournalEntryArray);
					});
			}
		};
	}
// ------- CLICK EVENT FOR DETAILS BUTTONS ----------//
	if (event.target.id.includes("details-button")) {
		const idToGet = event.target.id.split("-")[2];
		apiManager.getOneEntry(idToGet).then(parsedResponse => {
			domPrinterSingle.printSingleEntry(parsedResponse);
		});
	}
// ------- CLICK EVENT FOR EDIT BUTTONS ----------//
	if (event.target.id.includes("edit-button")) {
		const idToGet = event.target.id.split("-")[2];
		apiManager.getOneEntry(idToGet).then(parsedResponse => {
			domPrinterSingle.printJournalEditForm(parsedResponse);
		});
	}
	if (event.target.id.includes("save-edit")) {
		// Get the id of the thing we want to edit
		const idToGet = event.target.id.split("-")[2];

		// Get the value of the input
		const editedConceptValue = document.querySelector(
			`#edit-concept-${idToGet}`
		).value;
		const editedDateValue = document.querySelector(`#edit-date-${idToGet}`)
			.value;
		const editedEntryValue = document.querySelector(`#edit-entry-${idToGet}`)
			.value;
		const editedMoodValue = document.querySelector(`#edit-mood-${idToGet}`)
			.value;

		// Put the input value into an object
		const editedJournalObj = {
			concept: editedConceptValue,
			date: editedDateValue,
			entry: editedEntryValue,
			mood: editedMoodValue
		};

		// Send to database w/ PUT method
		apiManager.editOneEntry(idToGet, editedJournalObj).then(() => {
			apiManager.getJournalEntries().then(allEntries => {
				domPrinter.printJournalEntries(allEntries);
			});
		});
	}
});
