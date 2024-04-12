

const Exterior = ({ checkboxes, setCheckBoxes }) => {
    // State to keep track of the checked state of each checkbox
    // const [checkboxes, setCheckboxes] = useState({
    //     garageDoorReplacement: false,
    //     exteriorDoors: false,
    //     fencing: false,
    //     other: false
    // });

    // Handler function to toggle the checked state of a checkbox
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckBoxes({
            ...checkboxes,
            [name]: checked
        });
    };
    return (
        <div>
            <h3>What exterior work are you doing?</h3>
            {/* Checkbox input elements */}
            <label>
                <input
                    type="checkbox"
                    name="garageDoorReplacement"
                    checked={checkboxes.garageDoorReplacement}
                    onChange={handleCheckboxChange}
                />
                Garage Door Replacement
            </label>
            <label>
                <input
                    type="checkbox"
                    name="exteriorDoors"
                    checked={checkboxes.exteriorDoors}
                    onChange={handleCheckboxChange}
                />
                Exterior Doors
            </label>
            <label>
                <input
                    type="checkbox"
                    name="fencing"
                    checked={checkboxes.fencing}
                    onChange={handleCheckboxChange}
                />
                Fencing
            </label>
            <label>
                <input
                    type="checkbox"
                    name="other"
                    checked={checkboxes.other}
                    onChange={handleCheckboxChange}
                />
                Other
            </label>
            {/* Display the checked state of each checkbox */}
            <div>
                <p>Garage Door Replacement is {checkboxes.garageDoorReplacement ? 'checked' : 'unchecked'}</p>
                <p>Exteior Doors is {checkboxes.exteriorDoors ? 'checked' : 'unchecked'}</p>
                <p>Fencing is {checkboxes.fencing ? 'checked' : 'unchecked'}</p>
                <p>Other is {checkboxes.other ? 'checked' : 'unchecked'}</p>
            </div>


        </div>
    )
}

export default Exterior