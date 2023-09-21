import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { createContext } from 'react';

export const RingContext = createContext('gold');

const Grandpa = () => {

    const ring = 'diamond';
// Module: 56-6: creating Context


    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex grandpa-1'>
                <Father ring={ring} ></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>

    {/* Step 3: Provide the context */}
            <RingContext.Provider value='golden Ring'>
                <section className='flex grandpa-2'>
                    <Father ring={ring} ></Father>
                    <Uncle></Uncle>
                    <Aunty ring={ring}></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;



/**
 * 1. Step 1: Create the context 
 * 2. Create a provider and pass a value 
 * 3. use useContext to receive 
 */