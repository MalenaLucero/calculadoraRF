import React from 'react';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';
import ChooseCurrency from './components/ChooseCurrency'
import ChooseAvailableInfo from './components/ChooseAvailableInfo'
import ShowCurrentCurrency from './components/ShowCurrentCurrency'
import ShowChosenItem from './components/ShowChosenItem'
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
      currentYear: '',
      currentCurrency: '',
      currentInformation: '',
    }
  }

  currencyHandler = (currency) =>{
    this.setState({currentCurrency: currency})
  }

  changeCurrencyHandler = () =>{
    this.setState({currentCurrency: ''})
  }

  currentInformationHandler = (info) =>{
    this.setState({currentInformation: info})
  }

  changeCurrentInformation = () =>{
    this.setState({currentInformation: ''})
  }


  render(){
    console.log(this.state.currentInformation)
    return(
      <React.Fragment>
        <Header title={this.state.title} data={this.state.taxData[1]}/>
        <ChooseCurrency 
          isShown={this.state.currentCurrency === '' ? true : false}
          currencyArray={this.state.currency} 
          currencyHandler={this.currencyHandler}/>
        <ShowChosenItem
          isShown={this.state.currentCurrency === '' ? false : true}
          sectionDescription={'Moneda del o de los plazos fijos'}
          chosenItem={this.state.currentCurrency}
          stateHandler={this.changeCurrencyHandler}/>
        <ChooseAvailableInfo 
          isShown={this.state.currentCurrency === '' || this.state.currentInformation !== '' ? false : true} 
          availableInfo={this.state.availableInformation}
          currentInformationHandler={this.currentInformationHandler}/>
        <ShowChosenItem
          isShown={this.state.currentInformation === '' ? false : true}
          sectionDescription={'Contás con esta información'}
          chosenItem={this.state.currentInformation}
          stateHandler={this.changeCurrentInformation}/>
      </React.Fragment>
    )
  }
}

export default App;