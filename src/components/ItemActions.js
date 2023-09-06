const ItemActions = ({onClick, text, className}) => {
    return (
        <span className={className} onClick={onClick}>
                {text}
              </span>
    );
}

export default ItemActions;