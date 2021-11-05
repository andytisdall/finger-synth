import React, { useState } from 'react';
import { scaleLog } from 'd3';
import * as Tone from 'tone';

import './Keyboard.css';
import toneGenerator from './toneGenerator';
import Controls from './Controls';
import EffectSelect from './EffectSelect';

const Keyboard = (props) => {

    const [player, setPlayer] = useState(new toneGenerator());
    const [key, setKey] = useState(32.7);
    const [startingOctave, setStartingOctave] = useState(3);
    const [octaves, setOctaves] = useState(3);
    const [effects, setEffects] = useState([]);


    const getFreqRange = () => {
        const floor = key * startingOctave;
        const ceiling = floor * octaves * 2;

        return [floor, ceiling];
    };

    const frequencyScale = scaleLog()
        .domain([
            window.innerHeight * 0.9,
            window.innerHeight * .05
        ])
        .range(getFreqRange());

    const modScale = scaleLog()
        .domain([1, 100])
        .range([1, window.innerWidth]);

    const getFreq = position => {
        return frequencyScale(parseInt(position));
    };

    const getMod = position => {
        return modScale.invert(position);
    };

    const touchStart = async (e) => {

        const mod = getMod(e.changedTouches[0].clientX);
        const freq = getFreq(e.changedTouches[0].clientY);
        player.play(freq, mod);

    };

    const touchMove = e => {
        const freq = getFreq(e.changedTouches[0].clientY);
        const mod = getMod(e.changedTouches[0].clientX);
        player.changeMod(mod);
        player.changeFreq(freq);

    };

    const touchEnd = () => {
        player.stop();
    }

    const startAudioContext = async () => {
        await Tone.start();
    };

    const addEffect = effect => {
        if (!effects.includes(effect)) {
            player.addEffect(effect);
            setEffects([...effects, effect]);
        } else {
            player.removeEffect(effect);
            setEffects(effects.filter(fx => fx !== effect));
        }
    }


    const showKeyboard = () => {
 
        if (!player) {
            return (
                <div
                    className='keyboard'
                    onTouchStart={startAudioContext}
                >
                    <div className="start">
                        Press to Start
                    </div>
                </div>
            );
        }

        return (
            <div
                className='keyboard'
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                onTouchCancel={touchEnd}
            />
        );
    };

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

            {showKeyboard()}

            <EffectSelect
                addEffect={addEffect}
                activeEffects={effects}
            />
            <div className='margin-bottom'/>
        </div>
    );
};

export default Keyboard;