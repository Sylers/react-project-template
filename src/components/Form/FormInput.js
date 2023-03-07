import React from 'react'

const FormInput = ({id, name, type, value, placeholder, className, onChange, showPassword, autoComplete, ...rest}) => {
  return (
    <input 
        id={id || ''}
        name={name || ''}
        placeholder={placeholder}
        value={value || ''}
        type={showPassword ? 'text' : type || 'text'}
        className={className ? className : 'default-input-class'}
        autoComplete={autoComplete}
        onChange={onChange}
        {...rest}
    />
  )
}

export default FormInput