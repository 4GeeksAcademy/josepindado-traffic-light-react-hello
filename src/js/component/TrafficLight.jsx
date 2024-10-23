import React, { useState } from 'react';
import '../../styles/index.css';

//Declara funcion TrafficLight => useState
const TrafficLight = () => {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);
  const [isPurpleActive, setIsPurpleActive] = useState(false);

  //Boton "Next Color"
  const nextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  //Boton "Add Purple"
  const togglePurpleColor = () => {
    if (isPurpleActive) {
      setColors(colors.filter(c => c !== 'purple'));
    } else {
      setColors([...colors, 'purple']);
    }
    setIsPurpleActive(!isPurpleActive);
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light-post"></div>
      <div className="traffic-light">
        <div 
          className={`semaforo ${color === 'red' ? 'rojo activo' : 'rojo'}`} 
          onClick={() => setColor('red')}
        ></div>
        <div 
          className={`semaforo ${color === 'yellow' ? 'amarillo activo' : 'amarillo'}`} 
          onClick={() => setColor('yellow')}
        ></div>
        <div 
          className={`semaforo ${color === 'green' ? 'verde activo' : 'verde'}`} 
          onClick={() => setColor('green')}
        ></div>
        {isPurpleActive && (
          <div 
            className={`semaforo ${color === 'purple' ? 'purple activo' : 'purple'}`} 
            onClick={() => setColor('purple')}
          ></div>
        )}
      </div>
      <button onClick={nextColor}>Next color</button>
      <button onClick={togglePurpleColor}>
        {isPurpleActive ? 'Remove Purple' : 'Add Purple'}
      </button>
    </div>
  );
};

export default TrafficLight;