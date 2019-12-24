

class SoundMachine {
  constructor() {
    this.masterAudioContext = new AudioContext();
    this.createMasterGainNode();
    this.loadBuffer();
    window.addEventListener('load',() => {
      this.bindEvents();
    })
  }


  // Should really create a buffer Map of some sort. Basically grab all these src urls then create the accociated buffers


  loadBuffer(){
      let bufferMap = {
        snare:{
          src:'/audio/g-snare.wav',
          buffer:'',
        },
        kick:{
          src:'/audio/g-kick.wav',
          buffer:'',
        },
        hihat:{
          src:'/audio/g-hihat.wav',
          buffer:'',
        },
        synth:{
          src:'/audio/g-ice.wav',
          buffer:'',
        },
      };

      Object.entries(bufferMap).map((i)=>{
        const { src } = i[1];

        let request = new XMLHttpRequest();
  
        request.open("GET", src, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
          this.masterAudioContext.decodeAudioData(request.response, (requestedBuffer)=>{
            i[1].buffer = requestedBuffer;
          });
        };
        request.send();
      })

      this.bufferMap = bufferMap;

  }

  createMasterGainNode(){
    this.masterGainNode = this.masterAudioContext.createGain();
    this.masterGainNode.gain.value = 0.8;
    this.masterGainNode.connect(this.masterAudioContext.destination);
  }

  bindEvents() {
    const snareButton = document.querySelectorAll('.snare')[0];
    const hihatButton = document.querySelectorAll('.hihat')[0];
    const kickButton = document.querySelectorAll('.kick')[0];
    const iceButton = document.querySelectorAll('.ice')[0];
    snareButton.addEventListener('click',(e)=>{
      this.playNote(this.bufferMap.snare.buffer);
    })
    hihatButton.addEventListener('click',(e)=>{
      this.playNote(this.bufferMap.hihat.buffer);
    })
    kickButton.addEventListener('click',(e)=>{
      this.playNote(this.bufferMap.kick.buffer);
    })
    iceButton.addEventListener('click',(e)=>{
      this.playNote(this.bufferMap.synth.buffer);
    })

  }

  playNote(buffer) {
    let newNote = this.masterAudioContext.createBufferSource();
    newNote.buffer = buffer;
    newNote.loop = false
    newNote.loopStart = 0;
    newNote.loopEnd = 0;
    newNote.playbackRate.value = 1;
    //AudioLayer.samples.sampleBuffer = sample;
    //AudioLayer[playerId] = sample;
    let gain = this.masterGainNode;
    newNote.connect(gain);
    newNote.start(0);
  }

}

// new SoundMachine();