import React, { useState } from 'react'
import Cart from './Cart';
import Nav from './Nav';
import UI from './UI';
//import { Link as LinkRouter } from "react-router-dom";



function BurgerNav() {

    const [show, setShow] = useState(false);

    function showNav() {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <>
            <div>
                <button className="burger-btn" onClick={showNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-menu-up" viewBox="0 0 16 16">
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                    </svg>
                </button>
            </div>
            <div>
                {show ? ( 
                    <div className="Dropdown-menu">
                        <Nav/>
                        <UI/>
                    </div>
                ) : null
                }


            </div>



        </>
    )
}

export default BurgerNav