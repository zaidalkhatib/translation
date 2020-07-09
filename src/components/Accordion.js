import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [clickd, setClicked] = useState(null);
  const renderedItems = items.map((item, index) => {
    const active = clickd === index ? 'active' : null;
    return (
      <React.Fragment key={index}>
        <div className={`title ${active}`}>
          <button
            style={{border: 'none', background: 'white'}}
            onClick={() => {
              setClicked(index);
            }}
          >
            <i className="dropdown icon"></i>
          </button>

          {item.title}
        </div>
        <div className={`content ${active} `}>
          <p> {item.details}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion"> {renderedItems} </div>;
};
export default Accordion;
