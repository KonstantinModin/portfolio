import React from "react";
import { Page1, Page2, Page3 } from "../Pages";
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
                    children: <Page1 />
                },
                {
                    slug: "two",
                    className: "slide two",
                    children: <Page2 />
                },
                {
                    slug: "thr",
                    className: "slide thr",
                    children: <Page3 />
                }
            ]}
        />
    );
};

export default NavigationSlider;
