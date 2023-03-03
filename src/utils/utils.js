export const  getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token')
    return token ? token : null;
}
export const  saveTokenToLocalStorage = (token) => {
    return localStorage.setItem('token', `Bearer ${token}`) ? true : false
}
export const  removeTokenFromLocalStorage = () => {
    return localStorage.removeItem('token') ? true : false
}
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
}
export const saveUserToLocalStorage = (user) => {
    return localStorage.setItem('user', JSON.stringify(user)) ? true : false
    
}
export const removeUserFromLocalStorage = () => {
    return localStorage.remobe('user') ? true : false
}