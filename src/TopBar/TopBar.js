import React from "react";
import classes from "./TopBar.module.css";

const TopBar = () => {
    return (
        <header>
         <nav className={classes.navbar}>
          <img
            src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
            alt="amazon logo"
          />
        </nav>
        </header>
    );
    }
    export default TopBar;