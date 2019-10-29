import React from 'react'

const InfoButton = ({info}) =>
    <a href={'#'}>{info}</a>

const ChooseAvailableInfo = ({availableInfo}) =>{
    return(
        <section>
          <h2>Paso dos</h2>
          <p>¿Que datos tenés del o de los plazos fijos?</p>
          {availableInfo.map((info, i)=><InfoButton key={i} info={info}/>)}
        </section>
    )
}

export default ChooseAvailableInfo