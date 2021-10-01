const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor:color}} className='btn'>{text}</button>
    )
}

export default Button
//default if something isn't passed into header
Button.defaultProps = {
    color: 'black',
    text: 'click me!',
}