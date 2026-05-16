import React from 'react';
import './RoomSelector.css';

function RoomSelector({ selectedRoom, onRoomChange }) {
  const rooms = [
    { id: 'livingRoom', name: '🛋️ Living Room', label: 'Living Room' },
    { id: 'bedroom', name: '🛏️ Bedroom', label: 'Bedroom' },
    { id: 'kitchen', name: '🍳 Kitchen', label: 'Kitchen' },
    { id: 'diningRoom', name: '🍽️ Dining Room', label: 'Dining Room' }
  ];

  return (
    <div className="room-selector">
      <h2>Select Room</h2>
      <div className="room-buttons">
        {rooms.map(room => (
          <button
            key={room.id}
            className={`room-button ${selectedRoom === room.id ? 'active' : ''}`}
            onClick={() => onRoomChange(room.id)}
            title={room.label}
          >
            {room.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomSelector;
