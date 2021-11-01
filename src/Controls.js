import React from 'react';

const Controls = props => {

    return (
        <div className="margin">
            <div className="controls">

                <div className="note-selector">
                    Key 
                    <select
                        onInput={e => props.setKey(e.target.value)}
                        value={props.selectedKey}  
                    >
                        <option value={32.7}>C</option>
                        <option value={34.65}>C#</option>
                        <option value={36.71}>D</option>
                        <option value={38.89}>D#</option>
                        <option value={41.20}>E</option>
                        <option value={43.65}>F</option>
                        <option value={46.25}>F#</option>
                        <option value={49}>G</option>
                        <option value={51.91}>G#</option>
                        <option value={55}>A</option>
                        <option value={58.27}>A#</option>
                        <option value={61.74}>B</option>
                    </select>
                </div>

                <div className="note-selector">
                    Starting Octave
                    <select
                        onInput={e => props.setStartingOctave(e.target.value)}
                        value={props.startingOctave}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>

                <div className="note-selector">
                    Octaves
                    <select
                        onInput={e => props.setOctaves(e.target.value)}
                        value={props.octaves}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>

            </div>
        </div>
    );

};

export default Controls;