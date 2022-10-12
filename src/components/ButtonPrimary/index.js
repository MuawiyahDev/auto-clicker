import "./style.css";

function ButtonPrimary(props) {
  return (
    <button className={`button-primary ${props.type}`} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export default ButtonPrimary;
