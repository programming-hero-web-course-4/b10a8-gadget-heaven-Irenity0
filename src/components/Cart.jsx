import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, removeFromStoredCartList } from "../utilities/AddtoDB";
import CartItems from "./CartItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]); 
    const [totalPrice, setTotalPrice] = useState(0); 
    const [showModal, setShowModal] = useState(false); 

    const allProducts = useLoaderData() || [];

    
    const calculateTotal = (products) => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(total);
    };

    
    useEffect(() => {
        if (Array.isArray(allProducts)) {
            const storedCartList = getStoredCartList();
            const storedCartListInt = storedCartList.map(id => parseInt(id, 10));
            const theCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
            setCartList(theCartList); 
            calculateTotal(theCartList);
        } else {
            console.error("Expected allProducts to be an array, but got:", allProducts);
        }
    }, [allProducts]); 

    
    const handleRemoveItem = (id) => {
        removeFromStoredCartList(id); // Remove from storage
        const updatedCart = cartList.filter(product => product.product_id !== id);
        setCartList(updatedCart); // Update the cart in state
        calculateTotal(updatedCart); // Recalculate total price
        toast.success("Product removed from cart!"); // Show toast notification
    };

    // Handle purchase and reset cart
    const handlePurchase = () => {
        setShowModal(true); // Show purchase modal
        localStorage.setItem('cart-list', JSON.stringify([])); // Clear the cart in localStorage
        setCartList([]); // Clear cart in state
        setTotalPrice(0); // Reset total price
    };

    // Close the modal and navigate to home page
    const handleCloseModal = () => {
        setShowModal(false); // Close modal
        navigate('/'); // Redirect to home
    };

    // Sort the cart items by price in descending order
    const sortCartByPrice = () => {
        const sortedCart = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCart); // Update state with sorted cart
    };

    return (
        <section className="w-11/12 mx-auto my-12">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="flex space-x-4 items-center">
                    <h2 className="text-2xl font-semibold">Total cost: ${totalPrice}</h2>
                    <button 
                        className="btn btn-outline border-2 border-purple-600 rounded-full" 
                        onClick={sortCartByPrice} // Call sort function on click
                    >
                        Sort By Price
                    </button>
                    <button 
                        className="btn btn-outline border-2 border-purple-600 rounded-full" 
                        onClick={handlePurchase}
                        disabled={cartList.length === 0 || totalPrice === 0} // Disable button if cart is empty or total price is 0
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <br />
            {cartList.length > 0 ? (
                cartList.map(product => (
                    <CartItems key={product.product_id} product={product} onRemove={handleRemoveItem} />
                ))
            ) : (
                <p>Your cart is empty</p> // Display message if cart is empty
            )}

            {/* DaisyUI Modal for Purchase Confirmation */}
            <input type="checkbox" id="purchase-modal" className="modal-toggle" checked={showModal} onChange={() => setShowModal(!showModal)} />
            <div className="modal">
                <div className="modal-box">
                    <h2 className="text-xl font-bold">Congratulations!</h2>
                    <p>Your purchase was successful!</p>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn">Close</button>
                    </div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </section>
    );
};

export default Cart;
