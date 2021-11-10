import React, { useState } from 'react';

const Help = () => {

    const [visible, setVisible] = useState(false);

    const showHelp = () => {
        return (
            <div>
                <p>
                    Touch the screen and a sound will be created.  Moving your finger up and down will get a lower or higher note.  You can customize the range of pitches: the key sets the note of the lowest part of the screen.  The base note sets which octave of that lowest note, and the octave range adjusts how many octaves are available.  The more octaves, the larger the range of notes that you can create.
                </p>
                <p>
                    If you move your finger from left to right, you will increase the intensity of the effects, which are shown on the bottom of the screen.  Touch an effect's name to apply it to your sound.
                </p>
            </div>
        );
    };

    return (
        <div className="help" onClick={() => setVisible(!visible)}>
            {visible ? showHelp() : '?'}
        </div>
    );
};

export default Help;