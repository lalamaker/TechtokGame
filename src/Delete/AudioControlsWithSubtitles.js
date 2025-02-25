import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Subtitles,
  X,
  MoreVertical,
} from "lucide-react";

const AudioControlsWithSubtitles = ({
  audioSrc,
  srtSrc,
  spokenContent,
  onPlayingChange,
  showControlsMenu,
  setShowControlsMenu,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [currentCaption, setCurrentCaption] = useState(spokenContent);
  const [subtitles, setSubtitles] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Load and parse SRT file if provided
  useEffect(() => {
    const loadSubtitles = async () => {
      if (!srtSrc) {
        setSubtitles([]);
        setCurrentCaption(spokenContent);
        return;
      }

      try {
        const response = await fetch(srtSrc);
        const srtContent = await response.text();
        const parsedSubtitles = parseSRT(srtContent);
        setSubtitles(parsedSubtitles);
        if (!isPlaying && parsedSubtitles.length > 0) {
          setCurrentCaption(parsedSubtitles[0].text);
        }
      } catch (error) {
        console.error("Error loading subtitles:", error);
        setSubtitles([]);
        setCurrentCaption(spokenContent);
      }
    };
    loadSubtitles();
  }, [srtSrc, spokenContent]);

  // Handle audio time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;
      const currentSub = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );

      if (currentSub) {
        setCurrentCaption(currentSub.text);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [subtitles]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        setShowSubtitles(true);
      }
      setIsPlaying(!isPlaying);
      onPlayingChange?.(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      onPlayingChange?.(false);
      setCurrentCaption(subtitles[0]?.text || spokenContent);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        {showSubtitles && currentCaption && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-[#EFEAFC] rounded-xl p-4 w-164 shadow-lg mb-4 relative"
          >
            <button
              onClick={() => {
                setShowSubtitles(false);
                if (isPlaying) {
                  togglePlay();
                }
              }}
              className="absolute right-2 top-2"
            >
              <X className="w-4 h-4 text-[#5F29FF]" />
            </button>
            <motion.p
              key={currentCaption}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-[#0D065B] mt-4"
            >
              {currentCaption}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Controls */}
      <AnimatePresence>
        {showControlsMenu && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="ml-2 flex items-center gap-2 bg-white rounded-full shadow-lg p-1 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRewind}
              className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
            >
              <RotateCcw className="w-5 h-5 text-[#5F29FF]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-[#5F29FF]" />
              ) : (
                <Play className="w-5 h-5 text-[#5F29FF]" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-[#5F29FF]" />
              ) : (
                <Volume2 className="w-5 h-5 text-[#5F29FF]" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSubtitles(!showSubtitles)}
              className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
            >
              <Subtitles className="w-5 h-5 text-[#5F29FF]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio element */}
      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => {
            setIsPlaying(false);
            onPlayingChange?.(false);
            setCurrentCaption(subtitles[0]?.text || spokenContent);
          }}
        />
      )}
    </>
  );
};

export default AudioControlsWithSubtitles;
