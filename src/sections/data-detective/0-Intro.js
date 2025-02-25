// src/sections/data-detective/0-Intro.js
export default {
  key: "intro",
  hideFromNavigation: true,
  title: "Data Detective Introduction",
  maxStates: {
    intro: {
      state: "wave",
      message: "Welcome to the Data Detective Adventure! 📊",
      miniMessage: "Let's explore data! 🔍",
      expandedMessage:
        "I'm so excited to guide you through the fascinating world of data collection, exploration, and visualization!",
    },
  },
  steps: [
    {
      type: "intro",
      content: {
        title: "Become a Data Detective! 🕵️‍♀️",
        spokenContent:
          "Hi there! Welcome to the Data Detective Adventure! Have you ever wondered how scientists learn about the world? Or how businesses know what customers like? Or how your school knows which lunch is most popular? It all starts with DATA! And today, you're going to learn how to collect, explore, and visualize data just like a pro!",
        buttonText: "Let's Start!",
        tools: [
          {
            icon: "📊",
            title: "What is Data?",
            description: "Information we collect about the world",
            theme: "blue",
            observations: [
              "Numbers like temperatures or scores",
              "Categories like favorite colors",
              "Observations like bird sightings",
              "Measurements like heights or weights",
            ],
          },
          {
            icon: "🕵️‍♀️",
            title: "Data Detectives...",
            description: "Use special skills to solve mysteries",
            theme: "purple",
            observations: [
              "Collect information carefully",
              "Look for patterns and connections",
              "Create charts to tell data stories",
              "Make discoveries to help others",
            ],
          },
        ],
      },
    },
    {
      type: "intro",
      content: {
        title: "Your Data Adventure Map 🗺️",
        spokenContent:
          "Our data adventure has three exciting parts! First, we'll collect data about things we're curious about. Then, we'll explore that data to find patterns and surprises. Finally, we'll create awesome charts and graphs to share our discoveries with others!",
        buttonText: "Show Me the Adventure!",
        tools: [
          {
            icon: "1️⃣",
            title: "Data Collection",
            description: "First, we gather information",
            theme: "blue",
            observations: [
              "Ask great questions",
              "Create surveys and experiments",
              "Record observations carefully",
              "Organize information systematically",
            ],
          },
          {
            icon: "2️⃣",
            title: "Data Exploration",
            description: "Next, we analyze what we found",
            theme: "purple",
            observations: [
              "Count and calculate",
              "Find the highest and lowest values",
              "Look for patterns and groups",
              "Compare different categories",
            ],
          },
          {
            icon: "3️⃣",
            title: "Data Visualization",
            description: "Finally, we create pictures of our data",
            theme: "green",
            observations: [
              "Bar charts for comparing amounts",
              "Pie charts for showing parts of a whole",
              "Line graphs for changes over time",
              "Maps for location data",
            ],
          },
        ],
      },
    },
    {
      type: "intro",
      content: {
        title: "Why Data Matters! 🌍",
        spokenContent:
          "Data is everywhere and helps us make better decisions! Scientists use data to discover new medicines. Your school uses data to improve learning. Even YOU use data when you decide what game to play based on which one you've enjoyed most! Let's discover how data can help solve real-world problems.",
        buttonText: "I'm Ready to Begin!",
        tools: [
          {
            icon: "🧪",
            title: "Science & Medicine",
            description: "Uses data to make discoveries",
            theme: "blue",
            observations: [
              "Track if medicines work",
              "Study climate patterns",
              "Count animal populations",
              "Test new inventions",
            ],
          },
          {
            icon: "🏫",
            title: "Schools & Learning",
            description: "Uses data to help students",
            theme: "purple",
            observations: [
              "Find best teaching methods",
              "Create fair tests",
              "Plan school activities",
              "Improve lunch menus",
            ],
          },
          {
            icon: "🚲",
            title: "Every Day Life",
            description: "You already use data!",
            theme: "green",
            observations: [
              "Decide what to wear (weather data)",
              "Choose favorite games (fun ratings)",
              "Find fastest route to school",
              "Track growth on height chart",
            ],
          },
        ],
      },
    },
  ],
};
