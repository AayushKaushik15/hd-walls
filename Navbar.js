import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

    const [btn, setBtn] = useState("Login")


    return (
        <div className="navbar">

            <div className="icon"> 
                <span class="material-symbols-outlined">
                    wallpaper
                </span>
                <h3>walls developer</h3>
            </div>
            
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <button onClick={() => {
                    setBtn(btn == "Login" ? "Logout" : "Login")
                }}>{btn}</button>
            </ul>
        </div>
    )
}

export default Navbar;