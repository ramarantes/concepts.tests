import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import Counter from './Counter'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('simulate counter add after click', () => {
    //const mockCallBack = jest.fn();
    const div = document.createElement('div');

    const component = shallow(<Counter />);

    const button = component.find('button');
    const label = component.find('p');

    expect(label.text()).toEqual('You clicked 0 times');
    
     button.simulate('click');
              
    const label2 = component.find('p');

     expect(label2.text()).toEqual('You clicked 1 times');
    
    // act(() => {button.dispatchEvent(new MouseEvent('click',{bubbles:true}))});
    // expect(label.textContent).toBe('You clicked 1 times');
    
    // act(() => {button.dispatchEvent(new MouseEvent('click',{bubbles:true}))});
    // expect(label.textContent).toBe('You clicked 2 times');
})