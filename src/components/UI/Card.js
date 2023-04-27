import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className;//it will apply all class props on to the children

    return (
        <div className={classes}>{props.children}</div>
    );
}
export default Card;