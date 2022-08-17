import axios from 'axios'
import React, { useEffect, useState } from 'react'
import imag1 from '../img/61cc17bd92cff408ff7ad2996d59d37b.jpg'
import imag2 from '../img/30627f237982b80399f5d2db0c8daeeea38a5950.jpeg'

export default function Home() {
    
    let [forecast,setForecast]=useState([])
    let [image,setImage]=useState([])
    let[current,setCurrent]=useState('')
    let[country,setCountry]=useState('')
    let[ctime,setCtime]=useState()
    let[name,setName]=useState('')
    let[date,setDate]=useState('')
    let [day ,setDay]=useState('')
    let[text,setText]=useState('')
    let[value,setValue]=useState('auto:ip')

    
    async function getData(){
        let {data}=await axios.get('https://api.weatherapi.com/v1/forecast.json?key=f40e1c084e714c1ab15185837221706&q='+value+'&days=3')
        console.log(data)
        
        setForecast(data.forecast.forecastday)
        setCurrent(data.current.temp_c)
        setCountry(data.location.country)
        setName(data.location.name)
        
        
        
        setDate(data.current.last_updated)
        
        
        

        setImage(data.current.condition.icon)
        setText(data.current.condition.text)
    }
    
    async function search(e){
        
        setValue(e.target.value)
        getData()
        
        
        
    }
    function current_time(){
        let today = new Date();
        let time = today.toLocaleTimeString();
        setCtime(time)
        
    }
    function cday(){
        let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric", year:"numeric"});
        setDay(now)
        console.log(now)
    }
    setInterval(current_time,1000)

    useEffect(()=>{
        getData()
        cday()
    },[])
//     let dayName = new Date().toLocaleDateString('en-us', { weekday:"long"})
// console.log(dayName);
    
  return (
    <>
        <div className='image' style={{backgroundImage:`url(${imag1})`}}>
        
            
        
        <div className="row vh-100 text-white">
    
    <div className="col-md-8">
        <div className='p-5 h-100 po'>
            
        <div className="col-md-12">
        <div className="city my-2">
            
            <h2 className='m-0'>{name}</h2>
            <p className=' m-0  fw-bold fs-4'>{country}</p>
            
            
            </div>
                </div>
            
            
            <div className='row info text-white'>
                <div className="col-md-8">
                <div className="date  ">
                <h1>{ctime}</h1>
                <h1>{day}</h1>
            </div>
                </div>
            <div className="col-md-4">
            <div className="weather">
            <h1>{current}</h1>
            <div>
            <h3>{text}</h3>
            
            </div>
            
            </div>
            </div>
            </div>
            <div>
            
            </div>
            
            
            
        </div>
    </div>
    <div className="col-md-4 color">
        <div className="col-md-12">
        <div className='d-flex justify-content-center py-5'>
        <form className=' w-50'>
                <input type="text"  onChange={(event)=>{search(event)}} className='w-100 rounded-3 text-dark' />
        </form>
             
        </div>
        </div>
        {forecast.slice(1,3).map((data ,i)=>{
            return <div className="col-md-12 px-5 my-5 " key={i}>
 <div className='bg-white rounded-3 shadow text-dark text-center'>
     <div className="day text-dark p-3 fw-bold">
         <p className='text-dark text-start'>{data.date}</p>
     </div>
     <div className="degree">
     <h1 className=" my-3">{data.day.maxtemp_c}</h1>
     
     <div className=" py-3">
        
        <div className="  my-2 v px-4 fw-bold fs-3">
        <i className="fas fa-wind " ></i> 
        <p className='p-0 m-0 px-3 '>{data.day.maxwind_kph} km/h</p>
        
        </div>
        <div className=" v px-4 fw-bold fs-3 py-2">
        
        <i class="fa-solid fa-droplet"></i>
        <p className='p-0 m-0 px-3'>{data.day.daily_will_it_rain} %</p>
        
        
        
        
     
         
     </div>
     
     </div>
     
     </div>
 </div>    
</div>   
        })}
       
             
    </div>


</div>
       
            
        
    

        
            
{/* <div className=' q '>
    <div className='form'>
    
    </div>
    

    <div className="row">
        <div className="col-md-6">
            <div className='p-5 mx-5'>
            <h2>{name}</h2>
            <p className='pt-3 m-0  fw-bold fs-4'>{country}</p>
            <div className='info'>
            <p className='fs-1 fs-bold'>Partly cloudy</p>
            <img className='e ' src={image} alt="" />
            </div>
            
            
            
            </div>
            
        </div>
        <div className="col-md-6">
            <div className='px-5 mx-5'>
            <h2 className='n '>{current}</h2>
            <p className='py-3 fw-bold fs-2'>{days}</p>
            </div>
            
        </div>
        {forecast.slice(1,3).map((days,i)=>{

        return <div className="col-md-6">
            <div className='d-flex just py-5'>
                <div className='bg-info p-3 rounded-3 shadow-lg'>
                <div className='px-5 mx-5 '>
                    <h2>Thursday</h2>
                    
                    <img src={days.day.condition.icon} alt="" />
                    <h2 className='text-dark text-center'>{days.day.maxtemp_c}</h2>
                </div>
            
            </div>
            
            </div>
    
        </div>

})}
    </div>
    
</div> */}


</div>
        
      
            
            
                               
            
            
                                
                        
                    
                   
            
        
    
    </>
  )
}
