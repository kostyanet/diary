import React              from 'react';

import './CommentInput.css';
import {inject, observer} from 'mobx-react/index';



class CommentInput extends React.Component {

    handleKeyPress = event => {
        if (event.ctrlKey) {
            let value = this.input.value.trim();
            value && this.props.addComment(value);

            this.input.value = '';
        }
    };


    render() {
        return (
            this.props.store.activeItem != null &&
            <section className="flex-row CommentInput">
                <div className="CommentInput__picture" />
                <textarea name="comment" onKeyPress={this.handleKeyPress} ref={(input) => this.input = input} />
            </section>
        )
    }
}


export default inject('store')(observer(CommentInput));
