import { useState } from 'react';
import './App.css';
import Login from './componentes/login/login';
import Registrar from './componentes/registrar/registrar';

const App = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <div>
      <Login onUsernameChange={handleUsernameChange} />
      <p>Nombre de usuario: {username}</p>
      <Registrar username={username} />
    </div>
  );
};

export default App;