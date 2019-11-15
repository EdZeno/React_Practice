import React from 'react'
import ReactDom from 'react-dom'

class FriendContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Tyler",
            friends: ["John", "James", "Tom"]
        }
    }
    
    render() {
        return(
            <div>
            <h3> Name: {this.state.name} </h3>
            <ShowList names={this.state.friends} />
            </div>
            )
    }
    
    class ShowList extends React.Component {
        render() {
            return(
                <div>
                <h3> Friends </h3>
                <ul>
                {this.props.names.map((friend) => <li>{friend}</li>)}
                </ul>
                </div>
                )
        }
    }
    
}

ReactDom.render(<FriendContainer />, document.getElementById('root'))