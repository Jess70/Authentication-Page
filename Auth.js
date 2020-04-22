import React , { Component }from 'react';
import './Auth.css'
import Axios from 'axios'
//import { NavLink } from 'react-router-dom'

class Auth extends Component{
      state={
        signUp: true,
        data :{
          email : null,
          password : null,
          returnSecureToken : true
        },
       // direct: false,
        username: false
        
      }
      
    
      checkValidity(value, rules) {
        let isValid = true;
    
        if (rules.required) {
          isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.minLength) {
          isValid = value.length >= rules.minLength && isValid;
        }
    
        if (rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid;
        }
    
        return isValid;
      };
    
      handleInputChange = (event, inputIdentifier) => {
        let updatedData = { ...this.state.Data };
        let updatedElement = { ...updatedData[inputIdentifier] };
        updatedElement = event.target.value;
        updatedData[inputIdentifier] = updatedElement;
    
        this.setState({ data : updatedData});
        }
      signUpHandler=()=>{
        let what = this.state.signUp
        what= !what;
        this.setState({
          signUp: what,
          username: true
        
        });
        console.log("[HandlerOuter]")

      }
      submitHandler=()=>{
        console.log("hi")
        this.setState({direct : true})
        if(this.state.signUp){
          console.log("Submitted")
          Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCAnMqqvwJM73EdwUHMcmhLINtLg2NI9Rg]',this.state.data)
          .then(res=>{
            console.log(res)
           }   
          ).catch(function (error) {
            // handle error
            console.log(error);
          })
          
        }
        if(!this.state.signUp){
          Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCAnMqqvwJM73EdwUHMcmhLINtLg2NI9Rg]',this.state.data)
          .then(res=>{
            console.log(res)
           }   
          ).catch(function (error) {
            console.log(error);
          })
          
        }
        this.props.history.push('/Login')
      }
    
    render(){
     // const goto= this.state.direct? <NavLink to='LogIn'></NavLink> :null
      const username = this.state.username? <input
        type ="text"
         placeholder="Full Name" /> : null
      return(
         <form className="form">
           <div>
             {username}<br/>
           <input
           type ="text"
              placeholder="Email Address"
              onChange={(event) => this.handleInputChange(event, "Email")} /><br/>
            <input
              placeholder = "Password"
              type ="text"
              onChange={(event) => this.handleInputChange(event,"Password")} />
           </div>
           
          <button type="button" 
          onClick={()=>this.submitHandler()}>SUBMIT</button>
          <button style={{color: "red"}} 
           type="button"
            onClick={this.signUpHandler}>
            Switch to {this.state.signUp? "SignUp":"SignIn"}</button>
      
         </form>
        );
    }
}
export default Auth