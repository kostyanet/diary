import React              from 'react';
import {observer} from 'mobx-react';

import CommentInput from './CommentInput/CommentInput';
import CommentList  from './CommentList/CommentList';
import './CommentBoard.css';


// @inject('store') @observer
// export default class CommentBoard extends React.Component {
//
//     // handleSubmit = (creds, keepLogged) => {
//     //     this.props.store.views.loginView.login(creds, keepLogged);
//     // };
//
//
//     render() {
//         // const store = this.props.store.views.loginView;
//
//         return (
//             <section className="panel CommentBoard">
//                 <h2 className="panel__header">Items</h2>
//
//                 <div className="CommentBoard__main">
//                     <CommentList />
//                     <CommentInput />
//                 </div>
//             </section>
//         );
//     }
//
// }


const CommentBoard = observer(({comments, index}) => (
    <section className="panel CommentBoard">
        <h2 className="panel__header">Comments #{index}</h2>

        <div className="CommentBoard__main">
            <CommentList comments={comments}/>
            <CommentInput />
        </div>
    </section>
));

export default CommentBoard
