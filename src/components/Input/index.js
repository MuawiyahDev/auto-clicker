import "./style.css";

function Input(props) {
  return (
    <input
      type={props.type}
      className="input"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
