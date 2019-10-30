import React, { useState } from 'react';

import Modal from 'react-modal';

import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import api from '../../services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const inputStyle = {
  background: '#DEDEDE',
  height: '40px',
  borderRadius: '8px',
  border: 'none',
  padding: '5px',
  margin: '5px',
};

const buttonStyle = {
  background: '#82ebb3',
  width: '100%',
  borderRadius: '8px',
  padding: '5px',
  border: 'none',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  marginTop: '10px',
};

Modal.setAppElement('#root');

export default function EditModal({ data, handleEdit }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSubmit(clientData) {
    api
      .put(
        `${process.env.REACT_APP_DEV_API_URL}/clients/${data.id}`,
        clientData
      )
      .then(res => {
        if (res.status === 200) {
          handleEdit();
        }
      });
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        Editar
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Editar cliente</h2>
        <Form
          initialData={data}
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <Input style={inputStyle} name="name" />
          <Input style={inputStyle} name="cpf" />
          <Input style={inputStyle} name="email" />
          <Input style={inputStyle} name="phone" />

          <button style={buttonStyle} type="submit">
            Salvar
          </button>
        </Form>
      </Modal>
    </>
  );
}
