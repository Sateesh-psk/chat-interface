import React, { useEffect, useState } from 'react';
//importing components and logos used
import { CiSearch } from 'react-icons/ci';
import NavbarComp from './components/NavbarComp';
import ReactMarkdown from 'react-markdown';
//importing dummy responses
import responses from './Data';

function App() {
  //creating state variables to manage different states
  const [inputs, setInputs] = useState([{ q: 'Hello', a: 'Hello **sateesh**' }]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  //to start the streaming of response
  useEffect(() => {
    if (inputs.length > 1 && !loading) {
      simulateResponse(inputs.length - 1);
    }
  }, [inputs.length]);

  //to handle the input search
  const handleInputs = () => {
    if (searchInput !== '') {
      setInputs((inp) => [...inp, { q: searchInput, a: '' }]);
      setSearchInput('');
    }
  };
  //to stream the response word by word with a certain time interval 
  const simulateResponse = (index) => {
    //if no response found , uses default response
    const response = responses[inputs[index].q] || "Sorry, I don't have a response for that.";
    const words = response.split(' ');
    let wordIndex = 0;

    const interval = setInterval(() => {
      //stream until the last but one word
      if (wordIndex < words.length-1) {
        setInputs((prevInputs) =>
          prevInputs.map((item, idx) =>
            idx === index
              ? { ...item, a: item.a ? item.a + ' ' + words[wordIndex] : words[wordIndex] }
              : item
          )
        );
        wordIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <div className='h-screen bg-slate-400'>
      {/* navbar position */}
      <NavbarComp />
      {/* main inputs and responses */}
      <div style={{ height: '590px' }} className='overflow-auto px-16 text-white scroll-auto'>
        {inputs && (
          <div className='grid grid-cols-8'>
            {inputs.map((e, i) => (
              <React.Fragment key={i}>
                <div className='col-start-6 col-span-2 bg-slate-500 px-4 py-2 rounded-xl my-2'>
                  <h3>{e.q}</h3>
                </div>
                <div className='text-black col-start-2 col-span-4 my-4'>
                  <ReactMarkdown>{e.a}</ReactMarkdown>
                </div>
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      {/* bottom search bar  */}
      <div className=' text-white relative bottom-4 grid mx-auto grid-cols-6 w-2/3'>
        <input
          value={searchInput}
          onChange={(e) => { setSearchInput(e.target.value); }}
          className='bg-slate-700 col-span-5 px-3 focus:outline-none h-10 w-full rounded-l-xl'
        />
        <button className='bg-slate-700 rounded-r-xl w-8' onClick={handleInputs}>
          <CiSearch className='scale-125 hover:text-slate-950' />
        </button>

      </div>
    </div>
  );
}

export default App;
