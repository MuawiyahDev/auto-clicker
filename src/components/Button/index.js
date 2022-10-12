import "./style.css";

function Button(props) {
  return (
    <a href={props.url} className="button" target={props.target}>
      {props.buttonText}
    </a>
  );
}

export default Button;
