import React, { useState } from 'react';
import { scaleLog } from 'd3';
import * as Tone from 'tone';

import './Keyboard.css';
import toneGenerator from './toneGenerator';
import Controls from './Controls';
import EffectSelect from './EffectSelect';
import Help from './Help';

const Keyboard = (props) => {

    const [player, setPlayer] = useState(new toneGenerator());
    const [key, setKey] = useState(32.7);
    const [startingOctave, setStartingOctave] = useState(3);
    const [octaves, setOctaves] = useState(3);
    const [effects, setEffects] = useState([]);
    const [touched, setTouched] = useState(false);


    const getFreqRange = () => {
        const floor = key * startingOctave;
        const ceiling = floor * octaves * 2;

        return [floor, ceiling];
    };

    const frequencyScale = scaleLog()
        .domain([
            window.innerHeight * 0.85,
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
        setTouched(true);
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
 
        if (!touched) {
            return (
                <div
                    className='keyboard'
                    onTouchStart={startAudioContext}
                >
                    <div className="start">
                        Touch to start.
                        <br />
                        <br />
                        This web app only works on mobile devices. For iPhone, make sure your ringer is on.
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
            >
                <Help />
            </div>
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
        </div>
    );
};

export default Keyboard;