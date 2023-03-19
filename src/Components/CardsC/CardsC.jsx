import React from 'react'
import './CardsC.scss'
import products from '../../Data/products.json'

const CardsC = () => {

  return (
    <div className="cards-c">
     
      {
        products.map(product => {
            return (
              <div key={product.id} className="card">
                <h2>{product.name}</h2>
                <p>{product.name}</p>
                <button>Buy now</button>
              </div>
            );
        })
      }

     
     
    </div>
  );
}

export default CardsC