import React, { Component } from 'react'
import Walk from './Walk.gif'

export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Walk} alt="loading" />
      </div>
    )
  }
}

export default spinner
