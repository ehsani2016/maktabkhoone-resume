import React, { Component } from 'react';
import Section from "../Sections/Section";

import data from "../Data/data.json"

import '../Css/SkillsSection.css'


class AboutSection extends Component {
    render() {
        return (
            <Section className='Section-third' elementName='skills' elementTo='title' icon='arrow_drop_up'>
                <h2>{data.Sections[1].title}</h2>
                <div className="card-container">
                    {
                        Object.keys(data.Sections[1].item).map(key => {
                            return (

                                <div className="card">
                                    <img src={data.Sections[1].item[key].content.image} alt={data.Sections[1].item[key].content.title}
                                        className="card-image" />
                                    <div className="card-title">
                                        <h4>{data.Sections[1].item[key].content.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </Section>

        )
    }

}

export default AboutSection;