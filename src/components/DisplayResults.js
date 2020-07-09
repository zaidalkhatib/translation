import React from 'react';

const DisplayResults = ({result}) => {
  return (
    <div className="ui sizer vertical segment" style={{textAlign: 'center'}}>
      {result.map((m) => {
        return (
          <div>
            <h2 key={m.title} className="ui attached headerr">
              {m.title}
            </h2>
            <h3 className="ui  attached segment">
              <span dangerouslySetInnerHTML={{__html: m.snippet}}></span>
              <a
                className="ui button"
                style={{
                  margin: '10px',
                }}
                href={`https://en.wikipedia.org?curid=${m.pageid}`}
              >
                Go
              </a>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayResults;
