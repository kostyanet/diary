import React from 'react';
import {observer} from 'mobx-react';

import './CommentList.css';


const CommentList = observer(({comments, commentsNumber}) =>
    commentsNumber
        ? <ul className="CommentList">
            {comments.map(comment => <CommentView key={comment.id} message={comment.message} />)}
        </ul>
        : <p>No comments yet for this item.</p>
);


const CommentView = observer(({message}) =>
    <li className="flex-row CommentView">
        <div className="CommentList__picture" />
        <p>{message}</p>
    </li>
);


export default CommentList;
