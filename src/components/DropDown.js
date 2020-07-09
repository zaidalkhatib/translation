import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({options, selected, setSelected, label}) => {
  const [active, setActive] = useState(false);

  const ref = useRef();
  // useEffect(() => {
  //   document.body.addEventListener('click', function (event) {
  //     if (ref.current.contains(event.target)) {
  //       return;
  //     }
  //     setActive(false);
  //   });
  // }, []);
  const renderedOptions = options.map((option, index) => {
    // const activeIndex = index === option.index;
    return (
      <div
        className="item"
        onClick={() => {
          setSelected(option);
          setActive(false);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className="ui form"
      style={{padding: '20px', margin: '10px'}}
    >
      <div className="field">
        <label className="label">{label}</label>
        <div className="ui selection dropdown visible active">
          <i
            onClick={() => {
              setActive(!active);
            }}
            className="dropdown icon"
          ></i>
          <div className="text"> {selected.label} </div>
          {active ? (
            <div className="menu visible transition">{renderedOptions}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
