import React from 'react'
import './ChooseCurrency.scss'

const CurrencyButton = ({currency, currencyHandler}) =>
    <button type={'button'} onClick={()=>currencyHandler(currency)}>{currency}</button>

const ChooseCurrency = ({currencyArray, currencyHandler, isShown}) =>{
    return(
        <section className={isShown ? 'show' : 'hide'}>
            <h2>Paso uno</h2>
            <p>Elegir la moneda del plazo fijo</p>
            <div>
                {currencyArray.map((curr, i) =>
                    <CurrencyButton 
                        key={i} 
                        currency={curr} 
                        currencyHandler={currencyHandler}
                    />)
                }
            </div>
        </section>
    )
}

export default ChooseCurrency