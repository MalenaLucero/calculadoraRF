import React from 'react'

const ShowChosenItem = ({isShown, sectionDescription, chosenItem, stateHandler}) =>{
    return(
        <div className={isShown ? 'show' : 'hide'}>
            <h3>{sectionDescription}: {chosenItem}</h3>
            <button type={'button'} onClick={()=>stateHandler()}>Retroceder</button>
        </div>
    )
}

export default ShowChosenItem