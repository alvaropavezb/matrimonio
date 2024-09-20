import React, { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import './AudioPlayer.css'; // External styles for better customization

const ExpandingAudioPlayer = ({ audioSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayerRef = useRef(null);

  const togglePlayer = () => {
    setIsExpanded(!isExpanded);

    // If expanding the player, start playing the audio
    if (!isExpanded && audioPlayerRef.current) {
      audioPlayerRef.current.audioEl.current.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      audioPlayerRef.current.audioEl.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (audioPlayerRef.current.audioEl.current.paused) {
      audioPlayerRef.current.audioEl.current.play();
      setIsPlaying(true);
    } else {
      audioPlayerRef.current.audioEl.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`audio-player-container ${isExpanded ? 'expanded' : ''}`}>
      <button className="play-button" onClick={togglePlayer}>
        {isPlaying ? "Pause" : "▶"}
      </button>
      {isExpanded && (
        <div className="audio-controls">
          <ReactAudioPlayer
            ref={audioPlayerRef}
            src={audioSrc}
            controls
            autoPlay={false} // Autoplay is false by default
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ExpandingAudioPlayer;