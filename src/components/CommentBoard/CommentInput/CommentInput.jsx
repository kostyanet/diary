import React from 'react';

import './CommentInput.css';



export default class CommentInput extends React.Component {

    handleKeyPress = event => {
        if (event.ctrlKey) {
            let value = this.input.value.trim();
            value && this.props.addComment(value);

            this.input.value = '';
        }
    };


    render() {
        return (
            <section className="flex-row CommentInput">
                <div className="CommentInput__picture" />
                <textarea name="comment" onKeyPress={this.handleKeyPress} ref={(input) => this.input = input} />
            </section>
        )
    }
}
