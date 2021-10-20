import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton"
import logo from "./tinderlogo.png";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function Header({backButton}){
    const history = useHistory();
    return(
        <div className='header'>
            {backButton ? 
            (
                <IconButton onClick={() => history.replace(backButton)}>
                      <ArrowBackIosIcon fontSize="large" className="header__"/>
                </IconButton>
              
            ) :
            (
                <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
                </IconButton>
            )
            }
            
           

            <Link to='/'> 
            <img className="header__logo" src={logo} alt=""/>
            </Link>
           
            <Link to='./chat'>
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            </Link>
          

           

        </div>
    )
}

export default Header