import React from 'react'

const Button = ({id, type, label, onClick, icon, iconClassName, className, disabled, ...rest}) => {
  return (
    <button 
        id={id || ''} 
        className={className || 'default-button-class' } 
        onClick={onClick || function(){}}
        type={type || 'button'}
        disabled={disabled}
    >
        {label} {icon && <i className={iconClassName || 'default-icon-class'}>{icon}</i>}
    </button>
  )
}

export default Button