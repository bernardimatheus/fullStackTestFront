import React, { useState } from 'react';

import Modal from 'react-modal';

import { Form, Input } from '@rocketseat/unform';
import { Container, AddButton, ButtonDiv } from './styles';
import add from '../../assets/images/add.svg';

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

export default function AddModal({ handleAdd }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSubmit(data) {
    if (!data.name || !data.email || !data.phone || !data.cpf) {
      return;
    }
    api.post(`${process.env.REACT_APP_DEV_API_URL}/clients`, data).then(res => {
      if (res.status === 200) {
        handleAdd(res.data);
      }
    });
  }

  return (
    <Container>
      <ButtonDiv>
        <AddButton onClick={openModal} type="button">
          <img height={70} src={add} alt="add" />
        </AddButton>
      </ButtonDiv>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ textAlign: 'center', color: '#666' }}>
          Adicionar cliente
        </h2>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px',
          }}
          onSubmit={handleSubmit}
        >
          <Input placeholder="Nome" style={inputStyle} name="name" />
          <Input placeholder="CPF" style={inputStyle} name="cpf" />
          <Input placeholder="E-mail" style={inputStyle} name="email" />
          <Input placeholder="Telefone" style={inputStyle} name="phone" />

          <button style={buttonStyle} type="submit">
            Adicionar
          </button>
        </Form>
      </Modal>
    </Container>
  );
}
