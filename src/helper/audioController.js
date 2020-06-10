import soundManager from 'soundmanager2';

import twoTickClockString from '../audio/twoTick-clock-string.wav';
import twoTickClockBassDry from '../audio/twoTick-clock-bassDry.wav';

export default class AudioController {

    ready = false;
    manager = soundManager.soundManager;
    soundCollection = new Map();
    sounds = new Map([
        ["twoTick-clock-string", twoTickClockString],
        ["twoTick-clock-bassDry", twoTickClockBassDry]
    ]);

    constructor(soundSelected){
        var self = this;
        this.manager.setup({
            onready: function(){
                self.ready = true;
                self.addSound(soundSelected);
            },
            debugMode: false
        });
    }
    addSound = (id, volume = 50) => {
        if(this.ready){
            this.soundCollection.set(id, this.manager.createSound({
                id: id,
                url: this.sounds.get(id),
                volume: volume
            }))
        }
    }
    hasSound = (id) => {
        return this.soundCollection.has(id);
    }
    play = (id) => {
        if(this.ready){
            this.soundCollection.get(id).play();
        }
    }
    setVolume = (id, volume) => {
        var sound = this.soundCollection.get(id);
        if(sound){
            sound.setVolume(volume);
        }
    }
}