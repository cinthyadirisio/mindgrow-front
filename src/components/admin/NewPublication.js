import { useRef, useState } from "react";
import { useGetNewPublicationMutation } from '../../features/publicationsAPI';
import { useSelector } from 'react-redux';
import '../../styles/NewPublication.css'
import toast, { Toaster } from 'react-hot-toast';

function Input({ label, name }) {

    return (
        <label>
            {label}
            <input name={name} />
        </label>
    );
}

export default function NewPublication({ handleRefetch }) {
    const [newPublication] = useGetNewPublicationMutation()
    const formPublication = useRef();
    const year = new Date().getFullYear().toString();
    console.log(year)
    const user = useSelector((state) => state.logged.user);
    const token = localStorage.getItem("token");

    console.log(user)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formPublication.current);
        const publication = {
            title: formData.get('title'),
            date: year,
            user: user.id,
            description: formData.get('description'),
            category: formData.get('category'),
            url: formData.get('url'),
            photo: formData.get('photo'),
        };
        newPublication(publication).then(response => {
            if (response.data.success) {
                toast("You have made a publication", {
                    icon: "😏",
                    style: {
                        borderRadius: ".5rem",
                        background: "#3f3d56",
                        color: "aliceblue",
                    },
                });
                handleRefetch()
            } else {
                console.log(response.data.message)
                toast.error(response.data?.message,
                    {
                        icon: "😵",
                        style: {
                            borderRadius: ".5rem",
                            background: "#3f3d56",
                            color: "aliceblue",
                        },
                    })
            }
        }).catch(error => console.log(error.message));
        formPublication.current.reset();
    }

    const [open, setOpen] = useState(false);
    const openPublication = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };
  
    if (token && user.role === "admin") {
        return (
            <div className="container-dad-publication">
                <div className="container-header-new-publication">
                    <h3>New Publication</h3>
                    <img className="icon-despleg" onClick={openPublication} src="https://cdn-icons-png.flaticon.com/512/3597/3597088.png" alt="" width="30px"></img>
                </div>
                {open ? (
                    <div className="container-form-publication">
                        <form ref={formPublication} action="#" className="form-new-publication">
                            <div className="container-input-publication">
                                <Input label="Title" name="title" />
                                <div className="container-select-category">
                                    <label>Category</label>
                                    <select name="category" defaultValue="empty" className="select-category">
                                        <option disabled value="empty">Category</option>
                                        <option>Pets</option>
                                        <option>Health</option>
                                        <option>Social Impact</option>
                                    </select>
                                </div>
                            </div>
                            <div className="container-input-publication">
                                <Input label="Photo" name="photo" />
                                <Input label="Url" name="url" />
                            </div>
                            <label>
                                Description:
                                <textarea className="text-tarea" name="description" />
                            </label>
                            <button className="btn-new-publication" type="submit" onClick={handleSubmit}> Post </button>
                        </form>
                        <Toaster />
                    </div>
                ) : null}
            </div>
        )
    }
}