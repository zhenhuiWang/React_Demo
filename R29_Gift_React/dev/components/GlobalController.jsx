import React from 'react';
class GlobalController extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <div className="content-wrapper">
                    <div
                        className="choose person"
                        onClick={() => this.props.onClick1()}
                        >Person</div>
                    <div
                        className="choose trait"
                        onClick={() => this.props.onClick2()}
                        >Traits</div>
                    <div className="divider"></div>
                </div>
            </div>
        );
    }
}

export default GlobalController;
