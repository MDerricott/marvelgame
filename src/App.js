import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Wrapper from './components/Wrapper';
import HeroCard from './components/HeroCard';
import hydra from './components/svgs/hydra.svg';
import shield from './components/svgs/shield.svg';
import captainamerica from './components/svgs/captainamerica.svg';
import deadpool from './components/svgs/deadpool.svg';
import fantasticfour from './components/svgs/fantasticfour.svg';
import greenlantern from './components/svgs/greenlantern.svg';
import hulk from './components/svgs/hulk.svg';
import ironman from './components/svgs/ironman.svg';
import punisher from './components/svgs/punisher.svg';
import spiderman from './components/svgs/spiderman.svg';
import superman from './components/svgs/superman.svg';
import suicidesquad from './components/svgs/suicidesquad.svg';



class App extends Component {

state = {
  images: [
    {
      image: hydra,
      clicked: false
    },
    {
      image: shield,
      clicked: false
    },
    {
      image: captainamerica,
      clicked: false}
    ,
    {
      image: deadpool,
      clicked: false
    },
    {
      image: fantasticfour,
      clicked: false
    },
    {
      image: greenlantern,
      clicked: false
    },
    {
      image:  hulk,
      clicked: false
    },
    { 
      image: ironman,
      clicked: false
    },
    {
      image: punisher,
      clicked: false
    },
    {
      image: spiderman,
      clicked: false
    },
    {
      image: superman,
      clicked: false
    },
    {
      image: suicidesquad,
      clicked: false
    }
  ],
score: 0,
topScore: 0
};
  
//Handles the Click on the SVGs
handleBtnClick = event => {
    const id = event.target.attributes.getNamedItem("id").value;
    const newState = { ...this.state };
    const checkClicked = newState.images[id].clicked;
    const newClicked = (checkClicked ?  this.clicked(newState) :  this.notClicked(newState, id))
  
    this.setState(newState);
}


clicked = (newState) => {
  console.log("new top score " + (newState.score > newState.topScore ? newState.score : newState.topScore) )
 

  newState.images.map(value =>{
    value.clicked = false
  });
  newState.topScore = newState.topScore < newState.score ? newState.score : newState.topScore

  this.random(newState)
  newState.score = 0;
}

topScorer = (newState) => {
  return (newState.topScore < newState.score ? newState.score : newState.topScore)
}
notClicked =(newState, id) => {
  
    newState.images[id].clicked = true;

    this.scorer(newState);

  this.random(newState);

  console.log("score " + newState.score);
}

scorer = (newState) => {
  newState.score ++
 
}




random = (newState) => {
    for (let i = newState.images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newState.images[i], newState.images[j]] = [newState.images[j], newState.images[i]];
    }
    return newState;
};

  render() {
    return (
<div>



<Grid container className="header" justify="center" style={{height:200}} />


<Grid container justify="center" style={{height:50}}> 
<Grid container justify="center" className="score" style={{height:50}}> Do you remember which logo you clicked? If not, your score will restart. Can you beat the top score? </Grid>

      <Grid item className="score" xs={12} md={6} > <strong>Your Score:</strong> {this.state.score}</Grid>
      <Grid item className="score" xs={12} md={6} > <strong>Top Score:</strong> {this.state.topScore}</Grid>
</Grid>

<Grid container justify="center" style={{height:50}} /> 
       <Wrapper>
        
       

          <Grid container  justify="center" spacing={8}>

 
            {this.state.images.map((value, index) => (
              <Grid key={index} item xs={6} md={4} lg={3}>
                <HeroCard id={index} logo={value.image} handleBtnClick={this.handleBtnClick}/>
              
              </Grid>
            ))}
            
          
        </Grid>
     
        </Wrapper>
 
     </div> 
    );
  }
}

export default App;


