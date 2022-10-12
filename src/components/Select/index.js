import "./style.css";

function Select(props) {
  return (
    <select className="select" onChange={props.onChange}>
      {props.options.map((option, index) => {
        return (
          <option
            key={index}
            value={option.value}
            selected={option.selected}
            disabled={option.disabled}
            hidden={option.hidden}
          >
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
