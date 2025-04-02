import { useEffect, useState } from 'react'
import './App.css'

const Weather = () => {

  const API_KEY = "2a6f641e4c0ec37cd05efd6fd332e224"
  const lat = "12.9716"
  const lon = "77.5946"
  const [weatherdata, setWeatherData] = useState({})
  console.log(weatherdata)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`)
        const data = await response.json();
        setWeatherData(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchWeatherData();
  }, [])

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  return (
    <div className='text-white justify-center items-center place-items-center p-5'>
      <div className='flex gap-10'>
        <div className='bg-indigo-100/50 p-5 text-5xl text-blue-700 text-center rounded-3xl'>
          <div><img src="/images/cloud.png" alt="" className='h-50 w-50' /></div>
          <div className='text-sm'><p>PARTLY SUNNY</p></div>
          <div className='mt-5'>{kelvinToCelsius(weatherdata?.main?.temp)?.toFixed(2)} C</div>
          <div className='text-lg flex mt-5'>lat : {(weatherdata?.coord?.lat)} / lon : {(weatherdata?.coord?.lon)}</div>
          <div className='text-lg mt-8'>humidity <div className='text-4xl'>{weatherdata?.main?.humidity}  %</div> </div>
          <div className='text-lg mt-8'>Wind <div className='text-4xl'>{weatherdata?.wind?.speed} Km </div></div>
        </div>
        <div className='bg-indigo-100/50 p-5 text-5xl text-blue-700 text-center rounded-3xl'>
          <div><img src="/images/cloud.png" alt="" className='h-50 w-50' /></div>
          <div className='text-sm'><p>RAINY</p></div>
          <div className='mt-5'>{kelvinToCelsius(weatherdata?.main?.temp)?.toFixed(2)} C</div>
          <div className='text-lg flex mt-5'>lat : {(weatherdata?.coord?.lat)} / lon : {(weatherdata?.coord?.lon)}</div>
          <div className='text-lg mt-8'>humidity <div className='text-4xl'>{weatherdata?.main?.humidity}  %</div> </div>
          <div className='text-lg mt-8'>Wind <div className='text-4xl'>{weatherdata?.wind?.speed} Km </div></div>
        </div>
        <div className='bg-indigo-100/50 p-5 text-5xl text-blue-700 text-center rounded-3xl'>
          <div><img src="/images/cloud.png" alt="" className='h-50 w-50' /></div>
          <div className='text-sm'><p>PARTLY SUNNY</p></div>
          <div className='mt-5'>{kelvinToCelsius(weatherdata?.main?.temp)?.toFixed(2)} C</div>
          <div className='text-lg flex mt-5'>lat : {(weatherdata?.coord?.lat)} / lon : {(weatherdata?.coord?.lon)}</div>
          <div className='text-lg mt-8'>humidity <div className='text-4xl'>{weatherdata?.main?.humidity}  %</div> </div>
          <div className='text-lg mt-8'>Wind <div className='text-4xl'>{weatherdata?.wind?.speed} Km </div></div>
        </div>
        <div className='bg-indigo-100/50 p-5 text-5xl text-blue-700 text-center rounded-3xl'>
          <div><img src="/images/cloud.png" alt="" className='h-50 w-50' /></div>
          <div className='text-sm'><p>WINDY</p></div>
          <div className='mt-5'>{kelvinToCelsius(weatherdata?.main?.temp)?.toFixed(2)} C</div>
          <div className='text-lg flex mt-5'>lat : {(weatherdata?.coord?.lat)} / lon : {(weatherdata?.coord?.lon)}</div>
          <div className='text-lg mt-8'>humidity <div className='text-4xl'>{weatherdata?.main?.humidity}  %</div> </div>
          <div className='text-lg mt-8'>Wind <div className='text-4xl'>{weatherdata?.wind?.speed} Km </div></div>
        </div>
      </div>
    </div>
  )
}

export default Weather
