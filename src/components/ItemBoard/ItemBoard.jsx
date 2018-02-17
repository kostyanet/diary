import React from 'react';

import ItemInput from './ItemInput/ItemInput';
import ItemList  from './ItemList/ItemList';
import './ItemBoard.css';


const ItemBoard = () => (
    <section className="panel ItemBoard">
        <h2 className="panel__header">Items</h2>

        <div className="ItemBoard__main">
            <ItemInput />
            <ItemList />
        </div>
    </section>
);


export default ItemBoard;
