import React from 'react';

import Welcome from './Welcome.jsx';
import Comment from './Comment.jsx';
import Clock from './Clock.jsx';
import Increment from './Increment.jsx';
import Toggle from './Toggle.jsx';
import LoginControl from './LoginControl.jsx';
import Page from './Page.jsx';
import Mailbox from './Mailbox.jsx';
import NumberList from './NumberList.jsx';
import Calculator from './Calculator.jsx';
import WelcomeDialog from './WelcomeDialog.jsx';
import Split from './Split.jsx';
import Game from './Game.jsx';
import FilterableProductTable from './FilterableProductTable.jsx';

import Tab from './Tab.jsx';
import Edit from './Edit.jsx';
import Services from './Services.jsx';
import SearchTable from './SearchTable.jsx';
import SelectItem from './SelectItem.jsx';

const comment = {
    text:'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};
const increment = {
    increment: 1,
};
const messages = ['react', 'react2', 'react3'];
const numbers = [1, 2, 3, 4];
const celsius = 100;
const PRODUCTS = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked:true,
        name:'Football',

    },
    {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked:true,
        name:'Baseball',

    },
    {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked:false,
        name:'Baseketball',

    },
    {
        category: 'Electronics',
        price: '$99.99',
        stocked:true,
        name:'iPod Touch',

    },
    {
        category: 'Electronics',
        price: '$399.99',
        stocked:false,
        name:'iPhone5',

    },
    {
        category: 'Electronics',
        price: '$199.99',
        stocked:true,
        name:'Nexus 7',

    }


];

class App extends React.Component {

    render() {
        return (
            <div>
                <Welcome name="Janet"/>
                <Comment author={comment.author} text={comment.text} />
                <Toggle/>
                <LoginControl />
                <Page />
                <Mailbox unreadMessages={messages}/>
                <Calculator />
                <WelcomeDialog />
                <Split />
                <Game />
                <FilterableProductTable products={PRODUCTS} />
                <Tab />
                <Edit />
                <Services />
                <SearchTable />
                <SelectItem />

            </div>
        );
    }
}

export default App;
