import React from 'react';

const EffectSelect = props => {

    const { activeEffects, addEffect } = props;

    const allEffects = [
        'filter',
        'vibrato',
        'delay'
    ];

    const showEffects = () => {
        return allEffects.map(effect => {
            const active = activeEffects.includes(effect) ? 'active' : '';
            return (
                <div
                    className={`effect ${active}`}
                    onClick={() => addEffect(effect)}
                    key={effect}
                >
                    {effect}
                </div>
            );
        });
    }

    return (
        <div className="effect-select">
            {showEffects()}
        </div>
    );
};

export default EffectSelect;