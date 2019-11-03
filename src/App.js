import React from 'react';
import { Formik, Field, Form } from 'formik';
import Header from './components/Header'
import TaxPercentage from './helpers/TaxPercentage'
import InterestPercentage from './helpers/InterestPercentage';
import ShowChosenItem from './components/ShowChosenItem'
import Section from './components/Section'
import './App.scss'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      title: 'Calculadora de impuesto a la renta financiera',
      sections:[
        {number: 1, type: 'year', title: 'Paso uno', description: '¿De qué año querés calcular el impuesto?', options: [2018, 2019]},
        {number: 2, type: 'currency', title: 'Paso dos', description: '¿En que moneda estan los plazos fijos?', options: ['pesos', 'dolares']},
        {number: 3, type: 'information', title: 'Paso tres', description: '¿Qué datos tenés de los plazos fijos', options: ['Intereses totales', 'Monto total, TNA promedio y plazo total',  'Detalle de monto, TNA y plazo por períodos']}
      ],
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

  yearHandler = (year) =>{
    this.setState({currentYear: year})
    if(this.state.currentSection === 1) this.currentSectionHandler(2)
  }

  currentStateCleaner = () =>{
    this.setState({currentYear: ''})
  }

  currencyHandler = (currency) =>{
    this.setState({currentCurrency: currency})
    if(this.state.currentSection === 2) this.currentSectionHandler(3)
  }

  currencyCleaner = () =>{
    this.setState({currentCurrency: ''})
  }

  informationHandler = (info) =>{
    this.setState({currentInformation: info})
    if(this.state.currentSection === 3) this.currentSectionHandler(4)
  }

  informationCleaner = () =>{
    this.setState({currentInformation: ''})
  }

  render(){
    console.log(this.state.currentCurrency)
    return(
      <React.Fragment>
        <Header 
          title={this.state.title} 
          data={this.state.taxData.find(e=>e.year === this.state.currentYear)}/>
        {/*STEP ONE*/}
        <Section
          sectionData={this.state.sections[0]}
          isShown={this.state.currentYear === '' ? true : false}
          currentStateHandler={this.yearHandler}/>
        <ShowChosenItem
          isShown={this.state.currentYear !== '' ? true : false}
          sectionDescription={'Año'}
          chosenItem={this.state.currentYear}
          buttonText={'Cambiar año'}
          currentStateCleaner={this.currentStateCleaner}/>
        {/*STEP TWO*/}
        <Section
          sectionData={this.state.sections[1]}
          isShown={this.state.currentCurrency === '' && this.state.currentSection > 1 ? true : false}
          currentStateHandler={this.currencyHandler}/>
        <ShowChosenItem
          isShown={this.state.currentCurrency !== '' ? true : false}
          sectionDescription={'Moneda'}
          chosenItem={this.state.currentCurrency}
          buttonText={'Cambiar moneda'}
          currentStateCleaner={this.currencyCleaner}/>
        {/*STEP THREE*/}
        <Section 
         sectionData={this.state.sections[2]}
         isShown={this.state.currentInformation === '' && this.state.currentSection > 2 ? true : false}
         currentStateHandler={this.informationHandler}/>
        <ShowChosenItem
          isShown={this.state.currentInformation !== '' ? true : false}
          sectionDescription={'Información de los plazos fijos'}
          chosenItem={this.state.currentInformation}
          buttonText={'Cambiar datos'}
          currentStateCleaner={this.informationCleaner}/>
      </React.Fragment>
    )
  }
}

export default App;