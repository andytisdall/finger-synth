import * as Tone from 'tone';

class toneGenerator {

    constructor() {


        this.delay = new Tone.FeedbackDelay('4n');
        this.vibrato = new Tone.Vibrato();
        this.filter = new Tone.Filter(20000, 'lowpass');
        this.distortion = new Tone.Distortion();
        this.synth = new Tone.Synth();

        this.chain = [
            this.distortion,
        ]

        this.connectChain();

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
        if (this.chain.includes(this.filter)) {
            this.filter.frequency.value = value * 150;
        }
        if (this.chain.includes(this.vibrato)) {
            this.vibrato.depth.value = value / 100;
        }
        if (this.chain.includes(this.delay)) {
            this.delay.wet.value = value / 100;
        }
        
    }

    stop() {
        this.synth.triggerRelease()
    }

    connectChain() {

        // this.chain.reduce((previousNode, currentNode, i, arr) => {

        //     previousNode.connect(currentNode);

        //     if (i === arr.length - 1) {
        //         currentNode.toDestination();
        //     }

        //     return currentNode;
            
        // });

        this.synth.chain(...this.chain, Tone.Destination)

    }

    addEffect(effect) {

        if (effect === 'filter') {
            if (this.chain.length < 2) {
                this.chain.push(this.filter);
            } else {
                this.chain.splice(1, 0, this.filter);
            }            
        }


        if (effect === 'vibrato') {
            if (this.chain.length < 2) {
                this.chain.push(this.vibrato);
            } else {
                this.chain.splice(3, 0, this.vibrato);
            }
        }

        if (effect === 'delay') {
            if (this.chain.length < 2) {
                this.chain.push(this.delay);
            } else {
                this.chain.splice(4, 0, this.delay);
            }
        }


        this.connectChain();

    }

    removeEffect(effect) {

        if (effect === 'filter') {
            this.chain.pop(1).disconnect();
        }

        if (effect === 'vibrato') {
            if (this.chain.length === 2) {
                this.chain.pop(1).disconnect();
            }

            else {
                this.chain.pop(2).disconnect();
            }
        }

        if (effect === 'delay') {
            if (this.chain.length === 2) {
                this.chain.pop(1).disconnect();
            } else if (this.chain.length === 3) {
                this.chain.pop(2).disconnect();
            } else {
                this.chain.pop(3).disconnect();
            }
        }


        this.connectChain();

    }



}


export default toneGenerator;