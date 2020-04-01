import React from 'react';
import ReactDOM from 'react-dom';
import ReviewListPage from './ReviewListPage';


describe('ReviewListPage component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReviewListPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})