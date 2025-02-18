import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const ModalComponent = ({ info, closeModal }) => {
  return (
    <Modal
      open={true}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Informations
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {info}
        </Typography>
        <Button variant="contained" color="primary" onClick={closeModal} sx={{ mt: 2 }}>
          Fermer
        </Button>
      </Box>
    </Modal>
  );
};

// Style pour le Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default ModalComponent;
