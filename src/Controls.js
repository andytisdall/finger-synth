import React from 'react';

const Controls = props => {

    return (
        <div className="margin">
            <div className="controls">
                <div className="note-selector">
                    Low Note:
                    <select
                        onInput={e => props.setLow(e.target.value)}    
                    >
                        <option value={264}>hi</option>
                        <option value={100}>low</option>
                    </select>

                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="note-selector">
                    High Note:
                    <select
                        onInput={e => props.setHigh(e.target.value)}
                    >
                        <option value={564}>low</option>
                        <option value={5000}>hi</option>
                    </select>

                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
        </div>
    );

};

export default Controls;