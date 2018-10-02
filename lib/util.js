export const shuffle = (word)=>{
    for (let i = word.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [word[i], word[j]] = [word[j], word[i]];
    }
    return word;
};

export const formatTime = (seconds) =>{
  let minutes = Math.floor(seconds/60);
  let secs = seconds%60;
  const tmpSec = `0${secs}`;
  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);
  return `${minutes}:${paddedSeconds}`;
};
