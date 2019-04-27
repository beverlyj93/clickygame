import React from 'react';
import Wrapper from './components/Wrapper'
import ArmyCard from './components/ArmyCard'
import Score from './components/Score'
import Header from './components/Header'
import army from './army.json'

class App extends React.Component {
  state = {
    army,
    clickedElements: [],
    score: 0
  }

  render() {
    return (
      <div>
        <Header 
          header="CLICKY GAME - ARMY STYLE"
          body="Try to click each image only once. Click all 12 and you win!"
        />
        <Score>SCORE: {this.state.score}</Score>
        <Wrapper>
          {this.state.army.map(elem => <ArmyCard
            clickEvent={this.clickEvent}
            image={elem.image}
            key={elem.id}
            id={elem.id}
          />)}

          <p>P.S. - Shawn Holcomb is going to make fun of my CSS skills.</p>
        </Wrapper>
      </div>
    )
  }

  clickEvent = event => {
    const currentElement = event.target.alt
    if (this.state.clickedElements.indexOf(currentElement) > -1) {
      this.setState({
        army: this.state.army.sort(() => {
          return 0.5 - Math.random();
        }),
        clickedElements: [],
        score: 0
      });
      alert("Wow, you lost. Would you like to play again?");
    }
    else {
      this.setState({
        army: this.state.army.sort(() => {
          return 0.5 - Math.random();
        }),
        clickedElements: this.state.clickedElements.concat(currentElement),
        score: this.state.score + 1
      },
        () => {
          if (this.state.score === 12) {
            alert("Wow, can't believe you actually won...");
            this.setState({
              army: this.state.army.sort(() => {
                return 0.5 - Math.random();
              }),
              clickedElements: [],
              score: 0
            });
          }
        })
    }
  }
}

export default App;
