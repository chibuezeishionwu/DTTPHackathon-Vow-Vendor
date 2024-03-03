import React from "react";
import { InputLabel } from "./InputLabel";
import { Placeholder } from "./Placeholder";
import "./css/style.css";

export const MessageOverlay = () => {
    return (
        <div className="message-overlay">
            <div className="div">
                <div className="group">
                    <div className="text-wrapper-2">Send Message</div>
                </div>
                <div className="input-label-2">
                    <div className="form">
                        <Placeholder
                            className="placeholder-instance"
                            divClassName="design-component-instance-node"
                            text="Natasha Bo"
                        />
                    </div>
                    <InputLabel className="input-label-instance" text=" Name" />
                </div>
                <div className="input-label-3">
                    <div className="form">
                        <Placeholder
                            className="placeholder-instance"
                            divClassName="design-component-instance-node"
                            text="Natasha@bo.com"
                        />
                    </div>
                    <InputLabel className="input-label-instance" text=" Email" />
                </div>
                <div className="input-label-4">
                    <div className="placeholder-wrapper">
                        <Placeholder
                            className="placeholder-instance"
                            divClassName="design-component-instance-node"
                            text="1234567"
                        />
                    </div>
                    <InputLabel className="input-label-instance" text=" Phone" />
                </div>
                <div className="input-label-wrapper">
                    <InputLabel text="Message" />
                </div>
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <div className="contact-vendor">Send Message</div>
                    </div>
                </div>
                <img className="close" alt="Close" src="close.png" />
                <div className="overlap">
                    <p className="p">Hi there! I am interested in booking Paradise Hill. Please contact me. Thanks</p>
                </div>
            </div>
        </div>
    );
};
