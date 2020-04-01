import React from 'react';
import ReactDOM from 'react-dom';
import GameStarRating from './GameStarRating';


describe('GameStarRating component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GameStarRating/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})