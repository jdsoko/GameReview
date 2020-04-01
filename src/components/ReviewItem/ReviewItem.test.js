import React from 'react';
import ReactDOM from 'react-dom';
import ReviewItem from './ReviewItem';


describe('ReviewItem component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReviewItem/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})