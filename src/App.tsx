import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Home, Star } from "lucide-react";
import TeachingAvatar from "./TeachingAvatar";
import Confetti from "./Confetti";
import NavigationMenu from "./NavigationMenu";
import designSprintSections from "./sections/design-sprint/index"; // Import Design Sprint content
import peacefulParentingSections from "./sections/data-detective/index"; // Import Peaceful Parenting content

const DesignAdventureApp = ({ gameId, onReturnHome }) => {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Set up game configuration based on gameId
  const gameConfig = {
    title:
      gameId === "design-sprint"
        ? "Design Sprint Adventure"
        : "Data Detective Exploration",
    emoji: gameId === "design-sprint" ? "🚀" : "📊",
  };

  // Load appropriate sections based on gameId
  useEffect(() => {
    const gameSections =
      gameId === "design-sprint"
        ? designSprintSections
        : peacefulParentingSections;
    setSections(gameSections);
  }, [gameId]);

  const currentSection = sections[activeSection];
  const currentContent = currentSection?.steps[currentStep];
  const isLastSection = activeSection === sections.length - 1;
  const isLastStep = currentStep === currentSection?.steps.length - 1;
  const isIntroSection = activeSection === 0 && currentStep === 0;
  const isCelebrationSection = currentSection?.key.includes("celebration");
  const isSuccessSection = currentSection?.key === "success";
  const isHomeActive = activeSection === 0;

  const handleAnswer = (index) => {
    if (!isChecking) {
      setSelectedAnswer(index);
    }
  };

  const handleNextSection = () => {
    if (isSuccessSection) {
      // Reset to intro when "Start Again" is clicked
      setActiveSection(0);
      setCurrentStep(0);
      setSelectedAnswer(null);
      setIsChecking(false);
      setScore(0);
      setStreak(0);
    } else if (!isLastSection) {
      setActiveSection(activeSection + 1);
      setCurrentStep(0);
      setSelectedAnswer(null);
      setIsChecking(false);
    }
  };

  const getButtonText = () => {
    if (isSuccessSection) return "Start Again";
    if (isIntroSection) return "Start Adventure";
    if (isCelebrationSection) {
      const nextSection = sections[activeSection + 1];
      return `Continue to ${nextSection?.title.split(" ")[0]}`;
    }
    if (currentContent?.type === "quiz") {
      return isChecking ? "Continue" : "Check Answer";
    }
    return isLastStep ? "Complete Activity" : "Continue";
  };

  const avatarProps = {
    mainContent: currentContent?.content.title,
    visualContent:
      isCelebrationSection || isSuccessSection
        ? { achievements: currentContent.content.achievements }
        : currentContent?.content,
    spokenContent: isChecking
      ? currentContent?.content.options[selectedAnswer]?.feedback
      : currentContent?.content.spokenContent,
    audioSrc: currentContent?.content.audioSrc,
    srtSrc: currentContent?.content.srtSrc,
    quizOptions:
      currentContent?.type === "quiz"
        ? currentContent.content.options
        : undefined,
    onSelectAnswer: handleAnswer,
    selectedAnswer,
    isCorrect: isChecking
      ? currentContent?.content.options[selectedAnswer]?.correct
      : null,
    isChecking,
    isCelebration: isCelebrationSection,
    isSuccess: isSuccessSection,
    state:
      currentContent?.type === "quiz" && isChecking
        ? currentContent.content.options[selectedAnswer]?.correct
          ? "happy"
          : "thinking"
        : currentSection?.maxStates?.intro?.state || "wave",
  };

  if (!sections.length) return null; // Return null while loading sections

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFEAFC] via-[#D6DCFF] to-[#EFEAFC]">
      {/* Title Bar */}
      <div className="w-full bg-white/50 pb-2">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 text-[#5F29FF]">
            <span className="text-2xl">{gameConfig.emoji}</span>
            <h1 className="text-2xl font-bold">{gameConfig.title}</h1>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <NavigationMenu
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setCurrentStep={setCurrentStep}
        score={score}
        streak={streak}
        isHomeActive={isHomeActive}
        onReturnHome={onReturnHome}
        gameConfig={gameConfig}
        setSelectedAnswer={setSelectedAnswer}
        setIsChecking={setIsChecking}
      />

      {/* Main Content */}
      <main className="pt-8 pb-24">
        {(isCelebrationSection || isSuccessSection) && <Confetti count={75} />}
        <TeachingAvatar {...avatarProps} />
      </main>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4">
          {isIntroSection || isCelebrationSection || isSuccessSection ? (
            <button
              onClick={handleNextSection}
              className="w-full px-6 py-3 bg-[#5F29FF] text-white rounded-xl font-medium 
                flex items-center justify-center gap-2 hover:bg-[#0D065B] transition-colors"
            >
              {getButtonText()}
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  setCurrentStep(Math.max(0, currentStep - 1));
                  setSelectedAnswer(null);
                  setIsChecking(false);
                }}
                disabled={currentStep === 0}
                className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 text-gray-500 
                  hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>

              <button
                onClick={() => {
                  if (currentContent.type === "quiz") {
                    if (!isChecking && selectedAnswer !== null) {
                      setIsChecking(true);
                      if (
                        currentContent.content.options[selectedAnswer].correct
                      ) {
                        setScore(score + 1);
                        setStreak(streak + 1);
                      } else {
                        setStreak(0);
                      }
                    } else if (isChecking) {
                      if (isLastStep) {
                        handleNextSection();
                      } else {
                        setCurrentStep(currentStep + 1);
                        setSelectedAnswer(null);
                        setIsChecking(false);
                      }
                    }
                  } else {
                    if (isLastStep) {
                      handleNextSection();
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }
                }}
                disabled={
                  currentContent?.type === "quiz" &&
                  !isChecking &&
                  selectedAnswer === null
                }
                className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 
                  ${
                    currentContent?.type === "quiz" &&
                    !isChecking &&
                    selectedAnswer === null
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#5F29FF] text-white hover:bg-[#0D065B]"
                  } transition-colors`}
              >
                {getButtonText()}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignAdventureApp;
