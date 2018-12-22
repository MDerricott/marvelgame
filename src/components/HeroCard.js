import React from "react"
import Card from '@material-ui/core/Card';

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
        <Card style={styles.card} onClick={props.handleBtnClick} > 
            
        

<img src={props.logo} alt="testing" id={props.id} />

            
        
        
        
        </Card>
    );
}

export default HeroCard
