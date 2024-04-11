import '../App.css';
import { useState } from 'react'

const Dropdown = () => {
    // State to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState('');

    // Handler function to update the selected option
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            {/* Dropdown select element */}
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select...</option>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
            </select>
            {/* Display selected option */}
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    )
}

export default Dropdown