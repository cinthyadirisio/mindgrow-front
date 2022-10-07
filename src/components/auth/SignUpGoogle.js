import { useEffect, useRef } from "react";
import * as jose from "jose";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/loggedSlice";
import { useSignUpMutation } from "../../features/userAPI";
import toast, { Toaster } from 'react-hot-toast';

export default function SignUpGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonDiv = useRef(null);
  let [newUser] = useSignUpMutation();

  async function handleCredentialResponse(response) {
    let userObject = jose.decodeJwt(response.credential);
    let data = {
      name: userObject.name,
      lastName: userObject.family_name,
      photo: userObject.picture,
      mail: userObject.mail,
      password: userObject.sub,
      country: "Argentina",
      role: "user",
      from: "google",
    };
    newUser(data).then(response => {
      if (response.data?.success) {
        dispatch(setUser(response.data.response.user))
        toast("It has been successfully registered", {
          icon: "😏",
          style: {
            borderRadius: ".5rem",
            background: "#3f3d56",
            color: "aliceblue",
          },
        });
        navigate("/signin", { replace: true })
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
        if (response.error) {
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
        navigate("/signin", { replace: true })
      }
    }).catch(error => {
      console.log(error)
    }
    );
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "982683585359-pp3ve44loj4lvumdai44mg7gigla6j1j.apps.googleusercontent.com",
      callback: handleCredentialResponse,
      context: "signup",
    });
    google.accounts.id.renderButton(
      buttonDiv.current,
      { theme: "outline", size: "medium", text: "signup_with", locale: "en" }
    );
  }, []);
  return (
    <div>
      <div ref={buttonDiv}></div>
    </div>
  );
}
