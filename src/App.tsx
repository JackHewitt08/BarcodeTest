import './App.css';
import { useBarcode } from 'react-barcodes';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('Barcode Placeholder');

  const stringChecker = (stringToCheck: string): string => {
    let returnString = ''

    if (stringToCheck === '') {
      returnString = 'Enter a Value'
    } else {
      returnString = stringToCheck;
    }

    return returnString;
  }

  const { inputRef } = useBarcode({
    value: `${stringChecker(input)}`,
    options: {
      background: '#98FB98',
      width: 2,
    }
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
          Barcode Test, this used CODE128 format
        </div>
        <div>
          <svg ref={inputRef} />
        </div>
        <input
          className='input'
          type='text'
          value={input}
          placeholder='Enter a value'
          onChange={(event) => 
              setInput(event.target.value)
          }
        />
        <div className='sidenote'>
          side note: if you dont pass a barcode a value, it dies a horrible death
        </div>
      </header>
    </div>
  );
}

export default App;
