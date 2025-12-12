import React from 'react';
import './AIShowcase.css';

const AIShowcase = () => {
  return (
    <div className="ai-showcase">
      <div className="ai-container">
        <div className="ai-showcase-header">
          <h2 className="ai-text-gradient">AI Enhanced Design System</h2>
          <p>Beautiful, modern design with desert-military color palette</p>
        </div>
        
        <div className="ai-grid ai-grid-3">
          <div className="ai-card ai-showcase-card">
            <div className="ai-showcase-icon">🎨</div>
            <h3>Color Harmony</h3>
            <p>Desert browns, army greens, and saffron gold create a cohesive, respectful theme</p>
          </div>
          
          <div className="ai-card ai-showcase-card">
            <div className="ai-showcase-icon">✨</div>
            <h3>AI Animations</h3>
            <p>Subtle floating effects, glows, and transitions enhance user experience</p>
          </div>
          
          <div className="ai-card ai-showcase-card">
            <div className="ai-showcase-icon">🔧</div>
            <h3>Modern Components</h3>
            <p>Glassmorphism, gradients, and smart hover effects throughout</p>
          </div>
        </div>
        
        <div className="ai-showcase-buttons">
          <button className="ai-button-primary">Primary Action</button>
          <button className="ai-button-secondary">Secondary Action</button>
        </div>
      </div>
    </div>
  );
};

export default AIShowcase;