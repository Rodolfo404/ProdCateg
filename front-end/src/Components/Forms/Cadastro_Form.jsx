import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class Cadastro_Forms extends Component {



    render() { 
        return (
          <section>
            <form>
            
              <TextField size="small" id="produto" label="Id" variant="outlined" />
              <TextField size="small" id="produto" label="Produto" variant="outlined" />
              <TextField size="small" id="produto" label="Categoria" variant="outlined" />
              <Button size="large" variant="contained" color="primary">
                Salvar
              </Button>
            </form>
          </section>
        );
    }
}
 
export default Cadastro_Forms;