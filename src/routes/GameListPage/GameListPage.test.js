import React from 'react';
import ReactDOM from 'react-dom';
import GameListPage from './GameListPage';


describe('GameListPage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GameListPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})