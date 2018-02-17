import React from 'react';
import {observer} from 'mobx-react';

import './CommentInput.css';


const CommentInput = observer(({}) =>
    <section className="flex-row CommentInput">
        <div className="CommentInput__picture" />
        <textarea name="comment"></textarea>
    </section>
);


export default CommentInput;
