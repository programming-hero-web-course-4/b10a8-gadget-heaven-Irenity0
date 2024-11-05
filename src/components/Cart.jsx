import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredCartList, removeFromStoredCartList } from "../utilities/AddtoDB";
import CartItems from "./CartItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const allProducts = useLoaderData() || [];

    useEffect(() => {
        if (Array.isArray(allProducts)) {
            const storedCartList = getStoredCartList();
            const storedCartListInt = storedCartList.map(id => parseInt(id, 10));
            const theCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
            setCartList(theCartList);
            calculateTotal(theCartList); // Calculate total price
        } else {
            console.error("Expected allProducts to be an array, but got:", allProducts);
        }
    }, [allProducts]);

    const calculateTotal = (products) => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        setTotalPrice(total);
    };

    const handleRemoveItem = (id) => {
        removeFromStoredCartList(id);
        const updatedCart = cartList.filter(product => product.product_id !== id);
        setCartList(updatedCart);
        calculateTotal(updatedCart); // Recalculate total price
        toast.success("Product removed from cart!");
    };

    const handlePurchase = () => {
        // Show the modal
        setShowModal(true);
        // Clear the cart in localStorage
        localStorage.setItem('cart-list', JSON.stringify([]));
        // Reset cart list and total price
        setCartList([]);
        setTotalPrice(0);
    };

    const handleCloseModal = () => {
        setShowModal(false); // Hide the modal
        navigate('/'); // Redirect to the home page
    };

    // Function to sort cart items by price in descending order
    const sortCartByPrice = () => {
        const sortedCart = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCart);
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
            {cartList.map(product => (
                <CartItems key={product.product_id} product={product} onRemove={handleRemoveItem} />
            ))}

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
