import React, { useState } from 'react';

const ProductInput = ({ onAdd }) => {
    // 商品名稱和價格輸入框有初始值
    const [name, setName] = useState('例如：蘋果');
    const [price, setPrice] = useState(50);

    const handleAdd = () => {
        // name.trim() 去除輸入字串前後的空白，檢查是否為空字串
        if (!name.trim() || price <= 0) return;
        onAdd(name, price);
        setName('');
        setPrice('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="商品名稱"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            &nbsp;&nbsp;
            <input
                type="number"
                placeholder="價格"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            &nbsp;&nbsp;
            <button onClick={handleAdd}>新增</button>
        </div>
    );
};

export default ProductInput;
