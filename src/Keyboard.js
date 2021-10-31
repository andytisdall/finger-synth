import React, { useState } from 'react';
import { scaleLog } from 'd3';

import './Keyboard.css';
import player from './toneGenerator';
import Controls from './Controls';

const Keyboard = (props) => {

    const [key, setKey] = useState(32.7);
    const [startingOctave, setStartingOctave] = useState(3);
    const [octaves, setOctaves] = useState(3);

    const getFreqRange = () => {
        const floor = key * startingOctave;
        const ceiling = floor * octaves * 2;

        return [floor, ceiling];
    }

    const frequencyScale = scaleLog()
        .domain([800, 30])
        .range(getFreqRange());

    const modScale = scaleLog()
        .domain([1, 100])
        .range([1, 365]);

    const getFreq = position => {
        return frequencyScale(parseInt(position));
    };

    const getMod = position => {
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
        player.changeFreq(freq);

    }

    return (
        <div className='container'>
            <Controls
                selectedKey = {key}
                setKey = {setKey}
                octaves = {octaves}
                setOctaves = {setOctaves}
                startingOctave = {startingOctave}
                setStartingOctave = {setStartingOctave}
            />
            <div
                className='keyboard'
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={player.stop}
                onTouchCancel={player.stop}
            >

            </div>
            <div className='margin'/>
        </div>
    );
};

export default Keyboard;