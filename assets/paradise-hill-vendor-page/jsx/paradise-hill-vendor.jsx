import React from "react";
import { Group } from "./Group";
import { InputLabel } from "./InputLabel";
import { IphoneStatusBar } from "./IphoneStatusBar";
import "./css/style.css";

export const VendorPage = () => {
    return (
        <div className="vendor-page">
            <div className="div-2">
                <div className="overlap">
                    <img className="arrow-back-ios-new" alt="Arrow back ios new" src="arrow-back-ios-new.png" />
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-2">
                        <div className="group-2">
                            <div className="overlap-3">
                                <div className="text-wrapper-5">Paradise Hill</div>
                                <div className="text-wrapper-6">Toronto, ON</div>
                                <div className="group-3">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-4">
                                            <div className="group-4">
                                                <img className="group-5" alt="Group" src="group-221.png" />
                                                <div className="overlap-group-2">
                                                    <div className="text-wrapper-7">4 Stars</div>
                                                    <div className="text-wrapper-8">25 Reviews</div>
                                                </div>
                                            </div>
                                            <div className="ellipse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="title">About</div>
                            <div className="overlap-5">
                                <p className="text">
                                    At St. John&#39;s we offer many different spaces for rental, from our magnificent Great Hall, to our
                                    functional and lovely Gathering Space/Parlour, to the Business Board Room, Outisde Patio,
                                    Classrooms,our Commercial Kitchen, and our Quaint Parish Hall with its beautiful accompanying Green
                                    Area.
                                    <br />
                                    We can also often offer catering for your events.
                                </p>
                                <div className="text-wrapper-9">Pricing</div>
                                <div className="element-guests">100 guests&nbsp;&nbsp;- $3000</div>
                                <div className="element-guests-2">250 guests&nbsp;&nbsp;-$4000</div>
                                <div className="element-guests-3">500 guests&nbsp;&nbsp;-$5000</div>
                                <img className="line" alt="Line" src="line-5.svg" />
                                <InputLabel className="input-label-instance" divClassName="input-label-2" text="Read More" />
                                <div className="text-wrapper-10">FAQ’s</div>
                                <img className="line-2" alt="Line" src="line-4.svg" />
                                <div className="div-wrapper">
                                    <div className="overlap-6">
                                        <div className="text-wrapper-11">Contact Vendor</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-6">
                                <img className="favorite-2" alt="Favorite" src="image.png" />
                                <img className="ios-share" alt="Ios share" src="ios-share.png" />
                            </div>
                        </div>
                        <img className="expand-more" alt="Expand more" src="expand-more.png" />
                    </div>
                </div>
                <div className="frame">
                    <div className="overlap-7">
                        <Group
                            className="group-45"
                            divClassName="group-45-instance"
                            favorite="favorite-2.png"
                            group="group-46-2.png"
                            groupClassName="group-instance"
                            groupClassNameOverride="group-7"
                            mail="mail-2.png"
                            rectangleClassName="group-8"
                            rectangleWrapperClassName="group-instance"
                            search="search-2.png"
                        />
                        <img className="line-3" alt="Line" src="line-1.svg" />
                    </div>
                </div>
                <IphoneStatusBar
                    back={false}
                    batteryBatteryClassName="iphone-status-bar-3"
                    batteryFill="fill-3.svg"
                    batteryOutline="outline-2.svg"
                    callIn={false}
                    className="iphone-status-bar-instance"
                    img="wifi-2.svg"
                    notch
                    reception="reception-2.svg"
                    receptionClassName="iphone-status-bar-4"
                    theme="light"
                    timeClassName="iphone-status-bar-5"
                    wifi
                    wifiClassName="iphone-status-bar-2"
                />
            </div>
        </div>
    );
};


