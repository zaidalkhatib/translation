import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayResults from './DisplayResults';
const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');

  const fitchData = async () => {
    // const proxyurl = 'https://cors-anywhere.wikipedia .com/';
    // const key = 'https://en.wikipedia.org/w/api.php?';
    axios
      .get('https://en.wikipedia.org/w/api.php?', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          srsearch: input,
          format: 'json',
        },
      })
      .then(function (response) {
        setResult(response.data.query.search);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fitchData();
    }, 250);
    // // return () => {
    //   clearTimeout(timeOutId);
    // };
  }, [input]);
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInput(term);
          setTerm('');
        }}
      >
        <div style={{textAlign: 'center', paddingTop: '30px'}}>
          <div className="ui   massive category search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                vlaue={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
                placeholder="search for anything"
              />
              <button
                // onClick={(e) => {
                //   e.preventDefault();
                //   setInput(term);
                //   setInput('');
                // }}
                style={{border: 'none', background: 'white'}}
              >
                <i className="search icon"></i>
              </button>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </form>
      <div>
        <DisplayResults result={result} />
      </div>
    </React.Fragment>
  );
};
export default Search;
