import React from 'react'

const FormTextArea = ({id, name, value, className, onChange, children, defaultValue, ...rest}) => {
  return (
    <textarea 
      id={id || ''} 
      name={name || ''} 
      onChange={onChange} 
      className={className || 'default-class-name'} {...rest}
      value={value || ''}
    >
    </textarea>
  )
}

export default FormTextArea