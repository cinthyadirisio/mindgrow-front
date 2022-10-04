import React, { useRef } from 'react'
import { useSignInMutation } from '../../features/userAPI'
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/loggedSlice'
import toast, { Toaster } from 'react-hot-toast';


export default function SignIn() {

    const [signInUser] = useSignInMutation()
    const dispatch = useDispatch()
    const useRefEmail = useRef()
    const useRefPassword = useRef()

    const SignInArray = [
        { item: "mail", type: "email", value: useRefEmail, id: "signIn1", min: 4, max: 100 },
        { item: "password", type: "text", value: useRefPassword, id: "signIn2", min: 3, max: 100 },
    ]
    function submitInfo(text) {
        text.preventDefault();

        const userSignIn = {
            mail: useRefEmail.current.value,
            password: useRefPassword.current.value,
            role: 'user',
            from: 'form'
        }
        signInUser(userSignIn).then(response => {
            if (response.data.success) {
                console.log(response)
                dispatch(setUser(response.data.response.user))
                //localStorage.setItem('token', response.data.response.token)
                toast("Welcome" + response.data.response.user.name, {
                    icon: "😏",
                    style: {
                        borderRadius: ".5rem",
                        background: "#3f3d56",
                        color: "aliceblue",
                    },
                });
            } else {
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
        }).catch(error => console.log(error))
    }
    return (

        <>
            <form className='Form' onSubmit={submitInfo}>
                {
                    SignInArray.map((element) => {
                        return (
                            <div>
                                <label htmlFor={element.item} > {element.item} </label>
                                <input type={element.type} ref={element.value} />
                            </div>
                        )
                    })
                }
                <div className='Form-city'>
                    <button> Submit</button>
                </div>
            </form>

            <Toaster />

        </>
    )
}
