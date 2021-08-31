import React, { Component } from 'react';
class CadastroTables extends Component {
    
    render() { 
        return (  
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cerveja</td>
                            <td>Bebidas</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
 
export default CadastroTables;