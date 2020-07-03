import React, { useState,useEffect,setState, Component } from 'react'
import Cards from './Components/Cards/Cards'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import Charts from './Components/Charts/Charts'
import styles from './App.module.css'
import { fetchData } from './api'
import image from './images/image.png'


// const App = () => {

//   const [data,setData]=useState({})
//   const [country,setCountry] = useState('')


//   useEffect(() => {
//     const fetching = async()=>{
     
//     setData(await fetchData())}
//     fetching();
    
//   }, [])


//   const handleCountryChange = async(country)=>{
//    const data = await fetchData(country);
//    setCountry(country)

//    setData(data)
//  }
//    return (
//     <div className={styles.container}>
//     <img className={styles.image}  src={image}/>
//       <Cards data={data}></Cards>
       
//        <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker> 
      
//       <Charts data={data} country={country}></Charts>
//     </div>
//   )
// }

// export default App




export class App extends Component {
 

  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})

    console.log(this.state.data)
  }

  handleCountryChange = async(country)=>{
   const data = await fetchData(country);

 this.setState({data:data,country:country})
  }


  render() {
    return (
      <div className={styles.container}>
      <img className={styles.image}  src={image}/>
        <Cards data={this.state.data}></Cards>
         
         <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker> 
        
        <Charts data={this.state.data} country={this.state.country}></Charts>
      </div>
    )
  }
}

export default App
