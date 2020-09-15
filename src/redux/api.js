export const API_URL = 'https://swapi.apis.guru/';

// QUERIES
export const PRODUCT_DETAILS_QUERY = productId => `
        {
          starship(id: "${productId}") {
            id
            name
            model
            crew
            passengers
            manufacturers
            costInCredits
          }
        }
      `;

export const PRODUCTS_LIST_QUERY = `
          {
            allStarships {
              starships {
                id
                name
                manufacturers
                costInCredits
              }
            }
          }
        `;
