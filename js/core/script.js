window.requestAnimFrame = (function(){
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){window.setTimeout(callback, 1000 / 60);};
})();
var COLOR = {
  r : 110,
  g : 1,
  b : 250,
  rdown : false,
  gdown : false,
  bdown : false,
  font: '',
  themes: [{
    bg: '#BAC1B8',
    cp: '#D64933'
  }, {
    cp: '#E55381',
    bg: '#190B28'
  }, {
    cp: '#797D81',
    bg: '#EFB0A1'
  }, {
    cp: '#38023B',
    bg: '#CCFFCB'
  }, {
    cp: '#FED766',
    bg: '#FE4A49'
  }, {
    cp: '#6D3D14',
    bg: '#CDC5B4'
  }, {
    cp: '#38AECC',
    bg: '#022F40'
  }, {
    cp: '#6F5B58',
    bg: '#F6D6BA'
  }, {
    cp: '#FFCBDD',
    bg: '#3E000C'
  }, {
    cp: '#521945',
    bg: '#EAF2EF'
  }, {
    bg: '#D64933',
    cp: '#BAC1B8'
  }, {
    cp: '#190B28',
    bg: '#E55381'
  }, {
    cp: '#EFB0A1',
    bg: '#797D81'
  }, {
    cp: '#CCFFCB',
    bg: '#38023B'
  }, {
    cp: '#FE4A49',
    bg: '#FED766'
  }, {
    cp: '#CDC5B4',
    bg: '#6D3D14'
  }, {
    cp: '#022F40',
    bg: '#38AECC'
  }, {
    cp: '#F6D6BA',
    bg: '#6F5B58'
  }, {
    cp: '#3E000C',
    bg: '#FFCBDD'
  }, {
    cp: '#EAF2EF',
    bg: '#521945'
  }],
  randomize: function() {
    return Math.floor((Math.random() * COLOR.themes.length));
  },
  crazylinks: function(thelink) {
    thelink.draw = function() {
      window.requestAnimFrame(function() {
        if(COLOR.rdown == true){
          COLOR.r < 1 ? COLOR.rdown = false : COLOR.r = COLOR.r - 4;
        }else{
          COLOR.r > 240 ? COLOR.rdown = true : COLOR.r = COLOR.r + 4;
        }
        if(COLOR.gdown == true){
          COLOR.g < 1 ? COLOR.gdown = false : COLOR.g = COLOR.g - 4;
        }else{
          COLOR.g > 240 ? COLOR.gdown = true : COLOR.g = COLOR.g + 4;
        }
        if(COLOR.bdown == true){
          COLOR.b < 1 ? COLOR.bdown = false : COLOR.b = COLOR.b - 4;
        }else{
          COLOR.b > 240 ? COLOR.bdown = true : COLOR.b = COLOR.b + 4;
        }
        thelink.style.color = 'rgb(' + COLOR.r + ',' + COLOR.g + ',' + COLOR.b + ')';

        if (thelink.stopanimation) {
          thelink.style.color = COLOR.font;
          //return;

        } else {
          thelink.draw();
        }
      });
    }
  },
  links: function() {
    var anchortags = document.getElementsByClassName('link');
    var anchoramount = anchortags.length;
    for (var i = 0; i < anchoramount; i++) {
      var thelink = document.getElementById('link' + i);
      COLOR.crazylinks(thelink);
      thelink.addEventListener('mouseover', function(e) {
        this.stopanimation = false;
        this.draw();
      }, false)
      thelink.addEventListener('mouseout', function(e) {
        this.stopanimation = true;
        this.style.color = COLOR.font;
      }, false)
    }
  },
  buildstyle: function() {
    var randomThemeNum = COLOR.randomize();
    COLOR.font = COLOR.themes[randomThemeNum].cp;
    var css = '#wrap { background: ' + COLOR.themes[randomThemeNum].bg + '; }' +
      'body * { color:' + COLOR.font + ' }';

    head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  },
  init: function() {
    COLOR.buildstyle();
    COLOR.links();

    var cubert = document.getElementById('cubert');
    cubert.addEventListener('mouseover',function(){
      COLOR.buildstyle();
    },false);

    //Reload page if keystone is being shit.
    if(document.getElementById("cmscontent") == null){
      window.location.href = window.location.href;
    }
  }
};
window.addEventListener('load', COLOR.init, false)
