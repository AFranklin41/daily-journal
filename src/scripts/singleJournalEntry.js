// build single entry with html string

const journalEntryHTML = {
	buildJournalEntry: journalEntryObject => {
		return `
    <!-- Blog entries -->
    <div class="w3-col l8 s12">
      <div class="w3-card-4 w3-margin w3-white">
        <div class="w3-container">
          <section class="journal-card" id="journal-card-${journalEntryObject.id}">
          <h3><b>${journalEntryObject.concept}</b></h3>
          <h5><span class="w3-opacity">${journalEntryObject.date}</span></h5>
          <div class="w3-container">
            <p>${journalEntryObject.entry}</p>
            <div class="w3-row">
              <div class="w3-col m8 s12">
                <p>${journalEntryObject.mood}</p>
                </section>
                
                <p><b><button id="details-button-${journalEntryObject.id}"
                      class="w3-button w3-padding-large w3-white w3-border">Details »</button></b></p>
                <p><b><button id="edit-button-${journalEntryObject.id}"
                      class="w3-button w3-padding-large w3-white w3-border">Edit »</button></b></p>
                <p><b><button class="w3-button w3-padding-large w3-white w3-border"
                      id="delete-entry-${journalEntryObject.id}">
                      Delete »</button></b></p>
  
                <div id="deleteModal" class="modal">
                  <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Are you sure you want to delete this?</p>
                    <div class="modal-body">
                      <button id="modal-yes">Yes</button>
                      <button id="modal-no">No</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
		`;
	}
};

export default journalEntryHTML;
