import { json } from "react-router-dom";

const API_AUTH_URL="http://localhost:8080/apiauth/authenticate";

class AuthService
{
    login (username, password){

      //localStorage.removeItem("user")

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

            try {
            const error =   JSON.parse(result ) 
            localStorage.setItem("user", JSON.stringify({token: JSON.parse(result)}))
              console.info("Try Part")
            } catch (error) {
              localStorage.setItem("user", JSON.stringify({token: result}))        
              console.info("Error Part")
            }

           
        })
          .catch(error => {        
             localStorage.setItem("user", JSON.stringify( 
               { 
                  state:true,
                  msg:error
                }
             ))    
            console.log('error', error)
        });
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