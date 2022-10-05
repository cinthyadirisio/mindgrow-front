import React, { useEffect, useRef, useState } from 'react'
import { useSignInMutation } from '../../features/userAPI'
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/loggedSlice'
import toast, { Toaster } from 'react-hot-toast';
import * as jose from 'jose'
import '../../styles/SignInStyles.css'


export default function SignInGoogle() {

    const [signInGoogle] = useSignInMutation()
    const dispatch = useDispatch()
    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response){
        console.log(response)
        console.log(buttonDiv.current)

        let responsePayLoad = jose.decodeJwt(response.credential)
        console.log(responsePayLoad)

        let info = {
            mail:responsePayLoad.mail,
            password: responsePayLoad.sub,
            from: 'google'
        }
        signInGoogle(info)
        .then(response => {
            if(response.data.success){
            dispatch(setUser(response.data.response.user))
            //localStorage.setItem('token', response.data.response.token)
            toast("Welcome" + "" + response.data.response.user.name, {
                icon: "😏",
                style: {
                    borderRadius: ".5rem",
                    background: "#3f3d56",
                    color: "aliceblue",
                },
                });
            }else{
                toast.error(response.data.message,
                    {
                        icon: "😵",
                        style: {
                            borderRadius: ".5rem",
                            background: "#3f3d56",
                            color: "aliceblue",
                        },
                    })
            }
            
        })

    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: '91158945037-qiba2jg2lrvdirm1kr4mi0sk9s2agee8.apps.googleusercontent.com',
          callback: handleCredentialResponse,
          context: 'signin',
        });
    
        google.accounts.id.renderButton(
          buttonDiv.current,
          { theme: "outline", size: "medium", text: "signin_with", locale: "en", }  // customization attributes
        );
      }, [])

  return (
    <>
        <div ref={buttonDiv} className='signin'></div>
        <Toaster />
    </>
  )
}
