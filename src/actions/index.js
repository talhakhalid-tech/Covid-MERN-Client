import axios from 'axios'
import history from '../history'

export const fetchUser = (token) => async dispatch => {
    const response = await axios.get('http://localhost:5000/users/profile/me',{headers : {
        Authorization: `Bearer ${token}`
    }})
    dispatch({
        type:'FETCH_USER',
        payload: response.data
    })
}

export const updateUser = (data,token) => async dispatch => {
    const response = await axios.patch('http://localhost:5000/users/update/me',data ,{headers : {
        Authorization: `Bearer ${token}`
    }})
    dispatch({
        type: 'UPDATE_USER',
        payload: response.data
    })
    history.push('/dashboard')
}

export const createUser = (data) => async dispatch => {
    try{
        await axios.post('http://localhost:5000/users/register', data)
        alert('Account Successfully Registered!!!')
        history.push('/')
    } catch(error){
        alert('Registration Failed!!!')
    }
}

export const loginUser = (data) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:5000/users/login',data)
        localStorage.setItem('token',response.data)
        if(response.status === 200){
            history.push('/dashboard')
        }
    } catch(error){
        alert('Wrong Credentials!!!')
    }
}

export const deleteUser = (token) => async dispatch => {
    try{
        await axios.delete('http://localhost:5000/users/delete/me',{headers : {
            Authorization: `Bearer ${token}`
        }})
        alert('Profile Successfully deleted!!!')
        history.push('/')
    } catch(error){
        alert('Profile not Deleted!!!')
    }
}