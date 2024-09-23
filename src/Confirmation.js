import React from 'react';
import { useNavigate} from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate('/thank-you');
  };

  return (
    <div>
      <h1>Confirmation</h1>
      {/* Show confirmation details here */}
      <button className ="button" onClick={handleDone}>Done</button>
    </div>
  );
};

export default Confirmation;
