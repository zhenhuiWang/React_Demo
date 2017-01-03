import React from 'react';
import Button from './Button.jsx';
import Person from './Person.jsx';

class ChoosePerson extends React.Component {


    renderPerson() {
        return this.props.persons.map((person, i) =>
            <Person className={ this.props.activeIndex === i ? 'person active' : 'person'}
                    name={person.name}
                    key={person.id}
                    onClick={() => this.props.choosePerson(person, i)}
            />
        );
    }

    render() {
        return (
            <div className={this.props.name}>
                <div className="choose-person">
                    {this.renderPerson()}

                </div>
                <Button
                    name={this.props.initialChoose ? 'btn-next' : 'btn-next disable'}
                    content="ONWARD"
                    onClick={() => this.props.clickOnward()}/>
            </div>
        );
    }
}
export default ChoosePerson;
