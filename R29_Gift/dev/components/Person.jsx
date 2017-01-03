import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div className={this.props.className}
                 onClick={() => this.props.onClick()}>{this.props.name}</div>
        );
    }
}

export default Person;
