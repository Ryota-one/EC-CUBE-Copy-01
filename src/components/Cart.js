import React from 'react';

const Cart = ({ cartItems = [] }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">ショッピングカート</h1>

            {cartItems.length === 0 ?(
                <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">現在カート内に商品はございません</p>
                </div>
            ) : (
                <div>
                    {/*カート内の商品一覧*/}
                    {cartItems.map(item => (
                        <div key={item.id}>
                            {/* 商品情報の表示 */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;