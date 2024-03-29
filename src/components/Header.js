import React from 'react'
import './Header.scss'

const Header = ({title, data}) =>{
    return(
        <React.Fragment>
           <h1>{title}</h1> 
           {data && <div>Minimo no imponible de {data.year}: ${data.minimum}</div>}
        </React.Fragment>
        
    )
}

export default Header