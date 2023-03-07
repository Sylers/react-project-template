import React, { useEffect, useContext } from 'react'
import { getRequest, getRequestWithHeaders } from '../api/api'
import FormInput from '../components/Form/FormInput'
import FormSelect from '../components/Form/FormSelect'
import FormTextArea from '../components/Form/FormTextArea'

const Dashboard = () => {
    useEffect(() => {
        getRequestWithHeaders('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', 'get',  {
            'X-RapidAPI-Key': '0a8a7fc44dmsh7608d40db4863f4p151d15jsn31a72af5ee79',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        })
    }, [])
  return (
    <div>
      Dashboard
      <div>Form Component Sample:</div>
      <FormSelect name='inputname' value={''} className='' options={['first','second','third']} onChange={()=>''}/><br />
      <FormInput name='inputname' value={''} className='' placeholder={'e.g placeholder'} onChange={()=>''}/><br/>
      <FormTextArea onChange={()=>''} className='' value={''}/>
    </div>
  )
}

export default Dashboard