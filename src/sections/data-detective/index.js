import Intro from "./0-Intro";
import DataCollection from "./1-DataCollection";
import DataExploration from "./2-DataExploration";
import DataVisualization from "./3-DataVisualization";
import { BarChart } from "lucide-react";

// Game configuration
export const gameConfig = {
  title: "Data Detective Adventure",
  icon: BarChart,
};

// Success section for course completion
const successSection = {
  key: "success",
  hideFromNavigation: true,
  title: "🎓 Data Master",
  maxStates: {
    intro: {
      state: "happy",
      message: "You did it! You're now a data analysis expert! 🎓",
      miniMessage: "Congratulations! 🌟",
      expandedMessage:
        "I'm so proud of you! You've learned all the skills you need to collect, explore, and visualize data like a pro!",
    },
  },
  steps: [
    {
      type: "success",
      content: {
        title: "You're a Data Master! 🎓",
        buttonText: "Start Again",
        spokenContent:
          "Congratulations! You've completed the entire journey and learned all the skills of a true data detective. I'm so proud of everything you've achieved!",
        achievements: [
          {
            icon: "📊",
            title: "Data Collector",
            description:
              "You can gather meaningful information from the world around you",
          },
          {
            icon: "🔍",
            title: "Data Explorer",
            description:
              "You can find patterns and insights in the data you collect",
          },
          {
            icon: "📈",
            title: "Data Visualizer",
            description:
              "You can create charts and graphs to tell stories with data",
          },
        ],
      },
    },
  ],
};

// Create celebration sections for each main section
const dataCollectionCelebration = {
  key: "data-collection-celebration",
  hideFromNavigation: true,
  title: "🎉 Amazing Work!",
  maxStates: {
    intro: {
      state: "happy",
      message:
        "You're now a Data Collector! Ready to start exploring your data? 🌟",
      miniMessage: "Great collection work! 📝",
      expandedMessage:
        "You've learned how to gather important information. Now it's time to explore what it means!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Data Collection Complete! 🎉",
        buttonText: "Start Data Exploration",
        spokenContent:
          "Wow! You're now an expert at collecting meaningful data. Ready to start discovering what your data can tell you?",
        achievements: DataCollection.achievements,
      },
    },
  ],
};

const dataExplorationCelebration = {
  key: "data-exploration-celebration",
  hideFromNavigation: true,
  title: "🎉 Amazing Work!",
  maxStates: {
    intro: {
      state: "happy",
      message:
        "You're now a Data Explorer! Ready to start visualizing your findings? 🌟",
      miniMessage: "Amazing analysis! 🔍",
      expandedMessage:
        "You've learned how to find meaning in data. Now it's time to share what you've discovered!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Data Exploration Complete! 🎉",
        buttonText: "Start Data Visualization",
        spokenContent:
          "Fantastic work! You're now an expert at exploring data and finding patterns. Ready to start creating beautiful charts to share your discoveries?",
        achievements: DataExploration.achievements,
      },
    },
  ],
};

// Export sections array with celebrations and final success
export default [
  Intro,
  DataCollection,
  dataCollectionCelebration,
  DataExploration,
  dataExplorationCelebration,
  DataVisualization,
  successSection,
];
