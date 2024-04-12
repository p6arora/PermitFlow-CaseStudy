import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header';
import Interior from './components/Interior';
import Exterior from './components/Exterior';
import Results from './components/Results';
import MainForm from './components/MainForm';


function App() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // State to keep track of result 
  const [result, setResult] = useState('')

  // State to keep track of when form is submitted
  const [submitted, setSubmitted] = useState(false)

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
        setResult("Other was selected - In-House Review Process is required")
      }
      else if (exteriorCheckboxes.garageDoorReplacement || exteriorCheckboxes.exteriorDoors) {
        setResult("Garage Door Replacement and/or Exterior Doors was submitted - Over-The-Counter Submission Process is required")
      }
      else {
        setResult("No Permit was submitted")
      }
    }
    // interior logic
    else {
      if (interiorCheckboxes.bathroomRemodel) {
        setResult("Bathroom Remodel was selected - Over-The-Counter Submission Process is required")
      }
      else {
        setResult("Bathroom Remodel was not selected - so In-House Review Process is needed")
      }

    }
    console.log("Form has been submitted")
    setSubmitted(true)
    console.log("Submitted has been set to true")

  }

  // const navigate = useNavigate(); // Ensure this line is placed correctly

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/results' element={<Results />} />
          <Route path='/' element={<MainForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
