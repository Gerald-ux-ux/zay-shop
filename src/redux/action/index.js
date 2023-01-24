// WHEN YOU ADD

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// WHEN YOU DELETE

export const delCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}