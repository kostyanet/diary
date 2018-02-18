import React      from 'react';
import {observer} from 'mobx-react/index';

import './ItemView.css';


class ItemView extends React.Component {

    removeItem = () => this.props.removeItem(this.props.index);

    setItemActive = (event) => {
        if (event.target.tagName === 'BUTTON') return;
        this.props.setItemActive(this.props.index);
    };


    render() {
        const {isActive, item} = this.props;

        return (
            <li className={isActive ? 'flex-row ItemView active' : 'flex-row ItemView'}
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


export default observer(ItemView);
