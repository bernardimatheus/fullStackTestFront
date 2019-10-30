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
        <h2>Adicionar cliente</h2>
        <Form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <Input name="name" />
          <Input name="cpf" />
          <Input name="email" />
          <Input name="phone" />

          <button type="submit">Salvar</button>
        </Form>
      </Modal>
    </Container>
  );
}
