
const API_AUTH_URL="http://localhost:8080/apiauth/authenticate";

class AuthService
{
    login (username, password){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email":username,
          "password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch(API_AUTH_URL, requestOptions)
          .then(response => response.text())
          .then(result => {
            localStorage.setItem("user", result)    
        })
          .catch(error => console.log('error', error));
    }

    logout(){
        return localStorage.removeItem("user");       
    }
// register
    getCurrentUser(){
        const token=localStorage.getItem("user")
        if(token){
            return  {token : token}
        }
        return null
    }
}

// a new instance of the service will be create 
// kind of a factory pattern
export default new AuthService();