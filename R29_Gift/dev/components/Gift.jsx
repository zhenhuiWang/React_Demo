import React from 'react';

class Gift extends React.Component {
    render() {
        return (
            <li className="product">
                <a href={this.props.href} target="_blank" className="product-container">
                    <div className="left">
                        <img src={this.props.src}/>
                    </div>
                    <div className="right">
                        <span className="name">{this.props.name}</span>
                        <span className="desc">{this.props.desc}</span>
                        <span className="price">{this.props.price}</span>
                    </div>
                </a>

            </li>
        );
    }
}

export default Gift;
