import React from "react";
import { About, Skills, Contacts } from "../Pages";
import AwesomeSlider from "react-awesome-slider";
import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const Slider = withNavigationHandlers(AwesomeSlider);

const NavigationSlider = () => {
    return (
        <Slider
            className="awesome-slider"
            animation="cubeAnimation"
            media={[
                {
                    slug: "one",
                    className: "slide one",
                    children: <About />
                },
                {
                    slug: "two",
                    className: "slide two",
                    children: <Skills />
                },
                {
                    slug: "thr",
                    className: "slide thr",
                    children: <Contacts />
                }
            ]}
        />
    );
};

export default NavigationSlider;
