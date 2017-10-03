import React, { Component } from 'react'

class Output extends Component {
  
  render () {
    return (
      <div className='output'>
        { this.props.value }
      </div>
    )
  }
}

export default Output