const Button = (props) => {
    return(<button class={props.class} onClick={props.onClick}>{props.text}</button>)
}

export default Button