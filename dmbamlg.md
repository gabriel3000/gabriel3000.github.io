---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: ants
---
<div class="background"><img src="img/ants.png"/></div>
<div class="foreground">
  <div class="logo">
    <img src="img/dmbamlg.png">
  </div>
  <button class="button antsButton">play</button>
  <button class="button kill" id="kill">kill</button>
  <label class="loop-label" for="loop">loop<input id="loop" checked type="checkbox"/></label>
  <div class="slider">
    <label for="loopDuration">loop duration:</label><span id="loopDurationValue">8.48</span>
    <input id="loopDuration" type="range" min="0.001" step="0.001" max="8.480" value="8.480"/>
  </div>
  <div class="slider">
    <label for="playBackRate">playback rate:</label><span id="playBackRateValue">1.00</span>
    <input id="playbackRate" type="range" min=".01" step="0.001" max="4" value="1"/>
  </div>
</div>
<style>
  body {
    color: #000!important;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 0!important;
    padding-right: 0!important;
}
  @media (min-width: 1200px) {
    body .container {
        width: 100% !important;
    }
  }
  main {
    margin: 0;
    width: 100%!important;
  }
  .slider {
    background-color: #ccc;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #2b2b2b;
  border-right: 1px solid #2b2b2b;
    padding: 10px;
    margin-bottom: 10px;
  }
  .slider input{
    display: block;
    width: 100%;
  }
*{
  box-sizing: border-box;
}
.loop-label {
  display: inline-block;
  margin-bottom: 20px;
  background-color: #ccc;
  font-size: 30px;
  height: 67px;
  padding: 10px 20px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #2b2b2b;
  border-right: 1px solid #2b2b2b;
}
.button {
  display: inline-block;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #2b2b2b;
  border-right: 1px solid #2b2b2b;
  background-color: #ccc!important;
  font-size: 30px;
  height: 67px;
  padding: 10px 20px;
}
.foreground {
  margin: 0 auto;
  background-color: #bb7dff;
  width: 400px;
  padding: 5px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #2b2b2b;
  border-right: 1px solid #2b2b2b;
}
.background {
  z-index: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.background img {
  display:block;
  width: 100%;
  height: 100%;
}
.foreground {
  z-index: 100;
  position: relative;
}
.logo {
  width: 100%;
}
.logo img {
  display: block;
  width: 100%;
  border: 10px solid #fff;
}
</style>
<script src="{{ site.baseurl }}js/core/ants.js"></script>