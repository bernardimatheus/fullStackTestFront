import React, { useState } from 'react';

import Modal from 'react-modal';

import { Form, Input } from '@rocketseat/unform';

import InputMask from 'react-input-mask';

import { toast } from 'react-toastify';

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

toast.configure({
  autoClose: 3000,
  draggable: false,
  // etc you get the idea
});

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
          toast.success('Cliente editado!');
          handleEdit();
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          toast.error('Dados existentes');
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
        <h2 style={{ textAlign: 'center', color: '#666' }}>Editar cliente</h2>
        <Form
          initialData={data}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '15px',
          }}
          onSubmit={handleSubmit}
        >
          <Input style={inputStyle} required name="name" />
          <InputMask defaultValue={data.cpf} mask="999.999.999-99">
            {() => (
              <Input placeholder="CPF" style={inputStyle} name="cpf" required />
            )}
          </InputMask>
          <Input style={inputStyle} required name="email" />
          <InputMask defaultValue={data.phone} mask="(99) 9 9999-9999">
            {() => (
              <Input
                placeholder="Telefone"
                style={inputStyle}
                name="phone"
                required
              />
            )}
          </InputMask>

          <button style={buttonStyle} type="submit">
            Salvar
          </button>
        </Form>
      </Modal>
    </>
  );
}
