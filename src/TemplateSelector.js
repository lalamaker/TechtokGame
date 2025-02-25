import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Maximize2, Minimize2 } from "lucide-react";
import Confetti from "./Confetti";

// Base Template for consistent layout
const BaseTemplate = ({ content, children }) => (
  <div className="space-y-8 w-full">
    {content?.title && (
      <h2 className="text-2xl font-bold text-[#0D065B] mb-6">
        {content.title}
      </h2>
    )}
    {children}
  </div>
);

// Template for rendering standard content with optional video
const ContentTemplate = ({
  content,
  videoContainerRef,
  isFullscreen,
  toggleFullscreen,
}) => {
  const renderVideo = () => {
    if (!content?.videoUrl) return null;

    const videoId = content.videoUrl.match(/(?:vimeo\.com\/)(\d+)/)?.[1];
    if (!videoId) return null;

    return (
      <div
        ref={videoContainerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-black"
      >
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=ef9c24aa47&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          title="Embedded Vimeo video"
        />
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5 text-white" />
          ) : (
            <Maximize2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    );
  };

  const renderTools = () => {
    if (!content?.tools) return null;

    return (
      <div className="grid grid-cols-1 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {content.tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-${
              tool.theme === "blue"
                ? "[#D6DCFF]"
                : tool.theme === "purple"
                ? "[#EFEAFC]"
                : "[#F1FFF9]"
            } rounded-xl p-6`}
          >
            <div className="text-center">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl mb-4"
              >
                {tool.icon}
              </motion.div>
              <h3 className="text-xl font-medium text-[#0D065B] mb-2">
                {tool.title}
              </h3>
              <p className="text-[#0D065B]">{tool.description}</p>
              {tool.examples && (
                <div className="mt-4 flex justify-center gap-4">
                  {tool.examples.map((example, i) => (
                    <span key={i} className="text-2xl">
                      {example}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {tool.observations && (
              <div className="mt-6 border-t border-[#0D065B]/10 pt-4">
                <p className="text-[#5F29FF] font-medium mb-2">
                  {tool.subTitle}
                </p>
                <ul className="space-y-2 text-left">
                  {tool.observations.map((observation, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-[#0D065B]"
                    >
                      <span className="text-[#5F29FF]">👀</span>
                      <span>{observation}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  const renderTips = () => {
    if (!content?.tips) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#EFEAFC]/20 rounded-xl p-6"
      >
        <ul className="space-y-2 text-[#0D065B]">
          {content.tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="text-xl"
              >
                {tip.icon}
              </motion.span>
              {tip.text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    );
  };

  if (!content?.title && content?.mainContent) {
    content.title = content.mainContent;
  }
  return (
    <BaseTemplate content={content}>
      {renderVideo()}
      {renderTools()}
      {renderTips()}
    </BaseTemplate>
  );
};

// Template for quiz content
const QuizTemplate = ({
  content,
  onSelectAnswer,
  selectedAnswer,
  isChecking,
}) => {
  return (
    <BaseTemplate content={content}>
      <div className="space-y-4">
        {content?.question && (
          <div>
            <div className="mb-6 text-lg text-[#0D065B]">
              {content.question}
            </div>
            <h3 className="text-xl font-medium text-[#0D065B] mb-2">
              {content.subQuestion}
            </h3>
          </div>
        )}
        {content.options?.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectAnswer && onSelectAnswer(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full p-6 rounded-xl text-left transition-all relative
              ${
                selectedAnswer === index
                  ? isChecking
                    ? option.correct
                      ? "bg-[#F1FFF9] border-2 border-[#8CFFCF]"
                      : "bg-[#FFDFDF] border-2 border-[#FF8686]"
                    : "bg-[#EFEAFC] border-2 border-[#AA8DFF]"
                  : "bg-white hover:bg-[#EFEAFC] border-2 border-transparent"
              }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{option.icon}</div>
              <div className="text-lg">{option.text}</div>
            </div>
            {isChecking && selectedAnswer === index && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-6 top-7 -translate-y-1/2 text-2xl"
              >
                {option.correct ? "✅" : "❌"}
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </BaseTemplate>
  );
};

// Template for achievement displays
const AchievementTemplate = ({ content }) => {
  if (!content?.achievements) return null;

  return (
    <BaseTemplate content={content}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2, scale: 0.5, y: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 0.8, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star className="w-4 h-4 text-[#FAFF05]" />
            </motion.div>
          ))}
        </div>

        {content.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "backOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[#EFEAFC] transform-gpu"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl mb-4 flex justify-center"
            >
              {achievement.icon}
            </motion.div>

            <motion.h3
              animate={{
                color: ["#0D065B", "#5F29FF", "#0D065B"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl font-bold text-center mb-2"
            >
              {achievement.title}
            </motion.h3>

            <p className="text-[#0D065B] text-center">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </BaseTemplate>
  );
};

// Export individual templates for direct use if needed
export { ContentTemplate, QuizTemplate, AchievementTemplate };

// Main template selector component
const TemplateSelector = ({ type, content, ...props }) => {
  switch (type) {
    case "quiz":
      return <QuizTemplate content={content} {...props} />;
    case "achievements":
      return <AchievementTemplate content={content} {...props} />;
    case "content":
      return <ContentTemplate content={content} {...props} />;
    default:
      console.warn(
        `Unknown template type "${type}", falling back to ContentTemplate`
      );
      return <ContentTemplate content={content} {...props} />;
  }
};

export default TemplateSelector;
