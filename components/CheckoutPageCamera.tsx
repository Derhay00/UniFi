"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const CheckoutPageCamera = () => {
  // State to track the quantity, subtotal, and UI Care selection
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(499.00); // Initial product price
  const [uiCareSelected, setUICareSelected] = useState(false); // UI Care checkbox state

  const productPrice = 499.00;
  const uiCarePrice = 49.00; // UI Care price

  // Function to handle quantity changes
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    // Calculate new subtotal based on quantity
    setSubtotal(newQuantity * productPrice + (uiCareSelected ? uiCarePrice : 0));
  };

  // Function to handle UI Care checkbox changes
  const handleUICareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.checked;
    setUICareSelected(selected);
    // Add or subtract UI Care price from subtotal based on checkbox state
    setSubtotal(quantity * productPrice + (selected ? uiCarePrice : 0));
  };

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setSubtotal((prev) => (quantity + 1) * productPrice + (uiCareSelected ? uiCarePrice : 0));
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
    setSubtotal((prev) => (quantity - 1) * productPrice + (uiCareSelected ? uiCarePrice : 0));
  };

  return (
    <div className="w-[1050px] mx-auto my-8 px-4">
      <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>
      <nav className="flex mb-6 text-gray-500 text-sm">
        <ol className="inline-flex items-center space-x-2">
          <li>Cart</li>
          <li>&gt;</li>
          <li>Your Information</li>
          <li>&gt;</li>
          <li>Shipping</li>
          <li>&gt;</li>
          <li>Payment</li>
        </ol>
      </nav>

      <div className="border border-gray-100 rounded-lg p-6 pt-1">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-gray-600">Product</th>
                <th className="px-6 py-4 text-right text-gray-600">Price</th>
                <th className="px-6 py-4 text-center text-gray-600">Quantity</th>
                <th className="px-6 py-4 text-right text-gray-600">Sub-Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Image 
                      src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F8889e279-c8b3-4d97-89fb-9559d498c6bd.png&q=75&w=64" 
                      alt="U7 Pro Max" 
                      width={70} 
                      height={0} 
                      className="mr-8"
                    />
                    <div>
                      <p className="font-medium">Camera AI Pro / Black</p>
                      <p className="text-sm text-gray-500">SKU: UVC-AI-Pro</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$499.00</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center   rounded-md bg-gray-100">
                    <button
                      className="px-2 py-1 text-gray-500 hover:text-gray-700"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="w-8 text-center bg-transparent border-none focus:outline-none"
                      value={quantity} 
                      onChange={handleQuantityChange}
                      min={1} 
                    />
                    <button
                      className="px-2 py-1 text-gray-500 hover:text-gray-700"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-4" 
                    checked={uiCareSelected} 
                    onChange={handleUICareChange}
                  />
                  <div className="flex items-center">
                    <Image 
                      src="/ui-care.avif" 
                      alt="UI Care" 
                      width={34} 
                      height={34} 
                      className="mr-9"
                    />
                    <p>UI Care (UVC-AI-Pro)</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">$49.00</td>
                <td className="px-6 py-4 text-center">1</td>
                <td className="px-6 py-4 text-right">$49.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="w-72 flex flex-col items-center"> 
          <div className="text-xl font-semibold flex justify-between  items-center w-full">
            <p>Total:</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-sm shadow-lg hover:bg-blue-500 mt-8">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPageCamera;