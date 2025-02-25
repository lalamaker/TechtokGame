import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import { parseSRT } from "./SRTParser";
import AudioControls from "./AudioControls";
import { X } from "lucide-react";
import Confetti from "./Confetti";
import TemplateSelector from "./TemplateSelector";

const MAX_STATES = {
  idle: { input: "idle", type: "trigger" },
  happy: { input: "happy", type: "trigger" },
  wave: { input: "wave", type: "trigger" },
  sad: { input: "sad", type: "trigger" },
  follow: { input: "follow", type: "trigger" },
  smile: { input: "smile", type: "trigger" },
  talk: { input: "talk", type: "trigger" },
  hover: { input: "hover", type: "trigger" },
  thinking: { input: "thinking", type: "trigger" },
};

const TeachingAvatar = ({
  mainContent,
  visualContent,
  spokenContent,
  quizOptions,
  onSelectAnswer,
  selectedAnswer,
  isCorrect,
  isChecking,
  isCelebration,
  isSuccess,
  audioSrc,
  srtSrc,
  initialState = "wave",
  state,
}) => {
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [showControlsMenu, setShowControlsMenu] = useState(false);
  const [currentCaption, setCurrentCaption] = useState(spokenContent);
  const [subtitles, setSubtitles] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef(null);
  const audioControlsRef = useRef(null);

  const { rive, RiveComponent } = useRive({
    src: "/avatar/max-avatar.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  useEffect(() => {
    if (rive && state) {
      const stateConfig = MAX_STATES[state];
      if (stateConfig) {
        const input = rive
          .stateMachineInputs("State Machine 1")
          .find((input) => input.name === stateConfig.input);
        if (input) {
          input.fire();
        }
      }
    }
  }, [rive, state]);

  useEffect(() => {
    const loadSubtitles = async () => {
      if (!visualContent?.srtSrc) {
        setSubtitles([]);
        setCurrentCaption(spokenContent);
        return;
      }

      try {
        const response = await fetch(visualContent.srtSrc);
        const srtContent = await response.text();
        const parsedSubtitles = parseSRT(srtContent);
        setSubtitles(parsedSubtitles);
        setCurrentCaption(parsedSubtitles[0]?.text || spokenContent);
      } catch (error) {
        console.error("Error loading subtitles:", error);
        setSubtitles([]);
        setCurrentCaption(spokenContent);
      }
    };
    loadSubtitles();
  }, [visualContent?.srtSrc, spokenContent]);

  const handleTimeUpdate = (currentTime) => {
    if (subtitles.length > 0) {
      const currentSub = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );
      if (currentSub) {
        setCurrentCaption(currentSub.text);
      }
    } else {
      setCurrentCaption(spokenContent);
    }
  };

  const handlePlayStateChange = (isPlaying) => {
    if (isPlaying) {
      setShowSubtitles(true);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 sticky top-0 z-50">
          <div className="sticky top-0 md:top-[40vh] z-50 flex flex-col items-center md:items-end">
            <AnimatePresence mode="wait">
              {showSubtitles && currentCaption && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-[#EFEAFC]  hidden md:block rounded-xl p-4 w-164 shadow-lg mb-4 relative"
                >
                  <button
                    onClick={() => setShowSubtitles(false)}
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

            <div className="relative flex items-center">
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    if (audioControlsRef.current) {
                      audioControlsRef.current.togglePlay();
                      setShowControlsMenu(true);
                    }
                  }}
                  className="w-48 h-48 rounded-full overflow-hidden relative group"
                >
                  <div className="w-full h-full">
                    <RiveComponent style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div className="absolute inset-0 group-hover:bg-black/5 transition-colors" />
                </motion.button>

                <AudioControls
                  ref={audioControlsRef}
                  audioSrc={audioSrc}
                  onPlayStateChange={handlePlayStateChange}
                  onSubtitlesToggle={() => setShowSubtitles(!showSubtitles)}
                  onTimeUpdate={handleTimeUpdate}
                  showControlsMenu={showControlsMenu}
                  setShowControlsMenu={setShowControlsMenu}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mt-4 md:mt-0">
            {(isCelebration || isSuccess) && <Confetti count={75} />}
            <TemplateSelector
              type={
                quizOptions
                  ? "quiz"
                  : isCelebration || isSuccess
                  ? "achievements"
                  : "content"
              }
              content={{
                ...visualContent,
                title: mainContent || visualContent?.title,
                options: quizOptions,
                question: visualContent?.question,
                subQuestion: visualContent?.subQuestion,
                achievements: visualContent?.achievements,
              }}
              onSelectAnswer={onSelectAnswer}
              selectedAnswer={selectedAnswer}
              isChecking={isChecking}
              videoContainerRef={videoContainerRef}
              isFullscreen={isFullscreen}
              toggleFullscreen={toggleFullscreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingAvatar;
