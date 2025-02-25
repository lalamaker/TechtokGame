import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Subtitles,
  MoreVertical,
} from "lucide-react";

const AudioControls = forwardRef(
  (
    {
      audioSrc,
      onPlayStateChange,
      onSubtitlesToggle,
      onTimeUpdate,
      showControlsMenu,
      setShowControlsMenu,
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      togglePlay: async () => {
        await togglePlay();
      },
      play: async () => {
        if (audioRef.current && !isPlaying) {
          await togglePlay();
        }
      },
      pause: () => {
        if (audioRef.current && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
          onPlayStateChange?.(false);
        }
      },
    }));

    useEffect(() => {
      if (!audioSrc) return;

      if (audioRef.current) {
        audioRef.current.load();
        setIsPlaying(false);
        onPlayStateChange?.(false);
      }
    }, [audioSrc]);

    const togglePlay = async () => {
      if (!audioRef.current || !audioSrc) {
        console.warn("No audio element or source");
        return;
      }

      try {
        if (isPlaying) {
          await audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
        onPlayStateChange?.(!isPlaying);
      } catch (error) {
        console.error("Play/Pause error:", error);
        setIsPlaying(false);
        onPlayStateChange?.(false);
      }
    };

    const handleRewind = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (isPlaying) {
          audioRef.current.play().catch(console.error);
        }
      }
    };

    const toggleMute = () => {
      if (audioRef.current) {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const handleError = (e) => {
        console.error("Audio error:", e);
        setIsPlaying(false);
        onPlayStateChange?.(false);
      };

      const handleTimeUpdateEvent = () => {
        onTimeUpdate?.(audio.currentTime);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        onPlayStateChange?.(false);
      };

      audio.addEventListener("error", handleError);
      audio.addEventListener("timeupdate", handleTimeUpdateEvent);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("timeupdate", handleTimeUpdateEvent);
        audio.removeEventListener("ended", handleEnded);
      };
    }, [onTimeUpdate, onPlayStateChange]);

    return (
      <>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          onClick={() => setShowControlsMenu(!showControlsMenu)}
          className="absolute top-0 right-0 bg-white/70 rounded-full p-1 shadow-sm hover:bg-white/90 transition-all"
        >
          <MoreVertical className="w-4 h-4 text-[#5F29FF]" />
        </motion.button>

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
                disabled={!audioSrc}
              >
                <RotateCcw className="w-5 h-5 text-[#5F29FF]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
                disabled={!audioSrc}
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
                disabled={!audioSrc}
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
                onClick={onSubtitlesToggle}
                className="p-2 rounded-full hover:bg-[#EFEAFC] transition-colors"
              >
                <Subtitles className="w-5 h-5 text-[#5F29FF]" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <audio
          ref={audioRef}
          src={audioSrc}
          preload="auto"
          onError={(e) => console.error("Audio error:", e)}
        />
      </>
    );
  }
);

AudioControls.displayName = "AudioControls";

export default AudioControls;
