import React from 'React';

class Button extends React.Component {
    render() {
        return (
            <button onClick={() => this.props.onClick()}>{this.props.name}</button>
        );
    }
}
const imageItems = [
    {
        src: './images/A0.png',
        name: 'A0',
        type: ['classA'],
    },
    {
        src: './images/A1.png',
        name: 'A1',
        type: ['classA'],
    },
    {
        src: './images/A2.png',
        name: 'A2',
        type: ['classA'],
    },
    {
        src: './images/A3.png',
        name: 'A3',
        type: ['classA'],

    },
    {
        src: './images/A4.png',
        name: 'A4',
        type: ['classA'],

    },
    {
        src: './images/A5.png',
        name: 'A5',
        type: ['classA'],

    },
    {
        src: './images/A6.png',
        name: 'A6',
        type: ['classA'],

    },
    {
        src: './images/B0.png',
        name: 'B0',
        type: ['classB'],
    },
    {
        src: './images/B1.png',
        name: 'B1',
        type: ['classB'],
    },
    {
        src: './images/B2.png',
        name: 'B2',
        type: ['classB'],
    },
    {
        src: './images/B3.png',
        name: 'B3',
        type: ['classB'],
    },
    {
        src: './images/B4.png',
        name: 'B4',
        type: ['classB'],
    },
    {
        src: './images/B5.png',
        name: 'B5',
        type: ['classB'],
    },
    {
        src: './images/B6.png',
        name: 'B6',
        type: ['classB'],
    },
    {
        src: './images/B7.png',
        name: 'B7',
        type: ['classB'],
    },
    {
        src: './images/B8.png',
        name: 'B8',
        type: ['classB'],
    },
    {
        src: './images/C0.png',
        name: 'C0',
        type: ['classC'],
    },
    {
        src: './images/C1.png',
        name: 'C1',
        type: ['classC'],
    },
    {
        src: './images/C2.png',
        name: 'C2',
        type: ['classC'],
    },
    {
        src: './images/C3.png',
        name: 'C3',
        type: ['classC'],
    },
    {
        src: './images/C4.png',
        name: 'C4',
        type: ['classC'],
    },
    {
        src: './images/C5.png',
        name: 'C5',
        type: ['classC'],
    },
    {
        src: './images/C6.png',
        name: 'C6',
        type: ['classC'],
    },
    {
        src: './images/C7.png',
        name: 'C7',
        type: ['classC'],
    },
    {
        src: './images/C8.png',
        name: 'C8',
        type: ['classC'],
    },
    {
        src: './images/C9.png',
        name: 'C9',
        type: ['classC'],
    },
    {
        src: './images/C10.png',
        name: 'C10',
        type: ['classC'],
    },
];

class SelectItem extends React.Component {
    constructor() {
        super();
        this.state = {

            buttonNames: [
                {
                    name: 'classA',
                    types: ['classA'],

                },
                {
                    name: 'classB',
                    types: ['classB'],
                },
                {
                    name: 'classC',
                    types: ['classC'],
                },
                {
                    name: 'classA+B',
                    types: ['classA', 'classB'],
                },
                {
                    name: 'classB+C',
                    types: ['classB', 'classC'],
                },
                {
                    name: 'classA+C',
                    types: ['classA', 'classC'],
                },
                {
                    name: 'classA+B+C',
                    types: ['classA', 'classB', 'classC'],
                },
            ],
            showImages: imageItems,
        };
    }


    renderButton() {
        const buttonNames = this.state.buttonNames;

        return buttonNames.map((buttonName, i) =>
            <Button
                key={buttonName.name}
                name={buttonName.name}
                onClick={() => this.handleClick(buttonName.types)}/>
        );
    }

    handleClick(types) {
        const result = imageItems.filter((imageItem, i) =>
            imageItem.type.every(item => {
                if (types.includes(item)) {
                    return item;
                }

                return null;
            })
        );

        function random() {
            return Math.random() > 0.5 ? 1 : -1;
        }

        result.sort(random);


        this.setState({
            showImages: result,
        });
    }


    render() {
        const imageItem = this.state.showImages.map((showImage, i) =>
             <img key={showImage.name} src={showImage.src} />
        );

        return (
            <div className="container">
                {this.renderButton()}
                <div className="show-items">
                    {imageItem}
                </div>

            </div>
        );
    }

}

export default SelectItem;
