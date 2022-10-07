import React, { useState } from "react";
import "../../styles/header.css";
import Logo from "./Logo";
import { Link as LinkRouter } from "react-router-dom";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import SignOut from "../auth/SignOut";
import ProfilePage from '../../pages/ProfilePage'

function Header() {
  const [modal, setModal] = useState(false)
  const [burger, setBurger] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.logged.user)

  return (
    <header className="header-container">
      <div className="logo-title">
        <LinkRouter to={"/"}>
          <Logo />
        </LinkRouter>
        <LinkRouter to={"/"}>
          <h2>MindGrow</h2>
        </LinkRouter>
      </div>
      <div className="header-links">
        <LinkRouter to='/'>Home</LinkRouter>
        <LinkRouter to='/products'>Products</LinkRouter>
        <LinkRouter to='whymindgrow'>Why MindGrow?</LinkRouter>
      </div>
      <div className="header-info">
        {
          burger &&
          <div className="header-burger" >
            <button className="close" onClick={() => setBurger(!burger)}>X</button>
            <LinkRouter onClick={() => setBurger(!burger)} to='/' >Home</LinkRouter>
            <LinkRouter onClick={() => setBurger(!burger)} to='/products'>Products</LinkRouter>
            <LinkRouter onClick={() => setBurger(!burger)} to='whymindgrow'>Why MindGrow?</LinkRouter>
          </div>
        }
        <button className="burger-btn" onClick={() => setBurger(!burger)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-menu-up" viewBox="0 0 16 16">
            <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
          </svg>
        </button>
        <Cart />
        <div>
          <button className="UI-box" onClick={() => setModal(!modal)} >
            {!user ?
              <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              : <img src={user.photo} alt='user' />
            }
          </button>
          {
            modal &&
            <div className="container-sign" onClick={() => setModal(!modal)}>
              {
                user ? 
                <>
                <LinkRouter to={`/profile/${user.id}`}>Profile</LinkRouter>
                <SignOut />
                </>
                  :
                  <>
                    <LinkRouter to="/signup">Sign Up</LinkRouter>
                    <LinkRouter to="/signin">Sign In</LinkRouter>
                  </>
              }

            </div>
          }
        </div>

      </div>
    </header>
  );
}

export default Header;
