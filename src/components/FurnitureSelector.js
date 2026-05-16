import React, { useEffect, useState } from 'react';
import './FurnitureSelector.css';

function FurnitureSelector({ room, onAddFurniture }) {
  const [furnitureList, setFurnitureList] = useState([]);

  // useEffect to load furniture based on selected room
  useEffect(() => {
    const furniture = {
      livingRoom: [
        { name: 'Sofa', emoji: '🛋️', size: 'large' },
        { name: 'Coffee Table', emoji: '🪑', size: 'small' },
        { name: 'Television', emoji: '📺', size: 'medium' },
        { name: 'Lamp', emoji: '💡', size: 'small' },
        { name: 'Bookshelf', emoji: '📚', size: 'medium' }
      ],
      bedroom: [
        { name: 'Bed', emoji: '🛏️', size: 'large' },
        { name: 'Nightstand', emoji: '🚪', size: 'small' },
        { name: 'Dresser', emoji: '🗄️', size: 'medium' },
        { name: 'Wardrobe', emoji: '👗', size: 'large' },
        { name: 'Desk', emoji: '📖', size: 'medium' }
      ],
      kitchen: [
        { name: 'Stove', emoji: '🍳', size: 'large' },
        { name: 'Refrigerator', emoji: '❄️', size: 'large' },
        { name: 'Counter', emoji: '🔨', size: 'medium' },
        { name: 'Cabinet', emoji: '🗄️', size: 'medium' },
        { name: 'Table', emoji: '⏱️', size: 'medium' }
      ],
      diningRoom: [
        { name: 'Dining Table', emoji: '🍽️', size: 'large' },
        { name: 'Chair', emoji: '🪑', size: 'small' },
        { name: 'Buffet', emoji: '🗄️', size: 'medium' },
        { name: 'Chandelier', emoji: '💡', size: 'small' },
        { name: 'Rug', emoji: '🧵', size: 'large' }
      ]
    };

    setFurnitureList(furniture[room] || []);
  }, [room]);

  return (
    <div className="furniture-selector">
      <h2>Add Furniture</h2>
      <div className="furniture-list">
        {furnitureList.map((item, index) => (
          <button
            key={index}
            className="furniture-button"
            onClick={() => onAddFurniture(item)}
            title={`Add ${item.name}`}
          >
            <span className="furniture-emoji">{item.emoji}</span>
            <span className="furniture-name">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FurnitureSelector;
