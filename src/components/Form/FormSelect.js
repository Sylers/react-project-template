import React from 'react'

const FormSelect = ({id, name, value, defaultValue, options=[], multiple, onChange, ...rest}) => {
    /*
        Note: the 'options' props must come in this structure
        options = [ '', '', '']

        OR

        options = [
            {key: '', value: ''}
        ]
    */
   
  return (
    <select
        {...rest}
        id={id || ''}
        value={value || ''}
        name={name || ''}
        multiple={multiple || false}
        onChange={onChange}
    >
        {options[0] && Array.isArray(options) ? options.map((option, index) => {
            return (<option value={option} key={index}>{option}</option>)
        })
         : options.map((option, index) => <option value={option?.key} key={index}>{option?.value}</option>
        )}
    </select>
  )
}

export default FormSelect