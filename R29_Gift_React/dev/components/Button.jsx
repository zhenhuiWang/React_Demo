import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div className={this.props.name} onClick={() => this.props.onClick()}>
                {this.props.content}
            </div>
        );
    }
}

export default Button;
