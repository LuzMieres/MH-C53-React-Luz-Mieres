import React from "react";
import Anchor from "./Anchor";
import { LINKS_HEADER } from "../utils/utils";

const Header = () => {
    return (
        <header className="main-header">
            <nav>
                {
                    LINKS_HEADER.map((link, index) => {
                        return (<Anchor key={index} to={link.to} content={link.name}></Anchor>)
                    })   
                }
            </nav>
            <img className="headerIcon" src="src/assets/logo-banco-entre-.rios.png" alt="logo banco" />
        </header>
    )
}

export default Header;