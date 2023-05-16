import React, {Component} from 'react';
import './counter.scss'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <div className="change-btn">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
              <p className="counter-value">Counter: {this.state.count}</p>
            </div>
        );
    }
}

export default Counter;