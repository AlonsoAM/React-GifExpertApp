import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChanged = (e) => {
        // console.log(event.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // console.log("Submit Hecho");
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={inputValue}
                    onChange={handleInputChanged}
                />
            </form>
            {/* <h1>{inputValue}</h1> */}
        </>
    )
}
AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}



export default AddCategory



