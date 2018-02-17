import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import MainBoard from './components/MainBoard/MainBoard';
import mainStore from './stores/main.store';
import './App.css';


useStrict(true);


const App = () => (
    <Provider store={mainStore}>
        <div className="flex-row">
            <aside className="sidebar">
                <h1 className="sidebar__header">Diary app</h1>
                <p className="sidebar__description">Comment with no sense</p>
            </aside>

            <MainBoard />
        </div>
    </Provider>
);


export default App;
