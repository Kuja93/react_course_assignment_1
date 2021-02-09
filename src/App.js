import React from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import './App.css';

class App extends React.Component {

    state = {
        username: "Jonny"
    };

    onInputChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };
    render() {
        return (
            <div className="App">
                <UserInput
                    onInputChange={this.onInputChange}
                    currentName={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
            </div>
        );
    }
}


export default App;
