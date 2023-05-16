import React, {Component} from 'react';
import './counter.scss'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'blue'
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1}, this.updateColor)
    }
    decrement = () => {
        this.setState({count: this.state.count - 1},  this.updateColor)
    }
    updateColor = () => {
        if(this.state.count > 5){
            this.setState({color: 'green'})
        } else if(this.state.count < -5){
            this.setState({color: 'red'})
        }else{
            this.setState({color: 'blue'})
        }
    }
    render() {
        return (
            <div>
                <div className="change-btn">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
              <p className="counter-value">Counter: <span style={{color: this.state.color}}>{this.state.count}</span></p>
            </div>
        );
    }
}

export default Counter;