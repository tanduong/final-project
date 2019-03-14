export const productsQuery = `
query products{
    products{
        id,
        name,
        images{
            url,
            alt
        }
        price
    }
  }
    `;
