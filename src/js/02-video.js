import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const STORAGE_KEY = "videoplayer-current-time";
const previousTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
  const time  = event.seconds;
  localStorage.setItem(STORAGE_KEY, time);
}

player.setCurrentTime(previousTime).then().catch();