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
import { nest } from 'recompose';

// import heros from './components/heros.json'


// const {images = [
//   hydra,
//   shield,
//   captainamerica,
//   deadpool,
//   fantasticfour,
//   greenlantern,
//   hulk,
//   ironman,
//   punisher,
//   spiderman,
//   superman,
//   suicidesquad
// ]}


class App extends Component {

state = {
  images: [
    {
      // id: 1,
      image: hydra,
      clicked: false
    },
    {
      // id: 2,
      image: shield,
      clicked: false
    },
    {
      // id: 3,
      image: captainamerica,
      clicked: false}
    ,
    {
      // id: 4,
      image: deadpool,
      clicked: false
    },
    {
      // id: 5,
      image: fantasticfour,
      clicked: false
    },
    {
      // id: 6,
      image: greenlantern,
      clicked: false
    },
    {
      // id: 7,
      image:  hulk,
      clicked: false
    },
    {
      // id: 8, 
      image: ironman,
      clicked: false
    },
    {
      // id: 9, 
      image: punisher,
      clicked: false
    },
    {
      // id: 10,
      image: spiderman,
      clicked: false
    },
    {
      // id: 11,
      image: superman,
      clicked: false
    },
    {
      // id: 12,
      image: suicidesquad,
      clicked: false
    }
  ],
score: 0,
topScore: 0
};
  



handleBtnClick = event => {
    console.log("clicked")

    const id = event.target.attributes.getNamedItem("id").value;
    console.log(id)
    const newState = { ...this.state };
    const checkClicked = newState.images[id].clicked;
    
    console.log(checkClicked)

    const newClicked = (checkClicked ?  this.clicked(newState) :  this.notClicked(newState, id))
    console.log(newClicked);
    this.setState(newState);
    console.log(newState)
}


clicked = (newState) => {
  console.log("you clicked this one");
  this.random(newState)
  
}

notClicked =(newState, id) => {
  
  newState.images[id].clicked = true;
  newState.score ++;
  this.random(newState);
}


random = (newState) => {
    for (let i = newState.images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newState.images[i], newState.images[j]] = [newState.images[j], newState.images[i]];
    }
    return newState;
};


  // newState.images.map((value) => {
  // console.log(newState.images.splice(Math.floor(Math.random() * 12) + 1,0, value))
  // })
 



  render() {
    return (
<div>



<Grid container  justify="center" style={{height:200}}>Headline</Grid>

      
       <Wrapper>
        Score: {this.state.score}
        Top Score: {this.state.score}
       

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


