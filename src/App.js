import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import HeroCard from './components/HeroCard';
import logo from './components/svgs/hydra.svg';


// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   }
// });





class App extends Component {
  render() {
    return (


//       <img src={logo} alt="testing" />



      <Grid container  spacing={16} >
        <Grid item xs={12}>
          <Grid container  justify="center" spacing={8}>
            {[0, 1, 2,3,4].map(value => (
              <Grid key={value} item>
                <HeroCard  logo={logo}/>
                
              
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
 
      
    );
  }
}

export default App;


