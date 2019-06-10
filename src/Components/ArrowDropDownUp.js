import React, { Component } from 'react';
import { Link } from 'react-scroll'
import PropTypes from 'prop-types';

import "../Css/ArrowDropDownUp.css";



class ArrowDropDownUp extends Component {
    render() {
        return (
            <div className="arrowDropDownUp">
                <Link activeClass="active" to={this.props.to} spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                    <i class="material-icons" style={{ fontSize: "45pt" }}>{this.props.icon}</i>
                </Link>
            </div>
        )
    }

}

export default ArrowDropDownUp;

ArrowDropDownUp.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string
}

ArrowDropDownUp.defaultProps = {
    icon: "arrow_drop_down"
}