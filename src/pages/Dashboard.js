import React, { useEffect } from 'react'
import { getRequest, getRequestWithHeaders } from '../api/api'
import FormSelect from '../components/Form/FormSelect'

const Dashboard = () => {
    useEffect(() => {
        getRequestWithHeaders('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', 'get',  {
            'X-RapidAPI-Key': '0a8a7fc44dmsh7608d40db4863f4p151d15jsn31a72af5ee79',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        })
    }, [])
  return (
    <div>Dashboard
        <FormSelect id='id' value='' options={['a','b','c']} onChange={()=>''}/>
    </div>
  )
}

export default Dashboard