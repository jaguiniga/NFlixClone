import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
<div class="form-container">
    <span class="close-btn">x</span>
    <div class="form-content-left">
        <img src="img/img-2.svg" alt="placeholder" class="form-img"/>
    </div>
    {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />) : (<FormSuccess />)}

</div>
           
        </>
    )
}

export default Form
