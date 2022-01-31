import React from "react";
import { useState } from "react/cjs/react.development";
import PropTypes from 'prop-types';

// Component -> AddCategory
const AddSearch = ({ setGifs }) => {

    const [inputValue, setInputValue] = useState('')

    const controlInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const controlInputEnter = (e) => {
        e.preventDefault();
        setGifs(images => [inputValue, ...images])
        setInputValue('')
    }

    return (
        <form onSubmit={controlInputEnter}>
            <input type='text' placeholder="Buscar" value={inputValue} onChange={(e) => controlInputChange(e)} />
        </form>
    )
}

AddSearch.propTypes = {
    setGifs: PropTypes.func.isRequired
}

export default AddSearch;