const apiManager = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}


// const apiManager = {
//     getAllFoods: () => {
//       // fetch foods from json server and parse them to JS
//       return fetch("http://localhost:8088/food").then(response =>
//         response.json()
//       );
//     },
//     getIngredientsForSingleFood: (singleFoodObject) => {
//       // fetch from external api to get ingredients for single food
//       return fetch(
//         `https://world.openfoodfacts.org/api/v0/product/${singleFoodObject.barcode}.json`
//       ).then(response => response.json());
//     }
//   };