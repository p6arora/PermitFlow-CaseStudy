import './App.css';
import Header from './components/Header';
import { useState } from 'react'
import Interior from './components/Interior';
import Exterior from './components/Exterior';
import Dropdown from './components/Dropdown';

function App() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // State to keep track of the checked state of each external checkbox
  const [exteriorCheckboxes, setExteriorCheckboxes] = useState({
    garageDoorReplacement: false,
    exteriorDoors: false,
    fencing: false,
    other: false
  });

  // State to keep track of the checked state of each internal checkbox
  const [interiorCheckboxes, setInteriorCheckboxes] = useState({
    bathroomRemodel: false,
    newBathroom: false,
    newLaundryRoom: false,
    other: false
  });

  // Validate an option was selected
  const validateOptionSelected = () => {

    // One of the exterior checkboxes was selected
    if (exteriorCheckboxes.garageDoorReplacement ||
      exteriorCheckboxes.exteriorDoors ||
      exteriorCheckboxes.fencing ||
      exteriorCheckboxes.other
    ) {
      return true
    }

    // One of the internal checkboxes was selected
    else if (interiorCheckboxes.bathroomRemodel ||
      interiorCheckboxes.newBathroom ||
      interiorCheckboxes.newLaundryRoom ||
      interiorCheckboxes.other
    ) {
      return true
    }

    // nothing was selected
    else {
      return false
    }

  }

  // Handler function to update the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault()

    // exterior logic
    if (selectedOption === "exterior") {
      if (exteriorCheckboxes.other) {
        console.log("Other was selected - In-House Review Process is required")
      }
      else if (exteriorCheckboxes.garageDoorReplacement || exteriorCheckboxes.exteriorDoors) {
        console.log("Garage Door Replacement and/or Exterior Doors was submitted - Over-The-Counter Submission Process is required")
      }
      else {
        console.log("No Permit was submitted")
      }
    }
    // interior logic
    else {
      if (interiorCheckboxes.bathroomRemodel) {
        console.log("Bathroom Remodel was selected - Over-The-Counter Submission Process is required")
      }
      else {
        console.log("Bathroom Remodel was not selected - so In-House Review Process is needed")
      }

    }

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
        {selectedOption === "interior" && <Interior checkboxes={interiorCheckboxes} setCheckBoxes={setInteriorCheckboxes} />}
        {selectedOption === "exterior" && <Exterior checkboxes={exteriorCheckboxes} setCheckBoxes={setExteriorCheckboxes} />}
        {selectedOption && validateOptionSelected() && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default App;
