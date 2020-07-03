import axios from 'axios'

const url ="https://covid19.mathdro.id/api";


export const fetchData = async(country) =>{
   let chnageableUrl = url;
   if(country){
       chnageableUrl=`${url}/countries/${country}`
   }

    try {
        
     // const {data} = await axios.get(url)
        //   const modifiedData= {
        //       confirmed:data.confirmed,
        //       recoverd:data.recoverd,
        //       deaths:data.deaths,
        //       lastUpdate:data.lastUpdate
        //   }

        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(chnageableUrl)
        //   const modifiedData= {
        //       confirmed,
        //       recoverd,
        //       deaths,
        //       lastUpdate
        //   }
        return  {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

    } catch (error) {
        
    }
} 

export const fetchDailyData =async () =>{
    try {
        const {data} = await axios.get(`${url}/daily`);
       const modifiedData = data.map((dailyData) =>({
           confirmed:dailyData.confirmed.total,
           deaths:dailyData.deaths.total,
           date:dailyData.reportDate
       }));
       return modifiedData
    } 
    catch (error) {
        
    }
    
}

export const fetchCountries = async()=>{
    try {
        const {data:{countries}}= await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)
    } catch (error) {
        console.log(error)
        
    }
}