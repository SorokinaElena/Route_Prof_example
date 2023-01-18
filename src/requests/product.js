
export const getProduct = (callback, id) => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(responce => responce.json())
    .then(json => callback(json))
}