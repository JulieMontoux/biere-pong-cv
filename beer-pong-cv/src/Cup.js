import React from 'react';
import './Cup.css';

const Cup = ({ cup, onClick }) => {
  return (
    <div 
      className="cup" 
      style={{ left: `${cup.position.x}px`, top: `${cup.position.y}px` }}
      onClick={onClick}
    >
      <div className="cup-inner">
        {/* Afficher les informations du gobelet dans un tooltip ou directement */}
        <span className="cup-info">{cup.info}</span>
      </div>
    </div>
  );
};

export default Cup;
