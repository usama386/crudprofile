import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav>
                <ul className="profileList">
                    <li>
                        <Link to="./" >Add Profile</Link>

                    </li>
                    <li>
                        <Link to="./Profile">Profile</Link>

                    </li>
                </ul>
                <input type='text' placeholder='search' />
            </nav>

        </header>
    )
}

export default Header