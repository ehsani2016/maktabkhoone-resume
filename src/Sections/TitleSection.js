import React, { Component } from 'react';
import { SocialIcon } from "react-social-icons";
import Section from "../Sections/Section";

import data from "../Data/data.json"

import '../Css/TitleSection.css'

class AboutSection extends Component {
    render() {
        return (
            <Section className='Section-first' elementName='title' elementTo='about' >
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>

                <div>
                    {
                        Object.keys(data.links).map(key => {
                            return (
                                <SocialIcon className="icon" url={data.links[key]} />
                            )
                        })
                    }
                </div>

            </Section>
        )
    }

}

export default AboutSection;