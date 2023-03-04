import React from 'react'

const FormInput = ({id, name, type, value, placeholder, className, showPassword, ...rest}) => {
  return (
    <input 
        id={id}
        name={name || ''}
        placeholder={placeholder}
        value={value || ''}
        type={showPassword ? 'text' : type || 'text'}
        className={className ? className : 'default-input-class'}
        {...rest}
    />
  )
}

export default FormInput