import React                        from 'react';
import {observer, inject}           from 'mobx-react';

import CommentInput from './CommentInput/CommentInput';
import CommentList  from './CommentList/CommentList';
import './CommentBoard.css';



const CommentBoard = () => (
    <section className="panel CommentBoard">
        <CommentHeader />
        <CommentList />
        <CommentInput />
    </section>
);


const _CommentHeader = props => (
    <h2 className="panel__header">
        Comments {props.store.activeIndex != null && <span>#{props.store.activeIndex + 1}</span>}
    </h2>
);


const CommentHeader = inject('store')(observer(_CommentHeader));

export default CommentBoard;
