import React from "react";
import { Group } from "./Group";
import { IphoneStatusBar } from "./IphoneStatusBar";
import "./css/style.css";

export const SearchPage = () => {
    return (
        <div className="search-page">
            <div className="div-2">
                <div className="overlap">
                    <div className="group-2">
                        <div className="text-wrapper-5">Discovery</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <img className="image" alt="Image" src="image-2.png" />
                                <div className="text-wrapper-6">Venues</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="group-3">
                                <div className="text-wrapper-7">Dresses</div>
                            </div>
                        </div>
                        <div className="overlap-2">
                            <img className="unsplash" alt="Unsplash" src="unsplash-8vaqkynawhw.png" />
                            <div className="text-wrapper-8">Suits</div>
                        </div>
                        <div className="overlap-3">
                            <div className="text-wrapper-9">Inspiration</div>
                        </div>
                        <div className="overlap-4">
                            <div className="text-wrapper-10">Caterers</div>
                        </div>
                        <div className="overlap-5">
                            <div className="text-wrapper-11">Decor</div>
                        </div>
                        <div className="overlap-wrapper">
                            <div className="overlap-6">
                                <div className="text-wrapper-12">Tips and Tricks</div>
                            </div>
                        </div>
                        <div className="overlap-7">
                            <div className="text-wrapper-13">Florists</div>
                        </div>
                        <div className="overlap-8">
                            <div className="text-wrapper-14">Entertainment</div>
                        </div>
                        <div className="overlap-9">
                            <div className="text-wrapper-15">Video</div>
                        </div>
                        <div className="overlap-10">
                            <div className="bg">
                                <img className="bg-2" alt="Bg" src="bg.svg" />
                            </div>
                            <div className="text-wrapper-16">Photography</div>
                        </div>
                        <div className="group-4">
                            <div className="overlap-11">
                                <div className="text-wrapper-17">Bundled Deals</div>
                            </div>
                        </div>
                        <div className="group-5">
                            <div className="overlap-12">
                                <div className="text-wrapper-18">Checklist</div>
                            </div>
                        </div>
                        <div className="overlap-13">
                            <div className="text-wrapper-19">Jewellers</div>
                        </div>
                        <div className="group-6">
                            <div className="overlap-14">
                                <div className="group-7">
                                    <div className="overlap-14">
                                        <img className="search-2" alt="Search" src="search.svg" />
                                        <div className="group-8">
                                            <div className="overlap-group-3">
                                                <img className="instant-mix" alt="Instant mix" src="instant-mix.png" />
                                                <div className="search-wrapper">
                                                    <img className="search-2" alt="Search" src="image.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className="instant-mix-2" alt="Instant mix" src="instant-mix-2.png" />
                            </div>
                        </div>
                        <img className="arrow-back-ios-new" alt="Arrow back ios new" src="arrow-back-ios-new.png" />
                    </div>
                    <img className="image-2" alt="Image" src="image-6.png" />
                    <div className="group-9">
                        <div className="text-wrapper-20">After the Aisle</div>
                    </div>
                    <img className="unsplash-cewgsmdrvq" alt="Unsplash" src="unsplash-cewgsmd8rvq.png" />
                    <div className="text-wrapper-21">Beauty</div>
                </div>
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
                <div className="frame">
                    <div className="group-10">
                        <img className="line" alt="Line" src="line-1.svg" />
                        <Group
                            className="group-45"
                            divClassName="group-45-instance"
                            favorite="favorite-2.png"
                            group="group-46-2.png"
                            groupClassName="group-instance"
                            groupClassNameOverride="group-instance"
                            mail="mail-2.png"
                            rectangleClassName="group-11"
                            search="search-2.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
