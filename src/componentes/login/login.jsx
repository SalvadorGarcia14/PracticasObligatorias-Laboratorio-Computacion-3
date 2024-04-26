import { useState } from 'react';
import PropTypes from 'prop-types';


const Login = ({ onUsernameChange }) => {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setUsername(inputValue);

        if (inputValue.toLowerCase().includes('o')) {
            setErrorMessage('');
        } else {
            setErrorMessage("Por favor, Solo nombres de usuario sin la letra 'o' !");

        }

        onUsernameChange(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Ingrese su nombre de usuario"
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};


Login.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
};


export default Login;