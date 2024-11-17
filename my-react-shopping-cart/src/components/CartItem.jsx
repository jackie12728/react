import React, { useState } from 'react';

const CartItem = ({ product, onRemove, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(product.name);
    const [newPrice, setNewPrice] = useState(product.price);

    const handleSave = () => {
        if (!newName.trim() || newPrice <= 0) return;
        onUpdate(product.id, newName, parseFloat(newPrice));
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <button onClick={handleSave}>保存</button>
                    &nbsp;&nbsp;
                    <button onClick={() => setIsEditing(false)}>取消</button>
                </div>
            ) : (
                <div>
                    {/* style={{ cursor: 'pointer' }} 滑鼠游標指向元素時，顯示為手形 */}
                    <span onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
                        {product.name} - ${product.price.toFixed(2)}
                    </span>
                    &nbsp;&nbsp;
                    <button onClick={() => onRemove(product.id)}>刪除</button>
                </div>
            )}
        </li>
    );
};

export default CartItem;
