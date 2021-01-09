import React from 'react';
import './customize.css';
import Cheese from '../../images/ingredients/BaseCheese.png';
import Basil from '../../images/ingredients/Basil.png';
import Mushroom from '../../images/ingredients/Mushroom.png';
import Olive from '../../images/ingredients/Olive.png';
import Pineapple from '../../images/ingredients/Pineapple.png';
import PizzaLogo from '../../images/ingredients/pizza logo.png';
import Base from '../../images/ingredients/PizzaBase.png';
import PMan from '../../images/ingredients/PizzaMan.png';
import Tomato from '../../images/ingredients/Tomato.png';

const Customize = () => {
    return (
        <div className='main-container'>
            
                <div  className='splitscreen'>
                    
                Image

                <div className='pizza-container'>
                    <img className='pizza-base' src={Base} alt='base'></img>
                    <img className='ingredient' src={Cheese} alt='cheese'></img>
                    <img className='ingredient' src={Mushroom} alt='mushroom'></img>
                    <img className='ingredient' src={Tomato} alt='tomato'></img>
                    <img className='ingredient' src={Basil} alt='basil'></img>
                    <img className='ingredient' src={Pineapple} alt='pineapple'></img>


                    </div>    
                    </div>
            <div  className='splitscreen'>Checkout</div>
          
            

        </div>
    )
}

export default Customize

{/*
 <h1>Monte a sua Pizza!</h1>
      <h3>A combinação dos nossos ingredientes e a sua fome!</h3>
      <p>Use a sua criatividade!</p>
*/}