import React from 'react'
import './style.css'

const Checkout = ({ingredients}) => {
    return (
        <div className='container'>
            <h1>Pagamento</h1>
            <h2>Pague muito dinheiro!!</h2>

            <div>
                <h3>Ótimas escolhas!</h3>
                <h4>Ingredientes</h4>
                {Object.keys(ingredients).map((ingredient) => {
                    return (
                        <p>{ingredient}</p>
                    );
                })}

                <h4>Preço Total</h4>
                <p>R$ 5churrasqueiras,99</p>
            </div>
            
           {/*
           <button>Confirmar pagamento!</button>
           */} 
        </div>
    )
}

export default Checkout
