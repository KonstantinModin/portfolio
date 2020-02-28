import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";
import { Page1, Page2, Page3 } from '../Pages';


const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const Main = () => {
    // const Slider =()=> (
    //     <AwesomeSlider 
    //         animation="cubeAnimation" 
    //         bullets={!1} 
    //         fillParent={!0}
    //         selected={selected}
    //         >
    //      
    //       <div className="slide">
    //           <div className="content">
    //             <h3>Страница два 2</h3>
    //           </div>
    //       </div>
    //       <div className="slide">
    //       <div className="content">
    //             <h3>Страница three</h3>
    //           </div>
    //       </div>
    //     </AwesomeSlider>
    //   );

    const Slider = () => {
      return (
        <NavigationSlider
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
       )
    }

    return (
        // <div className="main">
            <Slider/>
        // </div>
    )
}

export default Main;
