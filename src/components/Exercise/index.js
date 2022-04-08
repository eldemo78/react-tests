import React from 'react';
import PropTypes from 'prop-types';

const Exercise = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-testid="bmi">
            BMI: {bmi}
          </span>
          <div className="card-data">
            <span data-testid="weight">Weight: {weight} kg</span>
            <span data-testid="height">Height: {height} cm</span>
            <span data-testid="date">Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Exercise.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Exercise;