import React from 'react';
import './FurnitureItem.css';

function FurnitureItem({ item, onRemove }) {
  return (
    <div
      className="furniture-item"
      style={{
        left: `${item.x}px`,
        top: `${item.y}px`
      }}
      title={item.name}
    >
      <div className="item-emoji">{item.emoji}</div>
      <button
        className="remove-btn"
        onClick={onRemove}
        aria-label={`Remove ${item.name}`}
      >
        ×
      </button>
    </div>
  );
}

export default FurnitureItem;
