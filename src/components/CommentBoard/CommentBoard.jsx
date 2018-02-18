import React                        from 'react';
import {observer, inject}           from 'mobx-react';

import CommentInput from './CommentInput/CommentInput';
import CommentList  from './CommentList/CommentList';
import './CommentBoard.css';



class CommentBoard extends React.Component {
    get comments() {
        const store = this.props.store;
        return this.itemNumber ? store.items[store.activeIndex].comments : null;
    }


    get commentsNumber() {
        return this.comments.length;
    }


    get itemNumber() {
        let idx = this.props.store.activeIndex;
        return idx === null ? null : idx + 1;
    }


    render() {
        return (
            <section className="panel CommentBoard">
                <h2 className="panel__header">Comments {this.itemNumber && <span>#{this.itemNumber}</span>}</h2>

                {this.itemNumber
                    ? <div className="CommentBoard__main">
                        <CommentList comments={this.comments} commentsNumber={this.commentsNumber} />
                        <CommentInput addComment={this.props.store.addComment} />
                    </div>
                    : <p>Please, select an item.</p>
                }
            </section>
        );
    }
}


export default inject('store')(observer(CommentBoard));
