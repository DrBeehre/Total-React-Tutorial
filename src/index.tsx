import * as React from 'react';
import * as ReactDom from 'react-dom';
import Header from './header';
import CustomDate from './custom-date'
import FruitLoops from './fruit-loops';

ReactDom.render(
    <div>
        <Header text="wicked" />
        <CustomDate />
        <FruitLoops />
    </div>,
    document.querySelector('#root')   
)