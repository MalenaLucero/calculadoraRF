import React from 'react'

const Header = ({title, data}) =>{
    return(
        <React.Fragment>
           <h1>{title}</h1> 
           <div>Minimo no imponible de {data.year}: ${data.minimum}</div>
        </React.Fragment>
        
    )
}

export default Header