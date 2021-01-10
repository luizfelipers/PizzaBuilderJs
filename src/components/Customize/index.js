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

const Customize = ({ ingredients, setIngredients }) => {

    const onChange = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        //toggle ingredient

        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem('ingredients', JSON.stringify(newIngredients));

    }

    return (
        <div className='main-container'>
       {/* {JSON.stringify(ingredients)};  */}
            <div className='splitscreen'>

                <div className='pizza-container'>

                    <img className='ingredient' src={Cheese} alt='cheese'></img>
                    <img className='ingredient' src={Mushroom} alt='mushroom'></img>
                    <img className='ingredient' src={Tomato} alt='tomato'></img>
                    <img className='ingredient' src={Basil} alt='basil'></img>
                    <img className='ingredient' src={Pineapple} alt='pineapple'></img>


                    <img className='pizza-base' src={Base} alt='base'></img>
                </div>
            </div>
            <div className='splitscreen'>
                {/*Cheese */}

                <input className='formzinho' type="checkbox" id="queijo" name="queijo" value="queijo" onChange={(event) => onChange(event.currentTarget.checked, 'cheese')} />
                <label for="cheese"> Queijo</label><br></br>


                {/* Mushroom */}

                <input className='formzinho' type="checkbox" id="cogumelo" name="cogumelo" value="cogumelo" onChange={(event) => onChange(event.currentTarget.checked, 'mushroom')} />
                <label for="mushroom"> Cogumelo</label><br></br>
                
                {/*Pineapple */}

                <input className='formzinho' type="checkbox" id="pineapple" name="pineapple" value="pineapple" onChange={(event) => onChange(event.currentTarget.checked, 'pineapple')} />
                <label for="pineapple"> Abacaxi</label><br></br>

                 {/*Basil */}

                 <input className='formzinho' type="checkbox" id="manjericao" name="manjericao" value="manjericao" onChange={(event) => onChange(event.currentTarget.checked, 'basil')} />
                <label for="basil"> Manjericão</label><br></br>


                {/* Olive */}

                <input className='formzinho' type="checkbox" id="azeitona" name="azeitona" value="azeitona" onChange={(event) => onChange(event.currentTarget.checked, 'olive')} />
                <label for="olive"> Azeitona</label><br></br>
                
                {/*Pineapple */}

                <input className='formzinho' type="checkbox" id="tomate" name="tomate" value="tomate" onChange={(event) => onChange(event.currentTarget.checked, 'tomato')} />
                <label for="tomato"> Tomate</label><br></br>


            </div>

            {JSON.stringify(ingredients)};
        </div>
    )
}

export default Customize

{/*
 <h1>Monte a sua Pizza!</h1>
      <h3>A combinação dos nossos ingredientes e a sua fome!</h3>
      <p>Use a sua criatividade!</p>
*/}