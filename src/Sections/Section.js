import React, { Component } from 'react';
import { Element } from 'react-scroll'
import ArrowDropDownUp from "../Components/ArrowDropDownUp";


class Section extends Component {
    render() {
        const props = this.props;

        return (

            <Element name={props.elementName} className="element">
                <div className={`Section  ${props.className || ''}`} >

                    {props.children}

                    <ArrowDropDownUp to={props.elementTo} icon={props.icon} />
                </div>
            </Element>
        )
    }

}

export default Section;