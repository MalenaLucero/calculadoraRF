import React from 'react';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';
import ChooseCurrency from './components/ChooseCurrency'
import './App.scss'


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
      currentCurrency: '',
      currentYear: '',
      currentSection: '',
    }
  }

  currencyHandler = (event) =>{
    let newCurrency = event.target.innerText
    this.setState({currentCurrency: newCurrency})
  }

  render(){
    return(
      <React.Fragment>
        <Header title={this.state.title} data={this.state.taxData[1]}/>
        <ChooseCurrency 
          currencyArray={this.state.currency} 
          currencyHandler={this.currencyHandler}
          show={this.state.currentCurrency === '' ? true : false}
        />
      </React.Fragment>
    )
  }
}

export default App;
