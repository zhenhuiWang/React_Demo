import React from 'React';


class TabItem extends React.Component {

    render() {
        return (
            <div
            className={this.props.name}
            onClick={() => this.props.onClick()}>{this.props.content}</div>

        );
    }
}

const tabContents = ['home', 'projects', 'services', 'contact'];

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }
    renderTabItem() {
        return tabContents.map((tabContent, i) =>
            <TabItem key={tabContent}
            name={this.state.activeIndex === i ? 'active' : ''}
            content={tabContent}
            onClick={() => this.handleClick(i)}/>
        );
    }
    handleClick(i) {
        this.setState({
            activeIndex: i,
        });
    }

    render() {
        return (
            <div className="tablist">
                {this.renderTabItem()}
                <p>"You choose" <b>{tabContents[this.state.activeIndex]}</b></p>
            </div>
        );
    }
}
export default Tab;
