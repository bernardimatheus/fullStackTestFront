import React, { useState, useEffect } from 'react';

import ReactTable from 'react-table';
import './react-table.css';

import api from '../../services/api';

import { Container, Content } from './styles';

export default function ListClient() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get(`${process.env.REACT_APP_DEV_API_URL}/clients`).then(res => {
      setClients(res.data.data);
    });
  }, [clients]);

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
    },
  ];

  return (
    <Container>
      <Content>
        <ReactTable
          data={clients}
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
