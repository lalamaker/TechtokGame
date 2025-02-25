import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { parseSRT } from "./SRTParser";

const AudioPlayer = ({ audioSrc, srtSrc, isPlaying, onPlayingChange }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const loadSubtitles = async () => {
      try {
        const response = await window.fs.readFile(srtSrc, { encoding: "utf8" });
        const parsedSubtitles = parseSRT(response);
        setSubtitles(parsedSubtitles);
      } catch (error) {
        console.error("Error loading subtitles:", error);
      }
    };

    if (srtSrc) {
      loadSubtitles();
    }
  }, [srtSrc]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const updateCurrentSubtitle = (time) => {
    const currentSub = subtitles.find(
      (sub) => time >= sub.start && time <= sub.end
    );
    setCurrentSubtitle(currentSub?.text || "");
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      updateCurrentSubtitle(audioRef.current.currentTime);
    }
  };

  const handlePlay = () => {
    onPlayingChange(true);
  };

  const handlePause = () => {
    onPlayingChange(false);
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      onPlayingChange(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => onPlayingChange(false)}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* Captions */}
      <div className="bg-black/75 text-white p-4 rounded-t-xl">
        <p className="text-center min-h-[3rem]">{currentSubtitle}</p>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={handleRewind}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={() => onPlayingChange(!isPlaying)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
