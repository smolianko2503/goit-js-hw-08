import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY_LOCAL = "videoplayer-current-time";

function onTimeUpdate(currentTime) {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(currentTime.seconds));
  console.log(currentTime.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const timeOn = localStorage.getItem(KEY_LOCAL);

if(timeOn){
   player.setCurrentTime(timeOn).then(function(seconds) {
    console.log(seconds)
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }

})
};

console.log(KEY_LOCAL);
 

