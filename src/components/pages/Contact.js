import React, {useState} from 'react';
import '../../styles/Contact.css';
import {validateEmail} from '../../utils/helpers.js';

function Contact () {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'
    
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setText(inputValue);
        }
    };
    
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        console.log("handleFormSubmit called");
        // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('The provided email is invalid');
            return;
        }

        // Checking to make sure that there's a name and text provided
        if (!name) {
            setErrorMessage('No name provided');
            return;
        }

        if (!text) {
            setErrorMessage('No message text provided.');
            return;
        }

        setErrorMessage('');
        setEmail('');
        setName('');
        setText('');
      };

    return (
        <div className="contact container d-flex justify-content-center">
            <form className="form" onSubmit={handleFormSubmit}>
                <h1>Contact me: </h1>
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="email"
                />
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                />
                <textarea id="w3review" name="w3review" rows="4" cols="50" value={text} onChange={handleInputChange} placeholder="Enter your message here">
                </textarea>
                {errorMessage && (
                    <p className="error-text">{errorMessage}</p>
                )}
                <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;