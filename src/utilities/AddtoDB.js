// Utilities.js

const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    return storedCartListStr ? JSON.parse(storedCartListStr) : [];
}

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if (!storedCartList.includes(id)) {
        storedCartList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedCartList));
    }
}

const removeFromStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    const updatedCart = storedCartList.filter(item => item !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedCart));
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
}

const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(item => item !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
}

const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
};

export { 
    addToStoredCartList, 
    removeFromStoredCartList, 
    getStoredCartList, 
    addToStoredWishList, 
    removeFromStoredWishList, 
    getStoredWishList, 
    calculateTotalPrice 
};
