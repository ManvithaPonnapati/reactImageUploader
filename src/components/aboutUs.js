import React from "react";
import {withCookies} from "react-cookie";

class AboutUS extends React.Component {

    render() {
        return (
            <div className="row about-us">
                <h2> Who are we ? </h2>
                <p className="bigP">
                    The CCAI project is an interdisciplinary project aimed at creating images of accurate,
                    vivid, and personalized outcomes of climate change. Our goal is to use cutting-edge
                    machine learning techniques to produce images of how neighborhoods and houses will look
                    like following the effects of global warming. By creating a more visceral understanding
                    of the effects of climate change, we aim to strengthen public support for necessary
                    actions and motivate people to make impactful decisions. As a prototype, we first focus
                    on modeling flood consequences on homes.
                </p>
            </div>
        )

    }
}

export default withCookies(AboutUS);
