import React from "react";
import { Component } from "./Component";
import "./css/style.css";

export const EnterPassword = () => {
    return (
        <div className="enter-password">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Email</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-2">Password</div>
                </div>
                <div className="text-wrapper-3">Forgot your password?</div>
                <div className="overlap-2">
                    <p className="p">Log in to your account</p>
                    <Component
                        className="component-1"
                        iphoneStatusBarBatteryFill="fill-3.svg"
                        iphoneStatusBarBatteryOutline="outline-2.svg"
                        iphoneStatusBarReception="reception-2.svg"
                        iphoneStatusBarWifi="wifi-2.svg"
                    />
                    <img className="modern-monogram" alt="Modern monogram" src="modern-monogram-wedding-badge-logo-17-2.png" />
                    <img className="vector" alt="Vector" src="vector.svg" />
                </div>
                <div className="group">
                    <div className="overlap-group-2">
                        <div className="text-wrapper-4">Sign in</div>
                    </div>
                </div>
                <div className="frame">
                    <img className="img" alt="Group" src="group-86.png" />
                </div>
            </div>
        </div>
    );
};
