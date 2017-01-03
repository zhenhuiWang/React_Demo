import React from 'React';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(this.filterTextInput.value);
    }
    render() {
        return (
            <div className="bar">
                <input type="text"
                    placeholder="Enter your search terms"
                    value={this.props.filterText}
                    ref={input => {
                        this.filterTextInput = input;
                    }}
                    onChange={this.handleChange}
                    />
            </div>
        );
    }
}

class ProductList extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>
                    <img src={this.props.src}/>
                </a>
                <p>{this.props.text}</p>
            </li>
        );
    }
}

class SearchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productLists: [
                {
                    href: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg',
                    text: 'What You Need To Know About CSS Variables',

                },
                {
                    href: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg',
                    text: 'Freebie: 4 Great Looking Pricing Tables',

                },
                {
                    href: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg',
                    text: '20 Interesting JavaScript and CSS Libraries for February 2016',
                },
                {
                    href: 'http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png',
                    text: 'Quick Tip: The Easiest Way To Make Responsive Headers',
                },
                {
                    href: 'http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-100x100.png',
                    text: 'Learn SQL In 20 Minutes',
                },
                {
                    href: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
                    src: 'http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-100x100.png',
                    text: 'Creating Your First Desktop App With HTML, JS and Electron',
                },

            ],

            filterText: '',
        };
    }

    handleUserInput(filterText) {
        this.setState({
            filterText,
        });
    }


    render() {
        const productLists = this.state.productLists;
        const rows = productLists.map(productList => {
            if (productList.text.toUpperCase().includes(this.state.filterText.toUpperCase())) {
                return (
                    <ProductList key={productList.text}
                      href={productList.href}
                      src={productList.src}
                      text={productList.text} />
                );
            }
        });


        return (
            <form className="search">

                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}/>
                <ul>
                    {rows}
                </ul>
            </form>


        );
    }

}

export default SearchTable;
