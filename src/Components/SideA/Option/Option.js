import React from 'react'
import Button from '@material-ui/core/Button'
class Option extends React.Component {
    render() { 
        return ( 
            <Button 
                variant="contained" 
                color="primary"> {`${this.props.name}`}
            </Button>
            );
    }
}
 
export default Option;