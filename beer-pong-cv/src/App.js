import React, { useState, useEffect } from 'react';
import Cup from './Cup';
import Modal from './Modal';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cupInfo, setCupInfo] = useState(null);
  const [cups, setCups] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/info')
      .then(response => {
        const data = response.data.map((item, index) => ({
          id: index + 1,
          position: { x: 50 + index * 100, y: 50 },
          info: item.description,
        }));
        setCups(data);
      })
      .catch(error => {
        console.error("Il y a eu une erreur!", error);
      });
  }, []);

  const handleCupClick = (cup) => {
    setCupInfo(cup.info);
    setShowModal(true);
  };

  return (
    <Container>
      <div className="game">
      <Typography variant="h3" className="title">
        Jeu de Beer Pong - CV interactif
      </Typography>
        <div className="table">
          <div className="cups-container">
            {cups.map(cup => (
              <Cup key={cup.id} cup={cup} onClick={() => handleCupClick(cup)} />
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal info={cupInfo} closeModal={() => setShowModal(false)} />}
    </Container>
  );
}

export default App;
