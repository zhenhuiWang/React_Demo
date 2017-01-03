import React from 'react';

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if(Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounder = Math.round(output * 1000) / 1000;

    return rounder.toString();
}
class BoilingVerdict extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let boil = null;

        if(this.props.celsius >= 100){
            boil = <p> The water would boil.</p>
        }else{
            boil = <p> The water would not boil.</p>
        }

        return(
            <div>
                {boil}
            </div>
        )
    }
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        this.props.onChange(e.target.value);
   }

    render(){
        const value = this.props.value;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value} onChange={this.handleChange}/>

            </fieldset>
        );
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "",
            scale : 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

    }

    handleCelsiusChange(value){
        this.setState({
            scale: 'c',
            value
        })
    }

    handleFahrenheitChange(value) {
       this.setState({scale: 'f', value});
    }

    render(){
        const value = this.state.value;
        const scale = this.state.scale;

        const celsius = scale === "f" ? tryConvert(value, toCelsius) : value;
        const fathrenheit = scale ==="c" ? tryConvert(value, toFahrenheit) :value;
        return(
            <div>
                <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" value={fathrenheit} onChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
export default Calculator;
