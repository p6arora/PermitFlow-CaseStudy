const Interior = ({ checkboxes, setCheckBoxes }) => {
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
            <h3>What Interior Work Are You Doing?</h3>
            <div className="checkbox-container">
                {/* Checkbox input elements */}
                <label>
                    <input
                        type="checkbox"
                        name="bathroomRemodel"
                        checked={checkboxes.bathroomRemodel}
                        onChange={handleCheckboxChange}
                    />
                    Bathroom Remodel
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="newBathroom"
                        checked={checkboxes.newBathroom}
                        onChange={handleCheckboxChange}
                    />
                    New Bathroom
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="newLaundryRoom"
                        checked={checkboxes.newLaundryRoom}
                        onChange={handleCheckboxChange}
                    />
                    New Laundry Room
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

export default Interior