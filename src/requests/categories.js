
export const getCategories = (callback) => {
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(json => callback(json))
}