import React from 'react';

function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            warning!
        </div>
    )

}
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWaring: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            showWaring : !prevState.showWaring
        }));
    }

    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWaring}/>

                <button onClick={this.handleClick}> {this.state.showWaring? 'Hide' : 'Show'}</button>

            </div>
        )
    }
}

export default Page;
