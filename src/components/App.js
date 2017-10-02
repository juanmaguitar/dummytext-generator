import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      jokes: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getText()
  }
  
  getText () {
    axios.get(`http://api.icndb.com/jokes/random/${this.state.jokes}`)
      .then( response => {
        const text = response.data.value.map( ({joke}) => {
          if (this.state.html) {
            return `<p>${joke}</p>`
          }
          return joke
        }).join('')
        this.setState({ text }, () => console.log(this.state))
      })
      .catch( err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div>
        <h1>My Super App</h1>
      </div>
    )
  }
}

export default App