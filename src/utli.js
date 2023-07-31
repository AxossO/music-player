export const playAudio = (isPlaying, audioRef) => {
  //  Check If song Is Playing
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }
};
