import React from 'react'
import './ChooseCurrency.scss'

const CurrencyButton = ({currency, currencyHandler}) =>
    <button type={'button'} onClick={()=>currencyHandler(currency)}>{currency}</button>

const ChooseCurrency = ({currentSection, currencyArray, currencyHandler}) =>{
    return(
        <section className={currentSection === 2 ? 'show' : 'hide'}>
            <h2>Paso dos</h2>
            <p>Elegir la moneda de los plazos fijos</p>
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