import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [1, 2, 3, 4, 5]
        }
    }
    render() {
        const { arr } = this.state;
        const newArr = arr.map(item => item == 2 ? item = 1 : item)
        return (
            <div>
                <div>my-first-react-project</div>
                <div>{newArr}</div>
            </div>
        )
    }
}

export default App;