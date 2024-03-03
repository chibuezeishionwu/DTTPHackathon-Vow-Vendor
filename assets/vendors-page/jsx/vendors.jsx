import React from "react";
import { Frame } from "./Frame";
import { IphoneStatusBar } from "./IphoneStatusBar";
import "./css/style.css";

export const ListOfVendors = () => {
    return (
        <div className="list-of-vendors">
            <div className="div-2">
                <div className="text-wrapper-5">Recommended for you</div>
                <div className="text-wrapper-6">Venues</div>
                <div className="div-wrapper">
                    <div className="frame-wrapper">
                        <div className="frame-2">
                            <div className="group-3">
                                <div className="overlap-group-3">
                                    <div className="text-wrapper-7">Toronto</div>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap">
                                    <div className="text-wrapper-8">Ottawa</div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="overlap-2">
                                    <div className="text-wrapper-9">Hamilton</div>
                                </div>
                            </div>
                            <div className="group-5">
                                <div className="overlap-3">
                                    <div className="text-wrapper-10">London</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="arrow-back-ios-new" alt="Arrow back ios new" src="arrow-back-ios-new.png" />
                <div className="group-6">
                    <div className="overlap-4">
                        <div className="group-7">
                            <div className="overlap-4">
                                <img className="search-2" alt="Search" src="search.svg" />
                                <div className="group-8">
                                    <div className="overlap-group-4">
                                        <img className="instant-mix" alt="Instant mix" src="instant-mix.png" />
                                        <div className="search-wrapper">
                                            <img className="search-2" alt="Search" src="image.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className="instant-mix-2" alt="Instant mix" src="image.png" />
                    </div>
                </div>
                <div className="group-9">
                    <div className="overlap-5">
                        <div className="group-10">
                            <div className="overlap-group-5">
                                <div className="group-11">
                                    <div className="text-wrapper-11">Budget Friendly</div>
                                    <div className="group-12">
                                        <div className="text-wrapper-12">Paradise Hill</div>
                                        <div className="text-wrapper-13">Toronto, ON</div>
                                    </div>
                                    <div className="group-13">
                                        <div className="text-wrapper-14">Love Aisle</div>
                                        <div className="text-wrapper-13">Toronto, ON</div>
                                    </div>
                                    <div className="group-14">
                                        <div className="peace-love">Peace &amp; Love</div>
                                        <div className="text-wrapper-13">Toronto, ON</div>
                                    </div>
                                    <div className="group-15">
                                        <div className="text-wrapper-15">Lovers Chalet</div>
                                        <div className="text-wrapper-16">Toronto, ON</div>
                                    </div>
                                    <div className="text-wrapper-17">Popular Venues</div>
                                    <div className="text-wrapper-18">Outdoor Venues</div>
                                    <div className="group-16">
                                        <div className="text-wrapper-19">The Belvedere</div>
                                        <div className="text-wrapper-20">Toronto, ON</div>
                                    </div>
                                    <img className="unsplash" alt="Unsplash" src="unsplash-1migtftgcpo.png" />
                                    <img className="unsplash-tatrehl" alt="Unsplash" src="unsplash-ta4tr77ehl8.png" />
                                    <img className="unsplash-ecgzwpovya" alt="Unsplash" src="unsplash-ecgzwpovya0.png" />
                                    <img className="image" alt="Image" src="image-1.png" />
                                    <img className="unsplash-fjk" alt="Unsplash fjk" src="unsplash-m9szzbp-fjk.png" />
                                    <div className="group-17">
                                        <div className="text-wrapper-21">La Toundra</div>
                                        <div className="text-wrapper-22">Toronto, ON</div>
                                    </div>
                                    <div className="text-wrapper-23">$3000</div>
                                    <div className="ellipse" />
                                    <div className="text-wrapper-24">$4000</div>
                                    <div className="ellipse-2" />
                                    <div className="text-wrapper-25">$950</div>
                                    <div className="ellipse-3" />
                                    <div className="text-wrapper-26">$2500</div>
                                    <div className="ellipse-4" />
                                    <div className="text-wrapper-27">$9500</div>
                                    <div className="ellipse-5" />
                                    <div className="text-wrapper-28">$4500</div>
                                    <div className="ellipse-6" />
                                </div>
                                <img className="unsplash-kmddxa" alt="Unsplash" src="unsplash-3kmdd19x33a.png" />
                            </div>
                        </div>
                        <div className="text-wrapper-29">See more</div>
                        <div className="text-wrapper-30">See more</div>
                        <div className="text-wrapper-31">See more</div>
                    </div>
                </div>
                <Frame className="frame-88" />
                <IphoneStatusBar
                    back={false}
                    batteryBatteryClassName="iphone-status-bar-3"
                    batteryFill="fill-3.svg"
                    batteryOutline="outline-3.svg"
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
