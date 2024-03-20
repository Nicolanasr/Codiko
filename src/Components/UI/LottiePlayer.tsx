'use client'

import React from 'react'


import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = { json: any, controls?: boolean }

const LottiePlayer = ({ json, controls }: Props) => {
    return (
        <Player
            autoplay
            loop
            src={json}
            style={{ height: '300px', width: '300px' }}
        >
            {controls && <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />}
        </Player>
    )
}

export default LottiePlayer