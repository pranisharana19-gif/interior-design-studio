import React from 'react';
import './DesignCanvas.css';
import FurnitureItem from './FurnitureItem';

function DesignCanvas({ room, colors, items, onRemoveItem }) {
  const getRoomName = (roomId) => {
    const names = {
      livingRoom: 'Living Room',
      bedroom: 'Bedroom',
      kitchen: 'Kitchen',
      diningRoom: 'Dining Room'
    };
    return names[roomId] || 'Room';
  };

  return (
    <div className="design-canvas">
      <div className="canvas-header">
        <h2>{getRoomName(room)}</h2>
        <p>{items.length} item(s)</p>
      </div>
      
      <div
        className="canvas-area"
        style={{
          backgroundColor: colors.wallColor,
          borderBottom: `40px solid ${colors.floorColor}`
        }}
      >
        {items.length === 0 ? (
          <div className="empty-state">
            <p>Click on furniture to add items to your {getRoomName(room).toLowerCase()}</p>
          </div>
        ) : (
          items.map((item) => (
            <FurnitureItem
              key={item.id}
              item={item}
              onRemove={() => onRemoveItem(item.id)}
            />
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="canvas-footer">
          <button 
            className="clear-btn"
            onClick={() => items.forEach(item => onRemoveItem(item.id))}
          >
            Clear All Items
          </button>
        </div>
      )}
    </div>
  );
}

export default DesignCanvas;
