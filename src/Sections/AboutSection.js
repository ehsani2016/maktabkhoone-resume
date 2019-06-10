import React, { Component } from 'react';
import Section from "../Sections/Section";

import data from "../Data/data.json"

import '../Css/AboutSection.css'

class AboutSection extends Component {
    render() {
        return (
            <Section className='Section-second' elementName='about' elementTo='skills' >
                <h2>{data.Sections[0].title}</h2>
                <p>{data.Sections[0].item[0].content}</p>

                <h3><em>{data.Sections[0].subtitle}</em>  <i class="material-icons">mood</i></h3>
            </Section>
        )
    }

}

export default AboutSection;