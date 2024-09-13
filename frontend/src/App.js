import React, { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/saludo')
      .then(response => response.json())
      .then(data => setMensaje(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;
