import React, { Component } from 'react';

import "../Css/Theme.css"

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ThemeArrCurrent: [],
        }
        this.themeArr = [];
    }


    MyRandom() {
        this.themeArr = [];
        while (this.themeArr.length < 3) {
            let r = Math.floor(Math.random() * 6) + 1;
            if (this.themeArr.indexOf(r) === -1) this.themeArr.push(r);
        }
    }

    ThemChanger() {

        this.MyRandom()


        // Get Section Elements
        let section_first = document.getElementsByClassName("Section-first");
        let section_second = document.getElementsByClassName("Section-second");
        let section_third = document.getElementsByClassName("Section-third");
        //

        // Remove current Theme
        section_first[0].classList.remove(`theme${this.state.ThemeArrCurrent[0]}`);
        section_second[0].classList.remove(`theme${this.state.ThemeArrCurrent[1]}`);
        section_third[0].classList.remove(`theme${this.state.ThemeArrCurrent[2]}`);
        //

        // Add Theme Section1
        section_first[0].classList.add(`theme${this.themeArr[0]}`);
        //

        // Add Theme Section2
        section_second[0].classList.add(`theme${this.themeArr[1]}`);
        //

        // Add Theme Section3
        section_third[0].classList.add(`theme${this.themeArr[2]}`);
        //


        this.setState({
            ThemeArrCurrent: this.themeArr,
        })
    }


    render() {
        return (
            <div style={{ float: "right" }}>
                <a href="#" onClick={() => { this.ThemChanger() }}><i class="material-icons">brush</i></a>
            </div>
        )
    }

}

export default Theme;