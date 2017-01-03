import React from 'React';

class ListItem extends React.Component {
    render() {
        return (
            <li
                className={this.props.name}
                onClick={() => this.props.onClick()}>
                {this.props.job}
                <span>${this.props.price}</span>

            </li>
        );
    }
}

class Services extends React.Component {
    constructor() {
        super();
        this.state = {
            listItems : [
                {
                    job:'Web Development',
                    price: 300,
                    changeColor: true,
                },
                {
                    job:'Design',
                    price: 400,
                    changeColor: false,

                },
                {
                    job:'Integration',
                    price: 250,
                    changeColor: false,

                },
                {
                    job:'Training',
                    price: 220,
                    changeColor: false,

                },

            ],

            total: 300,

        };
    }
    renderListItem() {
        const listItems = this.state.listItems;

        return listItems.map((listItem, i) =>
             <ListItem
                key={listItem.job}
                name={listItem.changeColor ? 'active' : ''}
                job={listItem.job}
                price={listItem.price}
                onClick={() => this.handleClick(i)}/>
        );
    }

    handleClick(i) {
        const listItems = this.state.listItems;
        let total = 0;
        listItems[i].changeColor = !listItems[i].changeColor;
        listItems.forEach((listItem, i) => {
            if (listItem.changeColor) {
                total = total + listItem.price;
            }
        });
        this.setState({
            listItems,
            total,
        });
    }


    render() {
        return (
            <form className="services">
                <ul>{this.renderListItem()}</ul>
                <div className="total">
                    Total <span>${this.state.total}</span>
                </div>

            </form>
        );
    }
}
export default Services;
