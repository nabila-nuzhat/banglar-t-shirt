import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    // for money context 
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><h6>money from grandpa: {money} </h6></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000 tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;