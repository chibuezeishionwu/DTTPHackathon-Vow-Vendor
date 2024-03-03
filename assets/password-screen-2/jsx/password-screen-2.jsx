import React from "react";
import { Component } from "./Component";
import "./css/style.css";

export const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">email@gmail.com</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-2">**********</div>
                </div>
                <div className="text-wrapper-3">Forgot your password?</div>
                <div className="group">
                    <div className="overlap-group-2">
                        <div className="text-wrapper-4">Sign in</div>
                    </div>
                </div>
                <div className="overlap-2">
                    <Component
                        className="component-1"
                        iphoneStatusBarBatteryFill="fill-3.svg"
                        iphoneStatusBarBatteryOutline="outline-2.svg"
                        iphoneStatusBarReception="reception-2.svg"
                        iphoneStatusBarWifi="wifi-2.svg"
                    />
                    <img className="modern-monogram" alt="Modern monogram" src="modern-monogram-wedding-badge-logo-17-2.png" />
                    <p className="p">Log in to your account</p>
                    <img className="vector" alt="Vector" src="vector.svg" />
                </div>
            </div>
        </div>
    );
};
