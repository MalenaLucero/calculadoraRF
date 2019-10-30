import React from 'react'

const ShowCurrentCurrency = ({currency, isShown, changeCurrencyHandler}) =>{
    return(
        <div className={isShown ? 'show' : 'hide'}>
            <h3>Moneda de los plazos fijos: {currency}</h3>
            <button type={'button'} onClick={()=>changeCurrencyHandler()}>Cambiar moneda</button>
        </div>
    )
}

export default ShowCurrentCurrency