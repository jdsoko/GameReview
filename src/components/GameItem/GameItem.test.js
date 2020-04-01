import React from 'react';
import ReactDOM from 'react-dom';
import GameItem from './GameItem';


describe('GameItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GameItem/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})