import React, { useState, useEffect } from "react";
import { Menu, X, Home, ArrowLeft, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavigationMenu = ({
  sections,
  activeSection,
  setActiveSection,
  setCurrentStep,
  score,
  streak,
  isHomeActive,
  onReturnHome,
  gameConfig,
  setSelectedAnswer,
  setIsChecking,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide mobile header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top, hide when scrolling down
      if (currentScrollY <= 0) {
        setShowMobileHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowMobileHeader(false);
      } else {
        setShowMobileHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed Header for Mobile that slides in/out */}
      <AnimatePresence>
        {showMobileHeader && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#EFEAFC] md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{gameConfig.emoji}</span>
                <h1 className="text-2xl font-bold text-[#5F29FF]">
                  {gameConfig.title}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                {/* Add points display to mobile header */}
                {streak > 0 && (
                  <div className="bg-[#FFFFE6] px-2 py-1 rounded-full text-sm shadow-sm border border-[#FAFF05]/20">
                    <span className="font-bold text-[#0D065B]">
                      ✨ {streak}
                    </span>
                  </div>
                )}
                {score > 0 && (
                  <div className="bg-[#EFEAFC] px-2 py-1 rounded-full text-sm shadow-sm border border-[#AA8DFF]/20">
                    <Star className="w-3 h-3 text-[#AA8DFF] inline mr-1" />
                    <span className="font-bold text-[#0D065B]">{score}</span>
                  </div>
                )}
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2 rounded-full hover:bg-[#D6DCFF]"
                >
                  <Menu className="w-6 h-6 text-[#5F29FF]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <div className="hidden md:block sticky top-0 z-30 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto py-2">
          <div className="relative flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/80 to-transparent z-10" />

            <div className="flex items-center px-4">
              <button
                onClick={onReturnHome}
                className="rounded-full flex-shrink-0 p-2 hover:bg-[#EFEAFC] transition-colors mr-2"
              >
                <ArrowLeft className="w-5 h-5 text-[#5F29FF]" />
              </button>
            </div>

            <div className="overflow-x-auto flex-1 scrollbar-hide px-4 pt-2 pb-2">
              <div className="flex items-center gap-4 min-w-max">
                <div
                  className={`rounded-full flex-shrink-0 ${
                    isHomeActive
                      ? "bg-[#5F29FF] ring-4 ring-[#5F29FF]/20"
                      : "bg-[#EFEAFC]"
                  }`}
                >
                  <button
                    onClick={() => {
                      setActiveSection(0);
                      setCurrentStep(0);
                    }}
                    className="p-2"
                  >
                    <Home
                      className={`w-5 h-5 ${
                        isHomeActive ? "text-white" : "text-[#5F29FF]"
                      }`}
                    />
                  </button>
                </div>

                {sections
                  .filter(
                    (section) =>
                      !section.hideFromNavigation &&
                      !section.key.includes("celebration") &&
                      section.key !== "success" &&
                      section.key !== "intro"
                  )
                  .map((section, index) => {
                    const actualIndex = sections.findIndex(
                      (s) => s.key === section.key
                    );
                    const isActive = activeSection === actualIndex;
                    const isCompleted = actualIndex < activeSection;

                    return (
                      <button
                        key={section.key}
                        onClick={() => {
                          if (actualIndex !== activeSection) {
                            setActiveSection(actualIndex);
                            setCurrentStep(0);
                            setSelectedAnswer(null);
                            setIsChecking(false);
                          }
                        }}
                        className={`px-4 py-2 rounded-full flex-shrink-0 transition-all items-center gap-2 flex relative
                          ${
                            isActive
                              ? "bg-[#5F29FF] text-white ring-4 ring-[#5F29FF]/20"
                              : isCompleted
                              ? "bg-[#D6DCFF] text-[#5F29FF]"
                              : "bg-[#EFEAFC] text-[#5F29FF]"
                          }`}
                      >
                        <span>{section.title}</span>
                        {isCompleted && (
                          <div className="absolute -right-1.5 bg-[#5F29FF] text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/80 to-transparent z-10" />

            <div className="flex-shrink-0 flex items-center gap-3 ml-4 mr-4">
              {streak > 0 && (
                <div className="bg-[#FFFFE6] px-3 py-1.5 rounded-full text-sm shadow-sm border border-[#FAFF05]/20">
                  <span className="font-bold text-[#0D065B]">✨ {streak}</span>
                </div>
              )}
              {score > 0 && (
                <div className="bg-[#EFEAFC] px-3 py-1.5 rounded-full text-sm shadow-sm border border-[#AA8DFF]/20">
                  <Star className="w-4 h-4 text-[#AA8DFF] inline mr-1" />
                  <span className="font-bold text-[#0D065B]">{score}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-xs bg-white z-[101] md:hidden"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-xl font-semibold text-[#0D065B]">
                  Navigation
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-[#EFEAFC]"
                >
                  <X className="w-5 h-5 text-[#5F29FF]" />
                </button>
              </div>

              <div className="p-4 space-y-3">
                <button
                  onClick={onReturnHome}
                  className="w-full px-4 py-3 rounded-xl flex items-center gap-3 bg-[#D6DCFF] text-[#5F29FF]"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back to All Games</span>
                </button>
                <button
                  onClick={() => {
                    setActiveSection(0);
                    setCurrentStep(0);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl flex items-center gap-3
                    ${
                      isHomeActive
                        ? "bg-[#5F29FF] text-white"
                        : "bg-[#EFEAFC] text-[#5F29FF]"
                    }`}
                >
                  <Home
                    className={`w-5 h-5 ${
                      isHomeActive ? "text-white" : "text-[#5F29FF]"
                    }`}
                  />
                  <span className="font-medium">Home</span>
                </button>

                {sections
                  .filter(
                    (section) =>
                      !section.hideFromNavigation &&
                      !section.key.includes("celebration") &&
                      section.key !== "success" &&
                      section.key !== "intro"
                  )
                  .map((section) => {
                    const actualIndex = sections.findIndex(
                      (s) => s.key === section.key
                    );
                    const isActive = activeSection === actualIndex;
                    const isCompleted = actualIndex < activeSection;

                    return (
                      <button
                        key={section.key}
                        onClick={() => {
                          if (actualIndex !== activeSection) {
                            setActiveSection(actualIndex);
                            setCurrentStep(0);
                            setIsOpen(false);
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl flex items-center justify-between
                          ${
                            isActive
                              ? "bg-[#5F29FF] text-white"
                              : isCompleted
                              ? "bg-[#D6DCFF] text-[#5F29FF]"
                              : "bg-[#EFEAFC] text-[#5F29FF]"
                          }`}
                      >
                        <span className="font-medium">{section.title}</span>
                        {isCompleted && (
                          <div className="bg-[#5F29FF] text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMenu;
