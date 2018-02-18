import React              from 'react';
import {inject, observer} from 'mobx-react';

import ItemView           from '../ItemView/ItemView';
import './ItemList.css';


const ItemList = inject('store')(observer(({store}) => (
    <ul className="ItemList">
        {store.items.map((item, index) =>
            <ItemView
                index={index}
                isActive={index === store.activeIndex}
                item={item}
                key={item.id}
                removeItem={store.removeItem}
                setItemActive={store.setItemActive} />
        )}
    </ul>
)));


export default ItemList;

