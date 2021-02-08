import React from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import './App.css';

class App extends React.Component {

    state = {
        paragraph1: "placeholder1",
        paragraph2: "placeholder2"
    }

  onInputChange = (event) => {
    console.log(event.target.value)

    this.setState({
      paragraph1: event.target.value,
      paragraph2: event.target.value
    })
  };

  render() {
    return (
        <div className="App">
          <UserInput
              onInputChange={this.onInputChange}
          />
          <UserOutput
              paragraph1={this.state.paragraph1}
              paragraph2={this.state.paragraph2}
          />
        </div>
    );
  }
}


export default App;
