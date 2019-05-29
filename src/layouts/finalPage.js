import React from 'react';
import {withCookies} from "react-cookie";
import "../styles/image_uploader.css";

/** Renders the final page with a thank you message.
 * TODO: Use this page to show all the images uploaded or anything else.
 * TODO: Make GDPR complaint.
 * **/
class FinalPage extends React.Component {

    render() {

        return (
            <div className="upload-container">
                <h3>Thank you for your contribution</h3>
            </div>
        );
    }
}

export default withCookies(FinalPage);
