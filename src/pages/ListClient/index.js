import React, { useState, useEffect } from 'react';

import ReactTable from 'react-table';
import './react-table.css';

import api from '../../services/api';

import { Container, Content } from './styles';

import AddModal from '../../components/AddModal';

export default function ListClient() {
  const [clients, setClients] = useState([]);
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_DEV_API_URL}/clients`).then(res => {
      setClientData(res.data);
    });
  }, [clients]);

  function handleEdit(clientInfo) {
    console.log(clientInfo);
  }

  function handleDelete(clientInfo) {
    api
      .delete(`${process.env.REACT_APP_DEV_API_URL}/clients/${clientInfo.id}`)
      .then(res => {
        if (res.status === 200) {
          setClients(clients.filter(item => item.id !== clientInfo.id));
        }
      });
  }

  function handleAdd(listData) {
    setClients(prevState => [{ ...prevState, listData }]);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name', // String-based value accessors!
    },
    {
      Header: 'CPF',
      accessor: 'cpf',
    },
    {
      Header: 'E-mail',
      accessor: 'email',
    },
    {
      Header: 'Telefone',
      accessor: 'phone',
    },
    {
      Header: 'Ações',
      Cell: row => (
        <div>
          <button type="button" onClick={() => handleEdit(row.original)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(row.original)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <Container>
      <Content>
        <AddModal handleAdd={handleAdd} />
        <ReactTable
          data={clientData}
          columns={columns}
          defaultPageSize={10}
          nextText="Próxima"
          previousText="Anterior"
          className="-striped -highlight"
        />
      </Content>
    </Container>
  );
}
