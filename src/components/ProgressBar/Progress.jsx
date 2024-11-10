import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './styles.scss'

function ProgressCard() {
  
  const [progressValues, setProgressValues] = useState({
    lonely: 0,
    stomachAche: 0,
    dreams: 0,
    energy: 0,
    goingOut: 0,
  });

 
  const handleIncreaseProgress = (key) => {
    setProgressValues((prevProgress) => ({
      ...prevProgress,
      [key]: prevProgress[key] < 100 ? prevProgress[key] + 10 : 100, // Limit to 100%
    }));
  };

  const items = [
    { key: 'lonely', text: "I am feeling very lonely" },
    { key: 'stomachAche', text: "I get stomach-ache" },
    { key: 'dreams', text: "I have horrible dreams" },
    { key: 'energy', text: "I have lots of energy" },
    { key: 'goingOut', text: "I like going out" },
  ];

  return (
    <div className='Progess' style={{  padding: '20px' }}>
      <h2>Progress Card</h2>
      {items.map((item) => (
        <div
          key={item.key}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 10px 0' }}>{item.text}</p>
            <div
              style={{
                height: '10px',
                backgroundColor: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${progressValues[item.key]}%`,
                  height: '100%',
                  backgroundColor: 'rgb(212, 60, 60)',
                }}
              />
            </div>
          </div>
          <button
            onClick={() => handleIncreaseProgress(item.key)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              marginLeft: '10px',
            }}
          >
            <FaPlus />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProgressCard;
