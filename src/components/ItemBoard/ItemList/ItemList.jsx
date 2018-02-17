import React from 'react';
import {inject, observer} from 'mobx-react';

import './ItemList.css';


class ItemList extends React.Component {

    // handleSubmit = (creds, keepLogged) => {
    //     this.props.store.views.loginView.login(creds, keepLogged);
    // };


    render() {
        const {activeIndex, items, removeItem, setItemActive} = this.props.store;

        return <ul className="ItemList">
            {items.map((item, index) =>
                <ItemView
                    activeIndex={activeIndex}
                    index={index}
                    item={item}
                    key={item.id}
                    removeItem={removeItem}
                    setItemActive={setItemActive}
                />
            )}
        </ul>
    }

}


class _ItemView extends React.Component {

    removeItem = () => this.props.removeItem(this.props.index);

    setItemActive = (event) => {
        if (event.target.tagName === 'BUTTON') return;
        this.props.setItemActive(this.props.index);
    };

    render() {
        const {activeIndex, index, item} = this.props;

        return (
            <li className={activeIndex === index ? 'flex-row ItemView active' : 'flex-row ItemView'}
                onClick={this.setItemActive}>
                <article className="flex-row">
                    <div className="flex-row ItemView__main">
                        <div className="ItemView__title">{item.title}</div>
                        <div className="ItemView__counter">{item.comments.length}</div>
                    </div>

                    <button onClick={this.removeItem}>Delete</button>
                </article>
            </li>
        );
    }
}


const ItemView = observer(_ItemView);


export default inject('store')(observer(ItemList));
