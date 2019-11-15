import React from 'react'
import ReactDom from 'react-dom'

class HelloUser extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                userName: 'me'
            }
            this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    
    render() {
        return (
            <div>
            Hello {this.state.userName} <br />
            Change name:
            <input
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
            />
            </div>
            )
    }
}

ReactDom.render(<HelloUser />, document.getElementById('root'))