import React from 'react'

const ShowChosenItem = ({isShown, sectionDescription, chosenItem, buttonText, currentStateCleaner}) =>{
    return(
        <div className={isShown ? 'show' : 'hide'}>
            <h3>{sectionDescription}: {chosenItem}</h3>
            <button type={'button'} onClick={()=>currentStateCleaner()}>{buttonText}</button>
        </div>
    )
}

export default ShowChosenItem