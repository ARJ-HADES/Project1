import React from 'react'
import {Button, Typography, Avatar, Paper, Container, Grid} from '@material-ui/core'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from './Styles'
import Input from "./Input"


const Auth = () => {
   const classes = useStyles()

   const isSignup = false
   const handleSubmit =() =>{

   }

   const handleChange =() =>{

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
                                <Input name='LastName' label="last name" handleChange={handleChange}  half />                                                           
                            </>
                        )
                    }

                </Grid>
            </form>
          </Paper>

      </Container>
    
  )
}

export default Auth