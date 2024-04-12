import './App.css';
import Header from './components/Header';
import { useState } from 'react'
import Interior from './components/Interior';
import Exterior from './components/Exterior';

function App() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Handler function to update the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()

    console.log("Form has been submitted")

  }

  return (
    <div className='app'>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>What Residential Work Are You Doing?</h2>
        {/* Dropdown select element */}
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select...</option>
          <option value="interior">Interior</option>
          <option value="exterior">Exterior</option>
        </select>
        {/* Display selected option */}
        {selectedOption && <p>You selected: {selectedOption}</p>}
        {selectedOption === "interior" && <Interior />}
        {selectedOption === "exterior" && <Exterior />}
        {selectedOption && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default App;
