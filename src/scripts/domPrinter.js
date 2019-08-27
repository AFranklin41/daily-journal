// Module that contains function to print to the DOM

const domPrinter = {
	printSingleEntry: entryFromJSON => {
		// Build HTML string for individual entry
		const htmlString = journalEntryHTML.buildSingleEntry(entryFromJSON);
		// Add HTML string to DOM
		document.querySelector("#entryLog").innerHTML += htmlString;
	}
};










// const domPrinter = {
//     // Accepts two parameters: a food from JSON Server and a food from the API
//   printSingleFood: (foodFromJSONServer, foodFromExternalAPI) => {
//     if (foodFromExternalAPI.product.ingredients_text) {
//       foodFromJSONServer.ingredients = foodFromExternalAPI.product.ingredients_text;
//     } else {
//       foodFromJSONServer.ingredients = "no ingredients listed";
//     }
//     // Build HTML string for individual food
//     const htmlString = htmlBuilder.buildFoodCard(foodFromJSONServer);
//     // Add HTML string to DOM
//     document.querySelector("#container").innerHTML += htmlString;
//   }
// };
