import React from 'react';


function ListItems(props){
    return
    <li>{props.value}</li>
}
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map(
        number => <ListItems key={number.toString()} value={number}/>
   );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;
