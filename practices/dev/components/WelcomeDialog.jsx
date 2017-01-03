import React from 'React';

class FancyBorder extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className={'FancyBorder-' + this.props.color}>

                {this.props.children}
            </div>
        );
    }
}

class Dialog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {this.props.title}
                </h1>
                <p className="Dialog-message">
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        )
    }
}
class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

        this.state = {
            login: ""
        }
    }

    handleChange(e){
        this.setState({
            login: e.target.value
        })
    }

    handleSignUp(){
        alert(`Welcome aboard,${this.state.login}`);
    }

    render(){
        return(
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign me up</button>

            </Dialog>
        )

    }
}
class WelcomeDialog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Dialog title = "Welcome"  message="Thank you for visiting our spacecraft!"/>
        );
    }
}

export default SignUpDialog;
