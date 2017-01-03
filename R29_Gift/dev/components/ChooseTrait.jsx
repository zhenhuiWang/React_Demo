import React from 'react';
import Button from './Button.jsx';
import Trait from './Trait.jsx';

class ChooseTrait extends React.Component {
    renderTrait() {
        return this.props.traits.map((trait, i) =>
            <Trait
                className={trait.checked ? 'active' : ''}
                name={trait.name}
                key={trait.id}
                onClick={() => this.props.clickTrait(trait, i)}


            />
        );
    }


    render() {
        return (
            <div className={this.props.name}>
                <div className="title">choose{3 - this.props.count}trait</div>
                <ul className="trait-list">
                    {this.renderTrait()}
                </ul>
                <Button
                    name={this.props.count === 3 ? 'btn-next' : 'btn-next disable'}
                    content="SEE GIFTS"
                    onClick={() => this.props.clickSeeGifts()}/>

            </div>
        );
    }
}
export default ChooseTrait;
