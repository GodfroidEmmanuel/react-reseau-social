import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette'

class Admin extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}/>
                Object.keys(recettes)
                <footer>
                <button onClick={this.props.chargerExemple}>remplir</button>
            </footer>
            </div>
            
         );
    }
}
 
export default Admin;