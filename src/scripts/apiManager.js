const apiManager = {
	getJournalEntries: () => {
		return fetch("http://localhost:8088/entries").then(response =>
			response.json()
		);
	},
	postOneEntry: journalEntryToPost =>
		fetch("http://localhost:8088/entries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(journalEntryToPost)
		}),
	deleteOneEntry: id =>
		fetch(`http://localhost:8088/entries/${id}`, {
			method: "DELETE"
		}),
	getOneEntry: id => {
		return fetch(`http://localhost:8088/entries/${id}`).then(response =>
			response.json()
		)
	},
	editOneEntry: (id, journalObjectToEdit) =>
		fetch(`http://localhost:8088/entries/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(journalObjectToEdit)
		}),
};

export default apiManager;
