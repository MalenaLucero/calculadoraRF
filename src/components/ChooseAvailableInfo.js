import React from 'react'

const InfoButton = ({info, currentInformationHandler}) =>
    <button type={'button'} onClick={()=>currentInformationHandler(info)}>{info}</button>

const ChooseAvailableInfo = ({currentSection, currentYear, availableInfo, currentInformationHandler}) =>{
    return(
        <section className={currentSection === 3 ? 'show' : 'hide'}>
          <h2>Paso tres</h2>
          <p>¿Qué datos tenés del o de los plazos fijos de {currentYear}?</p>
          {availableInfo.map((info, i)=><InfoButton key={i} info={info} currentInformationHandler={currentInformationHandler}/>)}
        </section>
    )
}

export default ChooseAvailableInfo