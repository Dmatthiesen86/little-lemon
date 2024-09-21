import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/confirmation');
  };

  return (
    <div>
      <h1>Reservations</h1>
      {/* Add reservation form elements here */}
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default Reservations;
