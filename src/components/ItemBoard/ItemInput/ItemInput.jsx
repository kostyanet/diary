import React from 'react';
import {inject, observer} from 'mobx-react';

// import ItemInput from './ItemInput/ItemInput';
import './ItemInput.css';


class ItemInput extends React.Component {

    handleClick = () => {
        let title = this.input.value.trim();
        title && this.props.store.createItem(title);

        this.input.value = '';
    };


    render() {
        return (
            <div className="ItemInput">
                <input type="text" placeholder="Type name here…" ref={(input) => this.input = input} />
                <button onClick={this.handleClick}>Add new</button>
            </div>
        );
    }

}


export default inject('store')(observer(ItemInput));
