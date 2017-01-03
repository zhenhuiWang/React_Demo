import React from 'react';

class Increment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState((prevState,props) => ({
            counter: prevState.counter + props.increment
        }));
    }
    render(){
        return <h1>{this.state.counter}</h1>
    }
}
export default Increment;
