import React        from 'react';

import CommentBoard from '../CommentBoard/CommentBoard';
import ItemBoard    from '../ItemBoard/ItemBoard';
import './MainBoard.css';


const MainBoard = () => (
    <main className="MainBoard">
        <div className="MainBoard__layout">
            <ItemBoard />
            <CommentBoard />
        </div>
    </main>
);


export default MainBoard;
