import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import logo from './svgs/captainamerica.svg';


const styles = {
    card: {
     width: 200,
     height: 200,
     borderRadius: 100
    }
}

function HeroCard (props){
    
    return (
        <Card style={styles.card}> 
            
        

<img src={props.logo} alt="testing" />

            
        
        
        
        </Card>
    );
}

export default HeroCard
