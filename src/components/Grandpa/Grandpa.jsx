import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { createContext } from 'react';
import { useState } from 'react';

// Module: 56-6: creating Context for Context API
export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);



const Grandpa = () => {

    const ring = 'diamond';
// state declare for context 2 moneycontext
    const [money, setMoney] = useState (0);
    return (
    // normal with Prop Drilling
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Grandpa money: {money} </p>
            {/* <section className='flex grandpa-1'>
                <Father ring={ring} ></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section> */}

    {/* Step 3: Provide the context */}
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Gold Ring'> {/* any type of value like String, Boolean etc*/}
                    <section className='flex grandpa-2'>
                        <Father ring={ring} ></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;



/**
 * 1. Step 1: Create the context and export
 * 2. Create a provider and pass a value 
 * 3. use useContext to receive 
 */