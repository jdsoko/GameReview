import React from 'react';
import ReactDOM from 'react-dom';
import AddGame from './AddGame';


describe('AddGame component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddGame/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})