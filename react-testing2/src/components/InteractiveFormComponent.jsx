// InteractiveFormComponent.jsx
import React, { useState } from 'react';

const InteractiveFormComponent = ({ name }) => {
  const [age, setAge] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age === '') {
      setGreeting('Please enter your age.');
    } else {
      setGreeting(`Hello, ${name}! You are ${age} years old.`);
    }
  };

  return (
    <div>
      <h2>Interactive Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Enter Your Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleAgeChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
};

export default InteractiveFormComponent;
