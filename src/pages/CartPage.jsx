// src/pages/CartPage.jsx
const CartPage = ({ cart, updateCartQuantity, removeFromCart }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const finalPrice = totalPrice * 0.9;
  
    return (
      <div className="container mx-auto p-6">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border p-4 mb-4">
                <div>
                  <h2 className="font-bold text-2xl">{item.title}</h2>
                  <p className="text-2xl"> ${item.price}</p>
                </div>
                <div className="flex items-center"> 
                  <p className="text-2xl" style={{ fontFamily: 'Lobster' }}>Quantity:</p>
                  <button className="p-2 text-4xl" onClick={() => updateCartQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                   -
                  </button>
                  <span className="px-4 text-2xl">{item.quantity}</span>
                  <button className="text-4xl" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 text-2xl hover:bg-red-800">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right">
              <p className="text-2xl" style={{ fontFamily: 'Lobster' }}>Total Price:<span className="font-bold text-2xl"> ${totalPrice.toFixed(2)}</span></p>
              <p className="text-2xl p-4 " style={{ fontFamily: 'Lobster' }}>Final Price (after <span className="text-green-800 font-semibold">10% discount</span>):<span className="font-bold text-3xl"> ${finalPrice.toFixed(2)}</span></p>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default CartPage;
  