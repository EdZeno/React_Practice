import React from 'react'
import ReactDom from 'react-dom'

class HelloUser extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                userName: 'me'
            }
    }
    
    render() {
        return (
            <div>
            Hello {this.state.userName}
            </div>
            )
    }
}

ReactDom.render(<HelloUser />, document.getElementById('root'))