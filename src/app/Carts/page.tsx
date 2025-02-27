import React from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {
  // Price value should be a number
  const price: number = 5654;
  const subtotal: number = 198.6;

  return (
    <div className="w-[1200px] h-[800px] min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <main className="container mx-auto flex flex-col lg:flex-row mt-8 gap-6">
        {/* Cart Details */}
        <div className="bg-white flex flex-col lg:flex-row w-full lg:w-7/12 rounded-lg p-6">
          <div className="flex flex-col space-y-6 lg:w-9/12">
            {/* Cart Item 1 */}
            <div className=" width-screen flex items-center border-b py-4">
              <Image
                src="/assets/Image3.png"
                alt="Library Stool Chair"
                width={59}
                height={59}
                className=" object-cover rounded-md"
              />
              <div className="ml-4 w-screen">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#111111] font-Inter font-[400] text-[15px]">${price}</p>
                  <p className="font-medium text-gray-800">Library Stool Chair</p>
                </div>
                <p className="text-sm text-[#757575] w-[183px] font-Inter font-[400] text-[15px] leading-[28px]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-between w-full text-sm text-[#757575]">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </div>
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex items-center border-b py-4">
              <Image
                src="/assets/Image9.png"
                alt="Library Stool Chair"
                width={59}
                height={59}
                className="object-cover rounded-md"
              />
              <div className="ml-4 w-screen">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-[#111111] font-Inter font-[400] text-[15px]">${price}</p>
                  <p className="font-medium text-gray-800">Library Stool Chair</p>
                </div>
                <p className="text-sm text-[#757575] w-[183px] font-Inter font-[400] text-[15px] leading-[28px]">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-between w-full text-sm text-[#757575]">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-[500px] lg:w-4/12 bg-white rounded-lg p-6 mt-6 lg:mt-0">
          <h2 className="font-Inter font-medium text-[21px] leading-[33px] mb-6">Summary</h2>
          <p className="flex justify-between py-2 text-sm text-[#757575]">
            Subtotal: <span>${subtotal}</span>
          </p>
          <p className="flex justify-between py-2 text-sm text-[#757575]">
            Estimated Delivery: <span>Free</span>
          </p>
          <p className="flex justify-between py-2 text-sm text-[#757575] border-t border-b">
            Total: <span>${subtotal}</span>
          </p>
          <button className="bg-[#029FAE] text-white w-full h-[60px] rounded-[30px] mt-6">
            <p className="font-Inter font-medium text-[15px] leading-[24px] text-center">
              Member Checkout
            </p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
