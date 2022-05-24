import React, {useState} from 'react'
import {Button, Typography, Avatar, Paper, Container, Grid} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'

import Icon from './Icon'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from './Styles'
import Input from "./Input"


const Auth = () => {
   const classes = useStyles()
   const [showPassword, setShowPassword] = useState(false)
   const [isSignup, setIsSignup] = useState(false)
   

   const  handleShowPassword =() => setShowPassword((prevShowPassword)=> !prevShowPassword)

   const handleSubmit =() =>{

   }

   const handleChange =() =>{

   }
   const switchMode =() =>{
        setIsSignup((prevIsSignup)=> !prevIsSignup)
        handleShowPassword (false)
   }

        const googleSuccess = async (res) => {
            console.log(res)
        }
        const googleFailure = () => {
            
            console.log("Google Sign In was unsuccessful. Try Again Later ")
        }
         

  return (
      <Container component="main" maxWidth='xs'>
          <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
              </Avatar>
            <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className = {classes.form} onSubmit={handleSubmit}>
                <Grid container spacing ={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='FirstName' label="First name" handleChange={handleChange} autoFocus half />
                                <Input name='LastName' label="Last name" handleChange={handleChange}  half />                                                           
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name='password' label='Password' autocomplete="on" handleChange={handleChange} type= {showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} autoFocus />
                    {isSignup && <Input name= 'confirmPassword' label= 'Repeat Password' handleChange={handleChange} type= 'password' />}
                </Grid> 
                <Button  type='submit' fullWidth variant ='contained' color ='primary' className={classes.submit} >
                    {isSignup ?  'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin
                            clientId ="322027900789-rumalvf2kmikp0115c6gk12f8gqrit63.apps.googleusercontent.com" 
                            render={(renderProps)=>(
                                <Button 
                                    className={classes.googleButton} 
                                    color="primary" 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled = {renderProps.disabled} 
                                    startIcon={<Icon/>} 
                                    variant ="contained">
                                        Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy = "single_host_origin"
                        />
                <Grid container justifyContent = 'flex-end'>
                    <Grid item>                        
                        <Button onClick= {switchMode}>
                            {isSignup ? "Already have an account? Sign In " : " Don't have an account? Sign Up"}
                        </Button>
                    </Grid>

                </Grid>
            </form>
          </Paper>

      </Container>
    
  )
}

export default Auth