import React, { useState } from 'react';
import { scaleLog, scaleLinear } from 'd3';

import './Keyboard.css';
import Key from './Key';
import player from './toneGenerator';
import Controls from './Controls';

const Keyboard = (props) => {

    const [lowNote, setLowNote] = useState(264);
    const [highNote, setHighNote] = useState(528);

    const frequencyScale = scaleLog()
        .domain([800, 30])
        .range([lowNote, highNote]);

    const modScale = scaleLog()
        .domain([1, 100])
        .range([1, 365]);

    const getFreq = position => {

        return frequencyScale(parseInt(position));
    };

    const getMod = position => {
        console.log(modScale.invert(position))
        return modScale.invert(position);
    }

    const touchStart = e => {

        const mod = getMod(e.changedTouches[0].clientX);
        const freq = getFreq(e.changedTouches[0].clientY);
        player.play(freq, mod);

    }

    const touchMove = e => {
        const freq = getFreq(e.changedTouches[0].clientY);
        const mod = getMod(e.changedTouches[0].clientX);
        player.changeMod(mod);
        player.changeFreq(freq)

    }

    return (
        <div className='container'>
            <Controls
                setHigh = {setHighNote}
                setLow = {setLowNote}
            />
            <div
                className='keyboard'
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={player.stop}
                onTouchCancel={player.stop}
            >

                <Key note='C' />
                <Key note='C#' step='1' />               
                <Key note='D' />
                <Key note='D#' step='2' />          
                <Key note='E' />
                <Key note='F' />
                <Key note='F#' step='3' />
                <Key note='G' />
                <Key note='G#' step='4' />               
                <Key note='A' />
                <Key note='A#' step='5' />
                <Key note='B' />

            </div>
            <div className='margin'/>
        </div>
    );
};

export default Keyboard;