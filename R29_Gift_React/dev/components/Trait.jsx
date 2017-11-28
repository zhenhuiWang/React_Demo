import React from 'react';

class Trait extends React.Component {
    render() {
        return (
            <li className={this.props.className}>
                <div className="flag-box" onClick={() => this.props.onClick()}>
                    <div className="circle-container">
                        <div className="circle"></div>
                    </div>
                    <span className="trait">{this.props.name}</span>
                </div>
            </li>
        );
    }
}

export default Trait;
