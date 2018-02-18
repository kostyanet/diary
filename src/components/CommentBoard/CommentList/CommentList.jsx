import React      from 'react';
import {observer} from 'mobx-react';

import './CommentList.css';
import {inject}   from 'mobx-react/index';


const CommentList = props => (
    <ul className="CommentList">
        {props.store.activeItem != null && props.store.activeItem.comments.map(comment =>
            <CommentView key={comment.id} message={comment.message} />)
        }
    </ul>
);


const CommentView = observer(({message}) =>
    <li className="flex-row CommentView">
        <div className="CommentList__picture" />
        <p>{message}</p>
    </li>
);


export default inject('store')(observer(CommentList));
