import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'; // Certifique-se de importar useParams corretamente
import Button from './Button';

import './TaskDetails.css'

const TaskDetails = ({ tasks }) => {
const params = useParams();
const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1); // Voltar à página anterior
  };

  return (
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, cupiditate, possimus sapiente</p>
      </div>
    </>
  );
}

export default TaskDetails;
