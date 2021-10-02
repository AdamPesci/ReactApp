import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

export default Button
//default props
Button.defaultProps = {
    color: 'black',
    text: 'click me!',
}
//default proptypes
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}