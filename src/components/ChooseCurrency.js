import React from 'react'
import './ChooseCurrency.scss'

const CurrencyButton = ({currency, currencyHandler}) =>
    <a href={'#'} onClick={currencyHandler}>{currency}</a>

const ChooseCurrency = ({currencyArray, currencyHandler}) =>{
    return(
        <section>
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