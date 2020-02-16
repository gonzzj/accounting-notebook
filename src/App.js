import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transactions from './components/transactions';
import Container from 'react-bootstrap/Container'

const App = () => (
  <>
    <Container>
      <h1 className={'my-4'}>Accounting Notebook</h1>
      <Transactions />
    </Container>
  </>
);

export default App;
