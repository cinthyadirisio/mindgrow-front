import React from 'react'
import { Button, Popover } from 'antd';
import '../../styles/header.css'
import { Link as LinkRouter } from "react-router-dom";

let pagesUI = [
  { id: "_signin", to: "/signin", title: "Sign In" },
  { id: "_signup", to: "/signup", title: "Sign Up" }]

const content = (
  <div className='UI-div'>
    {
      pagesUI.map((link) => (
        <LinkRouter className='linkRouter' to={link.to} key={link.id}>
          {link.title}
        </LinkRouter>
      ))
    }
  </div>
);

const UI = () => (
  <div>
    <Popover className='UI-box' content={content} placement="bottom" trigger="click">
      <Button ><svg xmlns="http://www.w3.org/2000/svg" className="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
      </svg></Button>
    </Popover>
  </div>
);

export default UI; 