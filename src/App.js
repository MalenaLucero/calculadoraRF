import React from 'react';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';
import ChooseCurrency from './components/ChooseCurrency'
import ChooseAvailableInfo from './components/ChooseAvailableInfo'
import './App.scss'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      title: 'Calculadora de impuesto a la renta financiera',
      currency: ['pesos', 'dolares'],
      availableInformation: ['Intereses totales', 'Monto total, TNA promedio y plazo total',  'Detalle de monto, TNA y plazo por períodos'],
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
        <ChooseAvailableInfo availableInfo={this.state.availableInformation}/>
      </React.Fragment>
    )
  }
}

export default App;
