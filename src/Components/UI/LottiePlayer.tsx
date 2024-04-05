"use client";

import React from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

type Props = {
    json: any;
    controls?: boolean;
    height?: string;
    width?: string;
};

const LottiePlayer = ({ json, controls, height, width }: Props) => {
    return (
        <Player autoplay loop src={json} style={{ height: height === undefined ? "300px" : height, width: width === undefined ? "300px" : width }}>
            {controls && <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />}
        </Player>
    );
};

export default LottiePlayer;
