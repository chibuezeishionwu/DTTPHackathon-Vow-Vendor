import React from "react";
import "./css/style.css";

export const MessageOverlay = () => {
    return (
        <div className="message-overlay">
            <div className="div">
                <div className="group">
                    <div className="text-wrapper">Send Message</div>
                </div>
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src="rectangle.png" />
                    <p className="message-sent-you">
                        Message Sent !&nbsp;&nbsp;You will hear back <br />
                        from us shortly.
                    </p>
                </div>
                <img className="close" alt="Close" src="close.png" />
            </div>
        </div>
    );
};
