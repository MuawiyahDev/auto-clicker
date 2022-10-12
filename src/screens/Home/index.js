import { useState } from "react";
import "./style.css";
import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";
import Input from "../../components/Input";
import Select from "../../components/Select";
import ButtonPrimary from "../../components/ButtonPrimary";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const mouseButtonOptions = [
    {
      value: "",
      name: "Mouse Button",
      selected: true,
      disabled: true,
      hidden: true,
    },
    {
      value: "Left Click",
      name: "Left Click",
      selected: false,
      disabled: false,
      hidden: false,
    },
    {
      value: "Right Click",
      name: "Right Click",
      selected: false,
      disabled: false,
      hidden: false,
    },
  ];

  const [disabled, setDisabled] = useState(true);
  const [number, setNumber] = useState(0);
  const [clickRepeat, setClickRepeat] = useState("");
  const [mouseButton, setMouseButton] = useState("");

  // When someone clicks on -
  const handleSubtracting = (event) => {
    event.preventDefault();

    // Validating disabled state
    if (!disabled) {
      if (number != 0 || number > 0) {
        if (event.type === "click" && mouseButton == "Left Click") {
          setNumber(number - Number(clickRepeat));
        }

        if (event.type === "contextmenu" && mouseButton == "Right Click") {
          setNumber(number - Number(clickRepeat));
        }
      }
    }
  };

  // When someone clicks on +
  const handleAdding = (event) => {
    event.preventDefault();

    // Validating disabled state
    if (!disabled) {
      if (event.type === "click" && mouseButton == "Left Click") {
        setNumber(number + Number(clickRepeat));
      }

      if (event.type === "contextmenu" && mouseButton == "Right Click") {
        setNumber(number + Number(clickRepeat));
      }
    }
  };

  // When someone clicks on success
  const handleStart = () => {
    if (clickRepeat > 0 && mouseButton != "") {
      setDisabled(false);
      toast("Now the buttons are enabled.", { type: "success" });
    } else {
      toast("Something wrong went.", { type: "error" });
    }
  };

  // When someone clicks on stop
  const handleStop = () => {
    setDisabled(true);
    toast("Now the buttons are disabled.", { type: "success" });
  };

  return (
    <main className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 box mx-auto">
            {/* Plus Minus Box */}
            <div className="plus-minus">
              <button
                className="minus"
                onClick={handleSubtracting}
                onContextMenu={handleSubtracting}
                disabled={disabled}
              >
                <img src={Minus} />
              </button>

              <label>Click Intervals (milliseconds):</label>
              <input type="number" value={number} readOnly />

              <button
                className="plus"
                onClick={handleAdding}
                onContextMenu={handleAdding}
                disabled={disabled}
              >
                <img src={Plus} />
              </button>
            </div>

            {/* Input and Select */}
            <div className="bottom">
              <Select
                options={mouseButtonOptions}
                onChange={(event) => {
                  setMouseButton(event.target.value);
                }}
              />
              <Input
                type="number"
                placeholder="Click Repeat"
                value={clickRepeat}
                onChange={(event) => {
                  setClickRepeat(event.target.value);
                }}
              />
            </div>

            {/* Buttons */}
            <div className="buttons">
              <ButtonPrimary
                name="Start"
                type="success"
                onClick={handleStart}
              />
              <ButtonPrimary name="Stop" type="danger" onClick={handleStop} />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </main>
  );
}

export default Home;
