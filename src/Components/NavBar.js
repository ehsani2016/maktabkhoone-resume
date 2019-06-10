import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Theme from '../Components/Theme';
import "../Css/NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <div class="navbar">
                <a href="#">
                    <Link activeClass="active" to="title" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>YASER !</Link>
                </a>
                <a href="#">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>About</Link>
                </a>
                <a href="#">
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>Skills</Link>
                </a>
                
                <Theme />
            </div>
        )
    }

}

export default NavBar;