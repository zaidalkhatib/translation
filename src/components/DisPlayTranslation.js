import React from 'react';

const DisPlayTranslation = ({result}) => {
  //   console.log(result[0], 'the result');

  return (
    <div style={{padding: '20px', margin: '20px'}}>
      <h2>Output</h2>
      {<h1>{result[0]?.translatedText} </h1>}
    </div>
  );
};

export default DisPlayTranslation;
