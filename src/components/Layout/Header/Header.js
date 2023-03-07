import React, { useContext } from 'react'
import ThemeContext from '../../../context/themeContext'

const Header = ({name, ...rest}) => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      Header
      <button onClick={toggleTheme}>Toggle Theme</button>
      <span>{ isDarkTheme ? 'DarkTheme' : 'LightTheme'}</span>
    </div>
  )
}

export default Header