import React from 'react'

const InfoButton = ({info, currentInformationHandler}) =>
    <button type={'button'} onClick={()=>currentInformationHandler(info)}>{info}</button>

const ChooseAvailableInfo = ({availableInfo, isShown, currentInformationHandler}) =>{
    return(
        <section className={isShown ? 'show' : 'hide'}>
          <h2>Paso dos</h2>
          <p>¿Qué datos tenés del o de los plazos fijos del año?</p>
          {availableInfo.map((info, i)=><InfoButton key={i} info={info} currentInformationHandler={currentInformationHandler}/>)}
        </section>
    )
}

export default ChooseAvailableInfo