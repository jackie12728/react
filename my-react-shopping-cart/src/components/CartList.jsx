import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cart, onRemove, onUpdate }) => {
    return (
        <ul>
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    product={item}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
};

export default CartList;
