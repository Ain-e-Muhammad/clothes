import React from 'react'
import {Route} from 'react-router-dom'

const SetRoute = ({path, component, render}) => {

    return(
            <Route exact path={path} component={component} render={render}/>
    )
}

export default SetRoute