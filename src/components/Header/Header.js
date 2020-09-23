import React, { useContext } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBFormInline, MDBContainer
} from "mdbreact";
import {Link} from 'react-router-dom';
import logo from '../../Images/icons/logo.png';
import { UserContext } from "../../App";
import './Header.css'
import { googleSignOut } from "../Login/LogInManager";



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const logOut =()=>{
        googleSignOut();
        window.location.reload();
    }
    return (
        <MDBContainer>
            <MDBNavbar color="inherit" dark expand="sm">
                <MDBNavbarBrand>
                    <Link to="/">
                        <div>
                            <img src={logo} alt="" height="110" style={{ padding: '4px 4px', background: 'white',width:'220px', borderRadius: '15px' }} />
                        </div>
                    </Link>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                           
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarToggler />

                
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="nav-item" to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink  className="nav-item" to="#!">Place</MDBNavLink>
                        </MDBNavItem>
                       
                        <MDBNavItem>
                            <MDBNavLink  className="nav-item" to="#!">About</MDBNavLink>
                        </MDBNavItem>
                        {
                            loggedInUser.email
                                ?
                                <>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">{loggedInUser.displayName}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink  className="nav-item" to="#!" onClick={logOut}>Log Out</MDBNavLink>
                                    </MDBNavItem>
                                </>
                                :
                                <MDBNavLink  className="nav-item" to="/login">Login</MDBNavLink>
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </MDBContainer>
    );
}

export default Header;