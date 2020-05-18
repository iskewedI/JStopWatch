import React, {Component} from 'react';

import soundManager from 'soundmanager2';
// import {sounds} from './interfaces';
import twoTick from '../audio/twoTick-clock-sound.wav';

class AudioController {
    ready = false;
    manager = soundManager.soundManager;
    soundCollection = new Map();

    sounds = new Map();

    constructor(){
        var self = this;
        this.manager.setup({
            onready: function(){
                self.ready = true;
            },
            debugMode: false
        })
        this.sounds.set("twoTick-clock-sound", twoTick);
            
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
        this.soundCollection.get(id).setVolume(volume);
    }
}

export default AudioController;