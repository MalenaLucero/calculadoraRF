import React from 'react';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      title: 'Calculadora de impuesto a la renta financiera',
      currency: ['pesos', 'dolares'],
      sections: ['Monto total, TNA promedio y plazo', 'Intereses totales anuales', 'Monto, TNA y plazo por periodos'],
      taxData: [
        {year: 2018, minimum: 66917, pesosTax: 5, dollarsTax:15},
        {year: 2019, minimum: 104735.77, pesosTax: 5, dollarsTax:15}
      ],
      currentState:{
        currentCurrency: '',
        currentYear: '',
        currentSection: '',
      }
    }
  }
  render(){
    let totalAmount = 300000
    let taxPercentage = 5
    let interestRate = 50
    let interesesTotales= 150000
    return(
      <React.Fragment>
        <Header title={this.state.title} data={this.state.taxData[1]}/>
      </React.Fragment>
    )
  }
}

export default App;
