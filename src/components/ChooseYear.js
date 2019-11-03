import React from 'react'

const ChooseYear = ({currentSection, availableYears, yearHandler}) =>{
    return(
        <section className={currentSection === 1 ? 'show' : 'hide'}>
            <h2>Paso uno</h2>
            <p>¿De qué año querés calcular el impuesto?</p>
            {availableYears.map((year, i)=><button key={i} onClick={()=>yearHandler(year)}>{year}</button>)}
        </section>
    )
}

export default ChooseYear