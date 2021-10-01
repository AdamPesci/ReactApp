// use es7 react.redux extension for boiler plate functions
// used rafce for creation of arrow function component

import React from "react"
import PropTypes from 'prop-types'
import Button from './Button'

//dont need the import that comes with
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add'/>
        </header>
    )
}

//default if something isn't passed into header
Header.defaultProps = {
    title: 'Task Tracker',
}

// define proptype - will produce error if header title is not a string
Header.propTypes = {
    title: PropTypes.string,
}


/**
    CSS in JS: 

    const headingStyle = {
        color: 'red', backgroundColor: 'black'
    }

    usage ex: <h1 style={headingStyle}></h1>
    also, can style elements inline by doing something similar
    eg : <h1 style={{color: 'red', backgroundColor: 'black}}
 */

export default Header