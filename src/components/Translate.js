import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import DisPlayTranslation from './DisPlayTranslation';
import Input from './Input';
const options = [
  {label: 'Spanish', value: 'es'},
  {label: 'Hebrow', value: 'he'},
  {label: 'Arabic', value: 'ar'},
];

const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(value);
  };

  const faitchDate = async () => {
    const response = await axios.get(
      'https://translation.googleapis.com/language/translate/v2?key=AIzaSyAFw4579qx4Bna19JNqnchmNBvuDDp0-hU',
      {
        params: {
          q: input,
          source: 'en',
          target: selected.value,
          format: 'text',
        },
      }
    );
    console.log(response.data.data.translations[0]);
    setResult(response.data.data.translations);
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      faitchDate();
    }, 380);
    return () => {
      clearTimeout = timeOutId;
    };
  }, [selected, input]);

  return (
    <div>
      <Input handleInput={handleInput} />
      <br />
      <DropDown
        label="Select a languge"
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
      <DisPlayTranslation result={result} />
    </div>
  );
};
export default Translate;
