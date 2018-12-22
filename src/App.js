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

// import heros from './components/heros.json'





class App extends Component {

state = [
  hydra,
  shield,
  captainamerica,
  deadpool,
  fantasticfour,
  greenlantern,
  hulk,
  ironman,
  punisher,
  spiderman,
  superman,
  suicidesquad
]




  render() {
    return (
<div>



<Grid container  justify="center" style={{height:200}}>Headline</Grid>

      
       <Wrapper>
      
       {/* <img src={heros[0].src} alt="meaningful"/>
       <img src={"./components/svgs/hydra.svg"} alt="testing"/> */}
       

          <Grid container  justify="center">
            
            {this.state.map(value => (
              <Grid key={value} item xs={12} md={4} lg={3} spacing={8}>
                <HeroCard  logo={value}/>
                {console.log(value)}
                
              
              </Grid>
            ))}
            
          
        </Grid>
     
        </Wrapper>
 
     </div> 
    );
  }
}

export default App;


