import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../features/loggedSlice";
import { useSignUpMutation } from "../../features/userAPI";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import SignUpGoogle from './SignUpGoogle';

function Input({ label, name, type }) {
    return (
        <label className="form-label">
            {label}
            <input name={name} type={type} />
        </label>
    );
}

export default function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const form = useRef();
    const [newUser] = useSignUpMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const formUser = {
            name: formData.get("name"),
            lastName: formData.get("lastname"),
            mail: formData.get("mail"),
            country: formData.get("country"),
            photo: formData.get("photo"),
            password: formData.get("password"),
            from: "form",
            role: "user"
        };
        newUser(formUser).then(response => {
            if (response.data.success) {
                console.log(response)
                dispatch(setUser(response.data.response.user))
  
                toast("It has been successfully registered", {
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
        }).catch(error => console.log(error));

        form.current.reset();
    };

    return (
        <div>
            <form ref={form} className="form-class">
                <Input label="Name:" name="name" />
                <Input label="Lastname:" name="lastname" />
                <Input label="Mail:" name="mail" />
                <Input label="Country:" name="country" />
                <Input label="Photo URL:" name="photo" />
                <Input label="Password:" name="password" type="password" />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
                <SignUpGoogle/>
            </form>
            <Toaster />
        </div>
    );
}