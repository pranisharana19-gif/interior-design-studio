import React, { useState, useEffect } from 'react';
import './App.css';
import RoomSelector from './components/RoomSelector';
import FurnitureSelector from './components/FurnitureSelector';
import ColorPalette from './components/ColorPalette';
import DesignCanvas from './components/DesignCanvas';

function App() {
  // useState 1: Selected room
  const [selectedRoom, setSelectedRoom] = useState('livingRoom');
  
  // useState 2: Room colors
  const [roomColors, setRoomColors] = useState({
    wallColor: '#e8d5c4',
    floorColor: '#d4a574'
  });
  
  // useState 3: Furniture items in the room
  const [roomItems, setRoomItems] = useState([]);

  // useEffect: Save room design to localStorage whenever it changes
  useEffect(() => {
    const designData = {
      room: selectedRoom,
      colors: roomColors,
      items: roomItems
    };
    localStorage.setItem('interiorDesign', JSON.stringify(designData));
    document.title = `Interior Design Studio - ${selectedRoom}`;
  }, [selectedRoom, roomColors, roomItems]);

  // Handle room change
  const handleRoomChange = (room) => {
    setSelectedRoom(room);
    // Clear items when switching rooms
    setRoomItems([]);
    setRoomColors({ wallColor: '#e8d5c4', floorColor: '#d4a574' });
  };

  // Handle adding furniture
  const handleAddFurniture = (furniture) => {
    const newItem = {
      id: Date.now(),
      ...furniture,
      x: Math.random() * 200,
      y: Math.random() * 200
    };
    setRoomItems([...roomItems, newItem]);
  };

  // Handle removing furniture
  const handleRemoveFurniture = (itemId) => {
    setRoomItems(roomItems.filter(item => item.id !== itemId));
  };

  // Handle color change
  const handleColorChange = (colorType, color) => {
    setRoomColors({
      ...roomColors,
      [colorType]: color
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏠 Interior Design Studio</h1>
        <p>Plan and design your perfect room</p>
      </header>
      
      <div className="app-container">
        <div className="sidebar">
          <RoomSelector 
            selectedRoom={selectedRoom} 
            onRoomChange={handleRoomChange}
          />
          
          <ColorPalette 
            colors={roomColors}
            onColorChange={handleColorChange}
          />
          
          <FurnitureSelector 
            room={selectedRoom}
            onAddFurniture={handleAddFurniture}
          />
        </div>
        
        <div className="main-content">
          <DesignCanvas 
            room={selectedRoom}
            colors={roomColors}
            items={roomItems}
            onRemoveItem={handleRemoveFurniture}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
