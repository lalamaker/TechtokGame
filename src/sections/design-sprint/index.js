import Intro from "./0-Intro";
import ProblemDetective from "./1-ProblemDetective";
import DesignStudio from "./2-DesignStudio";
import PrototypePlayground from "./3-PrototypePlayground";
import { Rocket } from "lucide-react";

// Game configuration
export const gameConfig = {
  title: "Design Sprint Adventure",
  icon: Rocket,
};

// Success section for course completion
const successSection = {
  key: "success",
  hideFromNavigation: true,
  title: "🎓 Design Thinking Master",
  maxStates: {
    intro: {
      state: "happy",
      message: "You did it! You're now a design thinking expert! 🎓",
      miniMessage: "Congratulations! 🌟",
      expandedMessage:
        "I'm so proud of you! You've learned all the skills you need to solve problems and create amazing solutions.",
    },
  },
  steps: [
    {
      type: "success",
      content: {
        title: "You're a Design Thinking Master! 🎓",
        buttonText: "Start Again",
        spokenContent:
          "Congratulations! You've completed the entire journey and learned all the skills of a true design thinker. I'm so proud of everything you've achieved!",
        achievements: [
          {
            icon: "🕵️",
            title: "Problem Detective",
            description: "You can find and understand problems that matter",
          },
          {
            icon: "🎨",
            title: "Creative Designer",
            description: "You can create innovative solutions",
          },
          {
            icon: "🛠️",
            title: "Master Builder",
            description: "You can bring your ideas to life",
          },
        ],
      },
    },
  ],
};

// Create celebration sections for each main section
const problemDetectiveCelebration = {
  key: "problem-detective-celebration",
  hideFromNavigation: true,
  title: "🎉 Amazing Work!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're now a Problem Detective! Ready to start designing? 🌟",
      miniMessage: "Great detective work! 🕵️",
      expandedMessage:
        "You've learned how to find and understand problems. Now it's time to create solutions!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Problem Detective Complete! 🎉",
        buttonText: "Start Design Studio",
        spokenContent:
          "Wow! You're now an expert at finding problems that need solving. Ready to start creating solutions?",
        achievements: ProblemDetective.achievements,
      },
    },
  ],
};

const designStudioCelebration = {
  key: "design-studio-celebration",
  hideFromNavigation: true,
  title: "🎉 Amazing Work!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're now a Design Expert! Ready to start building? 🌟",
      miniMessage: "Amazing designs! 🎨",
      expandedMessage:
        "You've learned how to create great solutions. Now it's time to build them!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Design Studio Complete! 🎉",
        buttonText: "Start Prototype Playground",
        spokenContent:
          "Fantastic work! You're now an expert at creating solutions. Ready to start building them?",
        achievements: DesignStudio.achievements,
      },
    },
  ],
};

// Export sections array with celebrations and final success
export default [
  Intro,
  ProblemDetective,
  problemDetectiveCelebration,
  DesignStudio,
  designStudioCelebration,
  PrototypePlayground,
  successSection,
];
