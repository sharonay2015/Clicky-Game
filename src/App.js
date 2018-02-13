import React, { Component } from "react";
import Beach from "./components/Beaches";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import beaches from "./beaches.json";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // Setting this.state.beaches to the beaches json array
  state = {
    beaches,
    beachesClicked: [0],
    count: 0,
    score: 0
  };
  // function to shuffle beach pictures
  shuffleBeach = id => {

    for (let i = beaches.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      var temp = beaches[i]
      beaches[i] = beaches[j]
      beaches[j] = temp

    } console.log("picture", id, "clicked");
    console.log(beaches[id]);
    //variable to keep track if a picture has been clicked
    //if picture has been clicked already then the 
    var flag = false
    if (this.state.beachesClicked && this.state.beachesClicked.length > 0) {
      for (let x = this.state.beachesClicked.length - 1; x > 0; x--) {
        if (this.state.beachesClicked[x] === id) {
          flag = true;
        }
      }
    }
    //if picture has been clicked already then the array is cleared and counter reset to 0, game is reset.
    if (flag === true) {
      this.setState({ beachesClicked: [] })
      console.log("lose");

      this.setState({ count: 0 });
    } 
    //if the picture has not been clicked then the score increases by 1 and the pictures are shuffled
    else {
      var c = this.state.count + 1;
      this.setState({ count: c});
      console.log("win" + this.state.count);

      if (c > this.state.score){
        console.log("high score");
        this.setState({ score: c}); 
      }  
      //pictures that have been clicked are stored in an array to track
      var beachesClickedModified = this.state.beachesClicked.slice()
      beachesClickedModified.push(id)
      this.setState({ beachesClicked: beachesClickedModified })

    }
  return beaches
  }

  // Map over this.state.beaches and render a Beach component for each beach object
  render() {
    return (
      <Wrapper>
        <Nav />  Count: {this.state.count}, Score: {this.state.score}
        <Title>Beaches List</Title>
       
        {this.state.beaches.map(beach => (
          <Beach
            Increment={this.handleIncrement}
            shuffle={this.shuffleBeach}
            id={beach.id}
            key={beach.id}
            name={beach.name}
            image={beach.image}
            location={beach.location}
          />
        ))}
       <Footer />
      </Wrapper>
    
    );
  }
}

export default App;
