const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem("cart-list");
    return storedCartListStr ? JSON.parse(storedCartListStr) : [];
};

// Add an item to the cart
const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if (!storedCartList.includes(id)) {
        storedCartList.push(id);
        localStorage.setItem("cart-list", JSON.stringify(storedCartList));
    }
};


const removeFromStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    const updatedCart = storedCartList.filter(item => item !== id);
    localStorage.setItem("cart-list", JSON.stringify(updatedCart));
};

// Wishlist Functions

// Get the current wishlist items from localStorage
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem("wish-list");
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

// Add an item to the wishlist
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem("wish-list", JSON.stringify(storedWishList));
    }
};

// Remove an item from the wishlist
const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(item => item !== id);
    localStorage.setItem("wish-list", JSON.stringify(updatedWishList));
};

// Calculate the total price of all products in the cart
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
