// build single entry with html string

const journalEntryHTML = {
	buildSingleEntry: journalEntryObject => {
		return `<section>
        <h4>${journalEntryObject.date}</h4>
        <h3>${journalEntryObject.concept}</h3>
        <p>${journalEntryObject.entry}</p>
        <p>${journalEntryObject.mood}</p>
        </section>
		`;
	}
};
