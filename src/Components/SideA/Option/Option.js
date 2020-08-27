/** 
 * Option componente menu con botones
 * no redirecciona a ningun lado
*/
import React from 'react'
import Button from '@material-ui/core/Button'
class Option extends React.Component {
    render() { 
        return ( 
            <Button 
                variant="contained" 
                color="primary"
                style={
                  ({'margin': '15px 5px'  })
                }
                > {`${this.props.name}`}
            </Button>
            );
    }
}
 
export default Option;