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
import { motion } from 'framer-motion';
import {useHistory} from 'react-router-dom';

const Customize = ({ ingredients, setIngredients }) => {

    let history = useHistory();

    const onChange = (event, name) => {
        
        localStorage.clear();
        
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        //toggle ingredient

        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem('ingredients', JSON.stringify(newIngredients));
        console.log(localStorage);
    }

    return (
        <div className='main-container'>
            {/* {JSON.stringify(ingredients)};  */}
            <div className='splitscreen bgdark'>

                <div className='pizza-container'>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                           // y: ingredients['cheese'] ? 0 : -100,
                           // opacity: ingredients['cheese'] ? 1 : 0,

                           scale: ingredients['cheese'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z1'


                    >
                        <img src={Cheese} alt='cheese' height='100%' width='100%'></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['olive'] ? 0 : -100,
                            opacity: ingredients['olive'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z2'


                    >
                        <img src={Olive} alt='azeitona' height='100%' width='100%'></img>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['mushroom'] ? 0 : -100,
                            opacity: ingredients['mushroom'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z3'>
                        <img src={Mushroom} alt='mushroom' height='100%' width='100%'></img>
                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['tomato'] ? 0 : -100,
                            opacity: ingredients['tomato'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z3'>
                        <img src={Tomato} alt='tomato' height='100%' width='100%'></img>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['basil'] ? 0 : -100,
                            opacity: ingredients['basil'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z4'
                    >
                        <img src={Basil} alt='basil' height='100%' width='100%'></img>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients['pineapple'] ? 0 : -100,
                            opacity: ingredients['pineapple'] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className='ingredient z4'
                    >
                        <img src={Pineapple} alt='pineapple' height='100%' width='100%'></img>
                    </motion.div>

                    <img className='pizza-base' src={Base} alt='base'></img>
                </div>
            </div>
            <div className='splitscreen recipebg'>


                <div className='opcoes'>
                    <div
                    className='cardapio-titulo'                
                >Recheie a sua pizza!</div>
                    {/*Cheese */}

                    <input className='formzinho' type="checkbox" id="queijo" name="queijo" value="queijo" onChange={(event) => onChange(event.currentTarget.checked, 'cheese')} />
                    <label for="cheese" classname='opcoes'> Queijo</label><br></br>




                    {/* Mushroom */}

                    <input className='formzinho' type="checkbox" id="cogumelo" name="cogumelo" value="cogumelo" onChange={(event) => onChange(event.currentTarget.checked, 'mushroom')} />
                    <label for="mushroom" classname='opcoes'> Cogumelo</label><br></br>

                    {/*Pineapple */}

                    <input className='formzinho' type="checkbox" id="pineapple" name="pineapple" value="pineapple" onChange={(event) => onChange(event.currentTarget.checked, 'pineapple')} />
                    <label for="pineapple" classname='opcoes'> Abacaxi</label><br></br>

                    {/*Basil */}

                    <input className='formzinho' type="checkbox" id="manjericao" name="manjericao" value="manjericao" onChange={(event) => onChange(event.currentTarget.checked, 'basil')} />
                    <label for="basil" classname='opcoes'> Manjericão</label><br></br>


                    {/* Olive */}

                    <input className='formzinho' type="checkbox" id="azeitona" name="azeitona" value="azeitona" onChange={(event) => onChange(event.currentTarget.checked, 'olive')} />
                    <label for="olive" classname='opcoes'> Azeitona</label><br></br>

                    {/*Pineapple */}

                    <input className='formzinho' type="checkbox" id="tomate" name="tomate" value="tomate" onChange={(event) => onChange(event.currentTarget.checked, 'tomato')} />
                    <label for="tomato" classname='opcoes'> Tomate</label><br></br>
                
                </div>
<button  className='cardapio-button'
onClick={()=>history.push('/checkout')}
>Confirmar!</button>




            </div>




        </div>
    )
}

export default Customize

{/*
 <h1>Monte a sua Pizza!</h1>
      <h3>A combinação dos nossos ingredientes e a sua fome!</h3>
      <p>Use a sua criatividade!</p>
*/}