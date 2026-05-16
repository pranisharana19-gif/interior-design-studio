import React from 'react';
import './ColorPalette.css';

function ColorPalette({ colors, onColorChange }) {
  const wallColors = ['#e8d5c4', '#f5e6d3', '#d4ccc0', '#e7dcc6', '#f0e8dc'];
  const floorColors = ['#d4a574', '#c9956f', '#b8956f', '#a68968', '#8b6f47'];

  return (
    <div className="color-palette">
      <h2>Room Colors</h2>
      
      <div className="color-section">
        <label className="color-label">Wall Color</label>
        <div className="color-options">
          {wallColors.map((color) => (
            <button
              key={color}
              className={`color-button ${colors.wallColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange('wallColor', color)}
              title={color}
              aria-label={`Select wall color ${color}`}
            />
          ))}
        </div>
        <input
          type="color"
          value={colors.wallColor}
          onChange={(e) => onColorChange('wallColor', e.target.value)}
          className="color-input"
        />
      </div>

      <div className="color-section">
        <label className="color-label">Floor Color</label>
        <div className="color-options">
          {floorColors.map((color) => (
            <button
              key={color}
              className={`color-button ${colors.floorColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange('floorColor', color)}
              title={color}
              aria-label={`Select floor color ${color}`}
            />
          ))}
        </div>
        <input
          type="color"
          value={colors.floorColor}
          onChange={(e) => onColorChange('floorColor', e.target.value)}
          className="color-input"
        />
      </div>
    </div>
  );
}

export default ColorPalette;
