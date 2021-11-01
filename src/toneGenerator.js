import * as Tone from 'tone';

class toneGenerator {

    constructor() {

        this.filter = new Tone.Filter(20000, 'lowpass').toDestination();
        this.distortion = new Tone.Distortion().connect(this.filter)
        this.synth = new Tone.Synth().connect(this.distortion);
        console.log('player created')

    }

    play(frequency, mod) {

        this.synth.triggerAttack();
        this.filter.frequency.value = mod * 150;
        this.synth.frequency.value = frequency;
    }

    changeFreq(frequency) {
        this.synth.frequency.value = frequency;
    }

    changeMod(value) {
        this.filter.frequency.value = value * 150;
    }

    stop() {
        this.synth.triggerRelease()
    }

}


export default toneGenerator;