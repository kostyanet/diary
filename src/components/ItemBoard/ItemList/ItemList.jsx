import React              from 'react';
import {inject, observer} from 'mobx-react';

import ItemView           from '../ItemView/ItemView';
import './ItemList.css';


const ItemList = inject('store')(observer(({store}) => (
    <ul className="ItemList">
        {store.items.map((item, index) =>
            <ItemView
                activeIndex={store.activeIndex}
                index={index}
                item={item}
                key={item.id}
                removeItem={store.removeItem}
                setItemActive={store.setItemActive}
            />
        )}
    </ul>
)));


export default ItemList;

