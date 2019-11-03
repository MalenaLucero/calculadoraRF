import React from 'react'

const Section = ({isShown, sectionData, currentStateHandler}) =>{
    let {title, description, options} = sectionData
    return(
        <section className={isShown ? 'show' : 'hide'}>
            <h2>{title}</h2>
            <p>{description}</p>
            {options.map((e, i)=><button key={i} onClick={()=>currentStateHandler(e)}>{e}</button>)}
        </section>
    )
}

export default Section