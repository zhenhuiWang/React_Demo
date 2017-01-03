import React from 'React';

class InputBox extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
                onClick={this.props.onClick}/>

        );
    }
}

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            text: 'edit me',
        };
    }


    handleClick(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            showInput : !prevState.showInput,
        }));
    }

    hidden(e) {
        this.setState({
            showInput : false,
        });
    }

    stopPro(e) {
        e.stopPropagation();
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        });
    }


    render() {
        return (
            <div className='edit-container'
                onClick={this.hidden.bind(this)}>
                <InputBox
                    value = {this.state.text}
                    show = {this.state.showInput}
                    onChange = {this.handleChange.bind(this)}
                    onClick = {this.stopPro.bind(this)}
                    />

                <div onClick={this.handleClick.bind(this)}>{this.state.text}</div>

            </div>

        );
    }



}
export default Edit;
