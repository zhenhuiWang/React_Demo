import React from 'react';
import Button from './Button.jsx';
import ChoosePerson from './ChoosePerson.jsx';
import ChooseTrait from './ChooseTrait.jsx';
import GiftResults from './GiftResults.jsx';
import GlobalController from './GlobalController.jsx';

const URL = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';
let jsonData;
fetch(URL).then(response => response.json())
          .then(data => {
              jsonData = data;
          });

class HolidayGift extends React.Component {
    constructor() {
        super();
        this.state = {
            showControl: false,
            activeFrame: 0,
            persons: [{
                id: 0,
                name: 'mom',
                choose: false,
            }, {
                id: 1,
                name: 'dad',
                choose: false,

            }, {
                id: 2,
                name: 's.o.',
                choose: false,

            }, {
                id: 3,
                name: 'bff',
                choose: false,

            }, {
                id: 4,
                name: 'work spouse',
                choose: false,

            }, {
                id: 5,
                name: 'surprise me',
                choose: false,
            }],
            initialChoose: false,
            personArr: [],
            activeIndex: NaN,
            traits: [{
                id: 0,
                name: 'chill',
                checked: false,
            }, {
                id: 1,
                name: 'chic aesthete',
                checked: false,
            }, {
                id: 2,
                name: 'EMO',
                checked: false,
            }, {
                id: 3,
                name: 'Type a',
                checked: false,
            }, {
                id: 4,
                name: 'EARLY ADOPTER',
                checked: false,
            }, {
                id: 5,
                name: 'FANCY',
                checked: false,
            }],
            count: 0,
            traitArr: [],
            needData: null,
            replay: false,
        };
    }

    clickStartBtn() {
        this.setState({
            activeFrame: 1,
        });
    }

    choosePerson(person, i) {
        this.setState({
            activeIndex: i,
            initialChoose: true,
        });
    }


    clickOnward() {
        if (!this.state.initialChoose) {
            return false;
        }

        this.state.persons.map((person, i) => {
            person.choose = this.state.activeIndex === i;

            if (person.choose) {
                this.state.personArr.length = 0;
                this.state.personArr.push(person.name.toUpperCase());
            }

            return this.state.personArr;
        });
        this.setState({
            activeFrame: 2,
            personArr: this.state.personArr,

        });

        if (this.state.activeFrame === 1 && this.state.showControl && !this.state.replay) {
            this.setState({
                activeFrame: 3,
            });
        }

        if (this.state.personArr[0] === 'SURPRISE ME') {
            const arr = ['CHILL', 'CHIC AESTHETE', 'EMO', 'TYPE A', 'EARLY ADOPTER', 'FANCY'];

            arr.random = function() {
                const index = parseInt(Math.random() * this.length, 10);
                const item = this.splice(index, 1)[0];

                return item;
            };
            let randomTraitArr = [];
            this.state.traitArr.length = 0;
            for (let i = 0; i < 3; i++) {
                randomTraitArr = this.state.traitArr.push(arr.random());
            }
            const randomNumber = parseInt(Math.random() * 5, 10);
            const randomPersonName = this.state.persons[randomNumber].name.toUpperCase();
            const randomPersonArr = this.state.personArr.push(randomPersonName);
            this.setState({
                activeFrame: 3,
                showControl: true,
                personArr: this.state.personArr.slice(1),
                traitArr: this.state.traitArr,
                count: 3,
            });
        }
        console.log(this.state.personArr);
        console.log(this.state.traitArr);
        this.state.traits.map((trait, i) => {
            trait.checked = false;

            if (this.state.traitArr.includes(trait.name.toUpperCase())) {
                trait.checked = true;
            }

            return this.state.traits;
        });
        this.state.persons.map((person, i) => {
            if (this.state.personArr.slice(1).includes(person.name.toUpperCase())) {
                person.choose = true;
                this.setState({
                    activeIndex: person.id,
                });
            }

            return this.state.persons;
        });
    }

    clickTrait(trait, i) {
        const count = this.state.count;
        if (count === 3 && !trait.checked) {
            console.log('disable click', count);

            return false;
        }
        trait.checked = !trait.checked;
        if (trait.checked) {
            this.setState({
                count: count + 1,
            });
            console.log(count, trait.checked);
        } else {
            this.setState({
                count: count - 1,
            });
            console.log(count, trait.checked);
        }
    }


    clickSeeGifts() {
        if (this.state.count < 3) {
            return false;
        }
        this.state.traitArr.length = 0;
        this.state.traits.map((trait, i) => {
            if (trait.checked) {
                this.state.traitArr.push(trait.name.toUpperCase());
            }

            return this.state.traitArr;
        });

        this.setState({
            activeFrame: 3,
            showControl: true,
            traitArr: this.state.traitArr,
        });
        console.log(this.state.traitArr);
    }


    clickPersonControl() {
        this.setState({
            activeFrame: 1,
            replay: false,
        });

        if (this.state.activeFrame === 1) {
            this.setState({
                activeFrame: 3,
            });
        }
    }

    clickTraitControl() {
        this.setState({
            activeFrame: 2,
        });
        if (this.state.activeFrame === 2) {
            this.setState({
                activeFrame: 3,
            });
        }
    }

    playAgain() {
        const newPersons = [...this.state.persons];
        const newTraits = [...this.state.traits];
        this.state.traitArr.length = 0;

        newPersons.forEach(person => {
            if (person.choose) {
                person.choose = false;
            }
        });
        newTraits.forEach(trait => {
            if (trait.checked) {
                trait.checked = false;
            }
        });

        this.setState({
            showControl: false,
            activeFrame: 1,
            persons: newPersons,
            activeIndex: NaN,
            traits: newTraits,
            initialChoose: false,
            count: 0,
            replay: true,
        });
    }

    renderResluts() {
        const initailData = jsonData.items[0].fields.jsonFull.feed.entry;
        const newData = initailData.filter(obj =>
             this.state.personArr.includes(obj.gsx$person.$t.toUpperCase())
             &&
             this.state.traitArr.includes(obj.gsx$trait.$t.toUpperCase())
        );
        console.log(initailData, this.state.personArr, this.state.traitArr, newData, 'results arr');

        return newData;
    }


    renderFrame() {
        if (this.state.activeFrame === 0) {
            return <Button
                    name='btn-start'
                    content="begin"
                    onClick={() => this.clickStartBtn()}/>;
        } else if (this.state.activeFrame === 1) {
            return <ChoosePerson
                    choosePerson={(person, i) => this.choosePerson(person, i)}
                    clickOnward={() => this.clickOnward()}
                    name= 'person-container active'
                    persons={this.state.persons}
                    activeIndex={this.state.activeIndex}
                    initialChoose={this.state.initialChoose}
                    />;
        } else if (this.state.activeFrame === 2) {
            return <ChooseTrait
                    clickTrait={(trait, i) => this.clickTrait(trait, i)}
                    clickSeeGifts={() => this.clickSeeGifts()}
                    count={this.state.count}
                    traits={this.state.traits}
                    name='choose-trait active'/>;
        } else if (this.state.activeFrame === 3) {
            return <GiftResults
                    name='gifts-container active'
                    renderResluts={() => this.renderResluts()}
                    replay={() => this.playAgain()}
                    />;
        }
    }

    render() {
        return (
            <div>
                {this.renderFrame()}
                <GlobalController
                    name={this.state.showControl ? 'global-controller active' : 'global-controller'}
                    onClick1={() => this.clickPersonControl()}
                    onClick2={() => this.clickTraitControl()}

                    />
            </div>
        );
    }

}
export default HolidayGift;
