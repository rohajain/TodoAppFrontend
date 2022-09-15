import Axios from "axios";
import { API_URL } from '../../Constants'

export const USER_SESSION_NAME = 'authenticatedUser'

class AuthenticationService {


    executeBasicAuthenticationService(username, password) {
        return Axios.get(`${API_URL}/basicauth`, 
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username, password) {

        console.log(`${API_URL}`)
        return Axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }



    createBasicAuthToken(username,password) {
        return 'Basic ' + window.btoa(username+":"+password)
    }
    
    createJwtToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username,password){


        console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_SESSION_NAME, username);
        this.setupAxiosIntercepters(this.createBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJwt(username,token){


        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_SESSION_NAME, username);
        this.setupAxiosIntercepters(this.createJwtToken(token))
    }



    logout() {
        sessionStorage.removeItem(USER_SESSION_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return false
        return true
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem(USER_SESSION_NAME)
        if(user===null) return ''
        return user
    }

    setupAxiosIntercepters(basicAuthHeader)
    {
        Axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn())
                {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}
export default new AuthenticationService()