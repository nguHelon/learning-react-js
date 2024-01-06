// ButtonToggleComponent.jsx
import React, { useState } from 'react';

const ButtonToggleComponent = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <div>
      <h2>Button Toggle</h2>
      <p>State: {toggleState ? 'On' : 'Off'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default ButtonToggleComponent;
