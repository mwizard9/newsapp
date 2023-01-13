import React, { Component } from 'react'
import Walk from './Walk.gif'

const spinner = () =>{ 
    return (
      <div className="text-center">
        <img src={Walk} alt="loading" />
      </div>
    )
}

export default spinner
