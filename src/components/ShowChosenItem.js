import React from 'react'

const ShowChosenItem = ({isShown, sectionDescription, chosenItem, buttonText, currentSection, sectionHandler}) =>{
    let previousSection = currentSection - 1
    return(
        <div className={isShown ? 'show' : 'hide'}>
            <h3>{sectionDescription}: {chosenItem}</h3>
            <button type={'button'} onClick={()=>sectionHandler(previousSection)}>{buttonText}</button>
        </div>
    )
}

export default ShowChosenItem