import React from 'react'

import './styles.css'

import logImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logImg} alt="Be The Hero" />
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  )
}