import './style.css'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Card() {
  const [user, setUser] = useState()
  useEffect(() => {
    // api
    //   .get('/users/Gilles30')
    //   .then(response => setUser(response.data))
    //   .catch(err => {
    //     console.error('ops! ocorreu um erro' + err);
    // });
  }, [])
  return (
    <div className="card-container">
      <div>
        <img src="./logo512.png" width={'100'} alt="vela" />
      </div>
      <div className="description">
        <p>Nome Produto</p>
        <p>Codigo do produto</p>
        <p>Preço 00,00</p>
      </div>
    </div>
  )
}
