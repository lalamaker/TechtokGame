import React from "react";
import { motion } from "framer-motion";

// Base Template Components
const BaseTemplate = ({ content, children }) => (
  <div className="space-y-8 w-full">
    {content.title && (
      <h2 className="text-2xl font-bold text-[#0D065B] mb-6">
        {content.title}
      </h2>
    )}
    {children}
  </div>
);

// Card Template - For displaying information in a card format
const CardTemplate = ({ content }) => (
  <BaseTemplate content={content}>
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-[#EFEAFC]">
      {content.description && (
        <p className="text-[#0D065B] mb-4">{content.description}</p>
      )}
      {content.items?.map((item, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <h3 className="text-xl font-bold text-[#0D065B] mb-2">
            {item.title}
          </h3>
          <p className="text-[#0D065B]">{item.description}</p>
        </div>
      ))}
    </div>
  </BaseTemplate>
);

// Grid Template - For displaying items in a grid
const GridTemplate = ({ content }) => (
  <BaseTemplate content={content}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {content.items?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-${
            item.theme === "blue"
              ? "[#D6DCFF]"
              : item.theme === "purple"
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
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-medium text-[#0D065B] mb-2">
              {item.title}
            </h3>
            <p className="text-[#0D065B]">{item.description}</p>

            {item.bullets && (
              <ul className="mt-4 text-left space-y-2">
                {item.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-[#0D065B]"
                  >
                    <span className="text-[#5F29FF]">•</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </BaseTemplate>
);

// Quiz Template - For quiz questions
const QuizTemplate = ({
  content,
  onSelectAnswer,
  selectedAnswer,
  isChecking,
}) => (
  <BaseTemplate content={content}>
    {content.question && (
      <div className="mb-6 text-lg text-[#0D065B]">{content.question}</div>
    )}
    <div className="space-y-4">
      {content.options?.map((option, index) => (
        <motion.button
          key={index}
          onClick={() => onSelectAnswer?.(index)}
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

// Video Template - For video content
const VideoTemplate = ({ content }) => (
  <BaseTemplate content={content}>
    {content.videoUrl && (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={content.videoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          title={content.title || "Video content"}
        />
      </div>
    )}
  </BaseTemplate>
);

// Tips Template - For displaying tips
const TipsTemplate = ({ content }) => (
  <BaseTemplate content={content}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#EFEAFC]/20 rounded-xl p-6"
    >
      <ul className="space-y-2 text-[#0D065B]">
        {content.tips?.map((tip, index) => (
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
  </BaseTemplate>
);

// Template registry
const templates = {
  card: CardTemplate,
  grid: GridTemplate,
  quiz: QuizTemplate,
  video: VideoTemplate,
  tips: TipsTemplate,
};

// Main template component that renders the appropriate template
const ContentTemplate = ({ type, content, ...props }) => {
  const Template = templates[type];
  if (!Template) {
    console.warn(`Template type "${type}" not found`);
    return null;
  }
  return <Template content={content} {...props} />;
};

export default ContentTemplate;
