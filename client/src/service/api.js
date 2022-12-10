import axios from 'axios'

const URL = `http://localhost:8000`

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async(user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log(`Error while calling Login API:`, error)
        return error.response;
    }
}

export const payUsingPaytm = async(data) => {
 try {
    const response = await axios.post(`${URL}/payment`, data)
    console.log(response)
    return response.data
 } catch (error) {
    console.log('Error while calling Payment API...')
 }
}