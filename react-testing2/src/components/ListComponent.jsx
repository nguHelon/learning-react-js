// ListComponent.jsx
import React from 'react';

const ListComponent = ({ items }) => {
  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
