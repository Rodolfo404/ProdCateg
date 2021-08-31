import React, { Component } from 'react';
import '../src/Assets/App.css';
import Cadastro_Forms from './Components/Forms/Cadastro_Form';
import CadastroTables from './Components/Tables/Cadastro_tables';
import Container  from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  
  render() { 
    return (
      <section>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: "#cfe8fc", height: "100vh" }}/>
            <h1>Cadastro de Produto/Categoria</h1>
            <Cadastro_Forms />
            <CadastroTables />
          </Container>
        </React.Fragment>
      </section>
    );
  }
}
 
export default App;

