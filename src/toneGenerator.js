import * as Tone from 'tone';


const filter = new Tone.Filter(15000, 'lowpass').toDestination();
const distortion = new Tone.Distortion().connect(filter)
const synth = new Tone.Synth().connect(distortion);

const player = {

    play: (frequency, mod) => {

        synth.triggerAttack();
        filter.frequency.value = mod * 150;
        synth.frequency.value = frequency;
    },

    changeFreq: (frequency) => {
        synth.frequency.value = frequency;
    },

    changeMod: (value) => {
       filter.frequency.value = value * 150;
    },

    stop: () => {
        synth.triggerRelease()
    }

};


export default player;