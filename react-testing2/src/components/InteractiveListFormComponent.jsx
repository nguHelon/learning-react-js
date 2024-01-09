// InteractiveListFormComponent.jsx
import React, { useState } from 'react';

const InteractiveListFormComponent = ({ name }) => {
  const [itemName, setItemName] = useState('');
  const [itemList, setItemList] = useState([]);

  const handleItemChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddItem = () => {
    if (itemName !== '') {
      setItemList([...itemList, itemName]);
      setItemName('');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...itemList];
    updatedList.splice(index, 1);
    setItemList(updatedList);
  };

  return (
    <div>
      <h2>{`Interactive List Form for ${name}`}</h2>
      <form>
        <label htmlFor="itemName">Enter Item:</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={itemName}
          onChange={handleItemChange}
        />
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </form>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveListFormComponent;
