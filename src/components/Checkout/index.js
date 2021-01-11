import React, { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import PizzaMan from '../../images/ingredients/PizzaMan.png'

const Checkout = ({ ingredients }) => {

    const [success, setSuccess] = useState(false);

    const history = useHistory();



    return (
        <div className='container' >
            <div  >

                <h1>Pagamento</h1>
           
                <h3>Ótimas escolhas!</h3>
            </div>
            <div>


                <h4>Ingredientes</h4>

            {/* Filtra apenas os sabores com state true (Sabores selecionados)  */}

                {Object.keys(ingredients).filter(function(k){return ingredients[k]}).map((ingredient) => {
                    return (
                       <li>
                           {ingredient.toLocaleUpperCase()}
                       </li>
                      

                    );
                })}
            </div>


            <div>


                <h4>Preço Total</h4>
                <p>R$ 5churrasqueiras,99</p>
                <button onClick={() => setSuccess(true)}>Confirmar pagamento!</button>
            <button onClick={() => history.push('/')}>Voltar</button>
            </div>


            


            <div>

                {success && (
                    <div style={{ textAlign: 'center' }}>
                        <img src={PizzaMan} alt='pizzaman' height='200px'></img>
                        <div style={{ fontFamily: 'Open Sans Condensed', fontSize: 30 }}>
                            Nós recebemos o seu pedido!
                 </div>
                        <div style={{ fontFamily: 'Comfortaa' }}>
                            Order #{Math.round(Math.random() * 100000)}
                        </div>
                        <div style={{ fontFamily: 'Indie Flower', fontSize: 20 }}>
                            Ficará pronta em até 24 horas! =)
                 </div>
                    </div>
                )}
                
            </div>

        </div>
    )
}

export default Checkout
