import React        from 'react';
import {inject, observer} from 'mobx-react';

import CommentBoard from '../CommentBoard/CommentBoard';
import ItemBoard    from '../ItemBoard/ItemBoard';
import './MainBoard.css';


// const MainBoard = () => (
//     <main className="MainBoard">
//         <div className="flex-row MainBoard__layout">
//             <ItemBoard />
//             <CommentBoard />
//         </div>
//     </main>
// );

const MainBoard = inject('store')(observer(({store}) => (
    <main className="MainBoard">
        <div className="MainBoard__layout">
            <ItemBoard />
            <CommentBoard comments={store.items[1].comments} index={2}/>
        </div>
    </main>
)));


export default MainBoard;
