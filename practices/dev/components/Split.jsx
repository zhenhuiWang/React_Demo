import React from 'react';

class Contacts extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Contacts"></div>
        )
    }
}
class Chats extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Chats"></div>
        )
    }
}

class SplitPane extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="SplitPane">
                <div className="SplitPane-left">
                    <Contacts/>
                    {this.props.left}
                </div>
                <div className="SplitPane-right">
                    <Chats/>
                    {this.props.right}

                </div>
            </div>
        )
    }
}

class Split extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <SplitPane left={<Contacts />} right={<Chats />}/>
        )
    }
}

export default Split;
