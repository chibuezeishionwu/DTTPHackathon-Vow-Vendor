import React from "react";
import { Component } from "./Component";
import "./css/style.css";
export const StartingScreen = () => {
 return (
 <div className="starting-screen">
 <div className="div">
 <img className="group" alt="Group" src="group-207.png" />
 <img className="modern-monogram" alt="Modern monogram" src="modern-monogram-wedding-badge-logo-20-1.png" />
 <Component
 className="component-1"
 iphoneStatusBarBatteryFill="fill-4.svg"
 iphoneStatusBarBatteryOutline="outline-3.svg"
 iphoneStatusBarReception="reception-3.svg"
 iphoneStatusBarTimeClassName="component-instance"
 iphoneStatusBarWifi="wifi-3.svg"
 />
 <img className="img" alt="Group" src="group-208.png" />
 </div>
 </div>
 );
};