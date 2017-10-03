import React, { Component } from 'react'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  onChange(e) {
    const { value } = e.target
    const isYes = (value === 'true')
    this.setState({ value: isYes }, () => {
      this.props.onChange(this.state.value)
    })
  }
  render () {
    return (
      <div>
          <select onChange={this.onChange.bind(this)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
      </div>
    )
  }
}

export default Select