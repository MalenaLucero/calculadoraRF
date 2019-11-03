import React from 'react';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';
import ChooseYear from './components/ChooseYear'
import ChooseCurrency from './components/ChooseCurrency'
import ChooseAvailableInfo from './components/ChooseAvailableInfo'
import ShowChosenItem from './components/ShowChosenItem'
import './App.scss'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      title: 'Calculadora de impuesto a la renta financiera',
      availableYears: [2018, 2019],
      currency: ['pesos', 'dolares'],
      availableInformation: ['Intereses totales', 'Monto total, TNA promedio y plazo total',  'Detalle de monto, TNA y plazo por períodos'],
      taxData: [
        {year: 2018, minimum: 66917, pesosTax: 5, dollarsTax:15},
        {year: 2019, minimum: 104735.77, pesosTax: 5, dollarsTax:15}
      ],
      currentSection: 1,
      currentYear: '',
      currentCurrency: '',
      currentInformation: '',
    }
  }

  currentSectionHandler = (sectionNumber) =>{
    this.setState({currentSection: sectionNumber})
  }

  currentYearHandler = (year) =>{
    this.setState({currentYear: year})
    this.currentSectionHandler(2)
  }

  currencyHandler = (currency) =>{
    this.setState({currentCurrency: currency})
    this.currentSectionHandler(3)
  }

  currentInformationHandler = (info) =>{
    this.setState({currentInformation: info})
    this.currentSectionHandler(4)
  }

  render(){
    return(
      <React.Fragment>
        <Header 
          title={this.state.title} 
          data={this.state.taxData.find(e=>e.year === this.state.currentYear)}/>
        {/*STEP ONE*/}
        <ChooseYear
          currentSection={this.state.currentSection}
          availableYears={this.state.availableYears}
          yearHandler={this.currentYearHandler}/>
        <ShowChosenItem
          isShown={this.state.currentSection > 1 ? true : false}
          sectionDescription={'Año'}
          chosenItem={this.state.currentYear}
          buttonText={'Cambiar año'}
          currentSection={2}
          sectionHandler={this.currentSectionHandler}/>
        {/*STEP TWO*/}
        <ChooseCurrency 
          currentSection={this.state.currentSection}
          currencyArray={this.state.currency} 
          currencyHandler={this.currencyHandler}/>
        <ShowChosenItem
          isShown={this.state.currentSection > 2 ? true : false}
          sectionDescription={'Moneda de los plazos fijos'}
          chosenItem={this.state.currentCurrency}
          buttonText={'Cambiar moneda'}
          currentSection={3}
          sectionHandler={this.currentSectionHandler}/>
        {/*STEP THREE*/}
        <ChooseAvailableInfo 
          currentSection={this.state.currentSection} 
          currentYear={this.state.currentYear}
          availableInfo={this.state.availableInformation}
          currentInformationHandler={this.currentInformationHandler}/>
        <ShowChosenItem
          isShown={this.state.currentSection > 3 ? true : false}
          sectionDescription={'Contás con esta información'}
          chosenItem={this.state.currentInformation}
          buttonText={'Cambiar información'}
          currentSection={4}
          sectionHandler={this.currentSectionHandler}/>
      </React.Fragment>
    )
  }
}

export default App;