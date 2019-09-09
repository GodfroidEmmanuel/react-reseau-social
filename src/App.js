import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/admin'
import Card from './components/Card'

//firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  conponentWillUnmount (){
    base.removeBinding(this.ref)
  }
  chargerExemple = () => this.setState({recettes})

ajouterRecette = recette => {
  const recettes = { ...this.state.recettes }
  recettes[`recettes-${Date.now()}`] = recette
  this.setState({ recettes })
}

majRecette = (key,newRecette => {
  const recettes = { ...this.state.recettes }
  recettes[key] = newRecette
  this.setState({ recettes })
})

  

  render () {
    const cards = Object.keys(this.state.recettes)
        .map(key => <Card key={key} details={this.state.recettes[key]} />)
    return (
      <div className='box'>
        <h1>
          <Header pseudo= {this.state.pseudo}/></h1>
        <div className='cards'>
          {cards}
        </div>
        <Admin
        recettes={this.state.recettes}
        majRecette={this.majRecette}
        ajouterRecette={this.ajouterRecette}
        chargerExemple={this.chargerExemple}>

        </Admin>
      </div>
    )
  }
}

export default App
