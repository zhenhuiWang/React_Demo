import React from 'react';
import Button from './Button.jsx';
import Gift from './Gift.jsx';


class GiftResults extends React.Component {

    playAgain() {
        this.props.replay();
    }

    renderGifts() {
        const results = this.props.renderResluts();
        
        return results.map((product, i) =>
            <Gift
                href={product.gsx$clickouturl.$t}
                src={product.gsx$image.$t}
                name={product.gsx$itemname.$t}
                desc={product.gsx$description70charactersmax.$t}
                price={product.gsx$price.$t}
                key={product.gsx$description70charactersmax.$t}
                />

        );
    }

    render() {
        return (
            <div className={this.props.name}>
                <div className="gifts">
                    <ul className="product-list">{this.renderGifts()}</ul>
                    <Button
                        name="play-again"
                        content="PLAY AGAIN"
                        onClick={() => this.playAgain()}/>
                </div>


            </div>

        );
    }
}
export default GiftResults;
