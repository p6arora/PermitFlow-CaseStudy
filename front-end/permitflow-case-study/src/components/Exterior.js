const Exterior = ({ checkboxes, setCheckBoxes }) => {
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
            <h3>What Exterior Work Are You Doing?</h3>
            <div className="checkbox-container">
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
            </div>
        </div>
    )
}

export default Exterior