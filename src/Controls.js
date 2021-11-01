import React from 'react';
import Selector from './Selector';

const Controls = props => {

    const BASE_OCTAVES = 7;
    const OCTAVE_RANGE = 12;

    const keyOptions = [
        {display: 'C', value: 32.7},
        { display: 'C#', value: 34.65 },
        { display: 'D', value: 36.71, },
        { display: 'D#', value: 38.89 },
        { display: 'E', value: 41.20, },
        { display: 'F', value: 43.65, },
        { display: 'F#', value: 46.25 },
        { display: 'G', value: 49},
        { display: 'G#', value: 51.91 },
        { display: 'A', value: 55 },
        { display: 'A#', value: 58.27 },
        { display: 'B', value: 61.74 }
    ];

    const baseOctaveOptions = [];

    [...Array(BASE_OCTAVES)].forEach((_, i) => {
        baseOctaveOptions.push({ display: i + 1, value: i + 1 });
    });

    const octavesOptions = [];

    [...Array(OCTAVE_RANGE)].forEach((_, i) => {
        octavesOptions.push({ display: i + 1, value: i + 1 });
    });

    return (
        <div className="margin">
            <div className="controls">

                <Selector
                    name="Key"
                    options={keyOptions}
                    selectedValue={props.selectedKey}
                    onSelect={props.setKey}
                />

                <Selector
                    name="Base Octave"
                    options={baseOctaveOptions}
                    selectedValue={props.startingOctave}
                    onSelect={props.setStartingOctave}
                />

                <Selector
                    name="Octave Range"
                    options={octavesOptions}
                    selectedValue={props.octaves}
                    onSelect={props.setOctaves}
                />

            </div>
        </div>
    );

};

export default Controls;