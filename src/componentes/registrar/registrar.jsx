import PropTypes from 'prop-types';

const Registrar = ({ username }) => {
    const handleClick = () => {
        if (username === '' || !username.toLowerCase().includes('o')) {
            alert("Usuario inválido para registrarse, por favor que el nombre de usuario contenga la letra 'o' ");
        } else {
            alert("Usuario registrado correctamente!");
        }
    };

    return <button onClick={handleClick}>Registrarse</button>;
};

Registrar.propTypes = {
    username: PropTypes.string.isRequired,
};

export default Registrar;