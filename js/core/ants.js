
class Ants {
  constructor() {
    this.masterAudioContext = new AudioContext();
    this.pasrsedAntBuffer;
    this.previousBuffer = null;
    this.playbackRateValue = 1;
    this.loopDurationValue = 8.48;
    this.isLooped = true;
    this.createMasterGainNode();
    this.loadBuffer();
    window.addEventListener('load',() => {
      this.bindEvents();
    })
  }


  // Should really create a buffer Map of some sort. Basically grab all these src urls then create the accociated buffers
  loadBuffer(){
      let bufferMap = {
        ants:{
          src:'/audio/dmbamlg.wav',
        },
      };

      Object.entries(bufferMap).map((i)=>{
        const { src } = i[1];
        let request = new XMLHttpRequest();
        request.open("GET", src, true);
        request.responseType = "arraybuffer";
        request.onload = () => {
          this.masterAudioContext.decodeAudioData(request.response, (requestedBuffer)=>{
            this.pasrsedAntBuffer = requestedBuffer;
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
    const antsButton = document.querySelectorAll('.antsButton')[0];
    const killButton = document.getElementById('kill');
    const playbackRate = document.getElementById('playbackRate');
    const loopDuration = document.getElementById('loopDuration');
    const loopCheckbox = document.getElementById('loop');
    antsButton.addEventListener('click',(e)=>{
      this.playNote(this.loopDurationValue);
    })
    killButton.addEventListener('click',()=>{
      this.masterAudioContext.close();
    });
    playbackRate.oninput = ()=>{
      this.playbackRateValue = playbackRate.value;
      document.getElementById('playBackRateValue').innerHTML = this.playbackRateValue;
      
      this.activeBuffer.playbackRate.value = this.playbackRateValue;
    };
    loopDuration.oninput = ()=>{
      this.loopDurationValue = loopDuration.value;
      document.getElementById('loopDurationValue').innerHTML = this.loopDurationValue;

      this.activeBuffer.loopEnd = this.loopDurationValue;
    };
    loopCheckbox.oninput = (e) => {
      this.isLooped = e.target.checked;
    }
  }
  playNote() {
    if(this.masterAudioContext.state === 'closed') {
      this.masterAudioContext = new AudioContext();
      this.createMasterGainNode();
    } 
    // console.log(buffer);
    if(this.previousBuffer) this.previousBuffer.stop(0);
    let buffer = this.masterAudioContext.createBufferSource();
    buffer.buffer = this.pasrsedAntBuffer;
    buffer.loop = this.isLooped;
    buffer.loopStart = 0;
    buffer.loopEnd = this.loopDurationValue;
    buffer.playbackRate.value = this.playbackRateValue;
    //AudioLayer.samples.sampleBuffer = sample;
    //AudioLayer[playerId] = sample;
    let gain = this.masterGainNode;
    buffer.connect(gain);
    buffer.start(0);
    this.activeBuffer = buffer;
    this.previousBuffer = buffer;

  }

}

new Ants();