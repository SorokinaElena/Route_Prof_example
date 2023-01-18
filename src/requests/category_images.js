
export const getCategoryImages = (callback, category_name) => {
    fetch(`https://dummyjson.com/products/category/${category_name}`)
    .then(response => response.json())
    .then(json => callback(json.products[1].thumbnail))
}