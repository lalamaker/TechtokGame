// src/sections/data-detective/1-DataCollection.js
export default {
  title: "📝 Data Collection",
  key: "data-collection",
  maxStates: {
    intro: {
      state: "wave",
      message: "Time to gather data! 📝",
      miniMessage: "Let's collect information! ✨",
      expandedMessage:
        "We'll learn how to ask good questions and collect reliable information!",
    },
  },
  achievements: [
    {
      icon: "❓",
      title: "Question Master",
      description: "You know how to ask questions that get useful data!",
    },
    {
      icon: "📋",
      title: "Survey Creator",
      description: "You can design surveys to gather information from groups",
    },
    {
      icon: "🔢",
      title: "Data Organizer",
      description:
        "You can keep your data neat, accurate, and ready for analysis",
    },
  ],
  steps: [
    // Introduction to Data Collection
    {
      type: "intro",
      content: {
        title: "Let's Collect Data! 📊",
        description: "Learn how to gather information like a scientist!",
        buttonText: "Start Collecting",
        spokenContent:
          "Data collection is the first step in any investigation! It's how we gather information to answer questions about our world. I'll show you how to collect data just like scientists and researchers do!",
        tools: [
          {
            icon: "🔍",
            title: "Data Types We'll Collect",
            description: "Different kinds of information",
            theme: "blue",
            observations: [
              "Numbers (like heights, temperatures)",
              "Categories (like favorite colors)",
              "Yes/No answers (like 'Do you have pets?')",
              "Ratings (like 'How much did you enjoy lunch?')",
            ],
          },
        ],
        tips: [
          {
            icon: "💭",
            text: "Think about what question you want to answer",
          },
        ],
      },
    },
    // Demo Part 1: Ask Great Questions
    {
      type: "intro",
      content: {
        title: "Ask Great Questions! ❓",
        description:
          "Let me show you how to create questions that get good data...",
        buttonText: "See Examples",
        spokenContent:
          "The first step in data collection is asking great questions! Watch how I turn a general idea into specific questions that will give us useful data.",
        tools: [
          {
            icon: "🤔",
            title: "My Research Question",
            description: "What I want to learn",
            theme: "purple",
            observations: [
              "Big Question: 'What snacks do kids prefer?'",
              "More Specific: 'What are the favorite fruits and vegetables of 3rd graders?'",
              "Even Better: 'Which fruits do 3rd graders at Lincoln Elementary prefer for snack time?'",
            ],
          },
          {
            icon: "✅",
            title: "Good Questions",
            description: "Clear and specific",
            theme: "blue",
            observations: [
              "'What is your favorite fruit from this list: apple, banana, orange, grapes?'",
              "'How many times per week do you eat fruit at snack time?'",
              "'Rate how much you like strawberries from 1-5'",
            ],
          },
          {
            icon: "❌",
            title: "Tricky Questions",
            description: "Too vague or confusing",
            theme: "red",
            observations: [
              "'Do you like fruit?'",
              "'What's your favorite thing to eat?'",
              "'Don't you think apples are the best?'",
            ],
          },
        ],
        tips: [
          {
            icon: "📌",
            text: "Specific questions get more useful answers",
          },
        ],
      },
    },
    // Demo Part 2: Create a Survey
    {
      type: "intro",
      content: {
        title: "Create a Survey! 📋",
        description: "Let me show you how I made a fruit preference survey...",
        buttonText: "See My Survey",
        spokenContent:
          "Surveys are great for collecting data from many people! I created a simple fruit preference survey to use with the 3rd grade class. Here's how I designed it.",
        tools: [
          {
            icon: "📝",
            title: "My Survey Design",
            description: "Parts of a good survey",
            theme: "blue",
            observations: [
              "Title: '3rd Grade Fruit Preferences'",
              "Brief Instructions: 'Please answer these questions about fruits you like to eat at snack time'",
              "Multiple Question Types: checklists, ratings, multiple choice",
              "Thank You at the end",
            ],
          },
          {
            icon: "📊",
            title: "Question Types",
            description: "Different ways to ask",
            theme: "purple",
            observations: [
              "Multiple Choice: 'What's your favorite fruit? (a) Apple (b) Banana...'",
              "Rating Scale: 'Rate strawberries 1-5 stars'",
              "Open-ended: 'What fruit would you like to try?'",
              "Yes/No: 'Do you like watermelon?'",
            ],
          },
        ],
        tips: [
          {
            icon: "⏱️",
            text: "Keep surveys short - 5-10 questions max for kids",
          },
        ],
      },
    },
    // Demo Part 3: Collecting Survey Data
    {
      type: "intro",
      content: {
        title: "Gather the Data! 🗂️",
        description: "Watch how I collect and organize survey responses...",
        buttonText: "See Collection",
        spokenContent:
          "Now it's time to collect our data! I'll show you how I gathered responses from the class and kept everything organized.",
        tools: [
          {
            icon: "👥",
            title: "Collection Methods",
            description: "Ways to gather data",
            theme: "green",
            observations: [
              "Paper Surveys: Handed out in class",
              "Digital Form: Created online",
              "Interview: Asked questions one-on-one",
              "Observation: Watched fruit choices at lunch",
            ],
          },
          {
            icon: "📊",
            title: "Organizing Responses",
            description: "Keeping data neat",
            theme: "blue",
            observations: [
              "Created a table with one row per student",
              "Made columns for each question",
              "Used codes for answers (1=Yes, 2=No)",
              "Double-checked for mistakes",
            ],
          },
        ],
        tips: [
          {
            icon: "🔢",
            text: "Label your data clearly with dates and question numbers",
          },
        ],
      },
    },
    // Demo Part 4: Other Data Collection Methods
    {
      type: "intro",
      content: {
        title: "More Ways to Collect Data! 🔍",
        description: "Let me show you other methods scientists use...",
        buttonText: "See Methods",
        spokenContent:
          "Surveys aren't the only way to collect data! Let me show you some other methods that scientists, researchers, and even kids like you can use!",
        tools: [
          {
            icon: "👀",
            title: "Observation",
            description: "Watching and recording",
            theme: "purple",
            observations: [
              "Bird Watching: Counting different species",
              "Traffic Study: Counting cars at an intersection",
              "Weather Tracking: Recording daily temperature",
              "Plant Growth: Measuring height changes",
            ],
          },
          {
            icon: "🧪",
            title: "Experiments",
            description: "Testing ideas",
            theme: "blue",
            observations: [
              "Plant Growth: Different amounts of water",
              "Paper Airplanes: Different designs",
              "Taste Test: Blind comparison of fruits",
              "Melting Ice: Different conditions",
            ],
          },
          {
            icon: "💻",
            title: "Existing Data",
            description: "Using information that already exists",
            theme: "green",
            observations: [
              "School Records: Lunch choices over time",
              "Sports: Team statistics",
              "Weather History: Past temperatures",
              "Websites: Information from trusted sources",
            ],
          },
        ],
        tips: [
          {
            icon: "🔄",
            text: "Different questions need different collection methods",
          },
        ],
      },
    },
    // Demo Part 5: Data Collection Tips
    {
      type: "intro",
      content: {
        title: "Data Collection Tips! 💡",
        description: "Important things to remember when collecting data...",
        buttonText: "See Tips",
        spokenContent:
          "Let me share some important tips to make sure the data you collect is reliable and useful for your investigation!",
        tools: [
          {
            icon: "✅",
            title: "Best Practices",
            description: "For quality data",
            theme: "blue",
            observations: [
              "Be consistent in how you ask questions",
              "Record data right away - don't rely on memory",
              "Get enough responses (aim for at least 10)",
              "Double-check your work for mistakes",
            ],
          },
          {
            icon: "⚠️",
            title: "Watch Out For",
            description: "Common problems",
            theme: "purple",
            observations: [
              "Leading questions that suggest an answer",
              "Collecting only from friends (biased sample)",
              "Changing how you measure halfway through",
              "Losing track of your data sheets",
            ],
          },
        ],
        tips: [
          {
            icon: "🤔",
            text: "Always ask: 'What might make my data incorrect?'",
          },
        ],
      },
    },
    // Now Your Turn
    {
      type: "intro",
      content: {
        title: "Your Turn to Collect Data! 📝",
        description: "Create your own data collection plan!",
        buttonText: "Start Planning",
        spokenContent:
          "Now it's your turn! Use what you've learned to create your own data collection plan about something you're curious about!",
        tools: [
          {
            icon: "📋",
            title: "Collection Steps",
            description: "Follow this path",
            theme: "green",
            observations: [
              "1. Choose a question you're curious about",
              "2. Decide how to collect data (survey, observation, experiment)",
              "3. Create your collection tool (questions, chart, etc.)",
              "4. Gather your data",
              "5. Keep it organized and labeled",
            ],
          },
          {
            icon: "💡",
            title: "Topic Ideas",
            description: "Things to investigate",
            theme: "blue",
            observations: [
              "Favorite books/movies in your class",
              "Types of vehicles passing your home",
              "Plant growth with different conditions",
              "Weather patterns for a week",
              "Homework completion times",
            ],
          },
        ],
        tips: [
          {
            icon: "✨",
            text: "Start with something simple you can collect in a day or two",
          },
        ],
      },
    },
    // Final Check
    {
      type: "quiz",
      content: {
        title: "Data Collection Check! ⭐",
        description: "Show what you learned about collecting data!",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see if you remember the important parts of being a great data collector!",
        question:
          "You want to find out which playground activity is most popular. What's the BEST way to collect good data?",
        options: [
          {
            icon: "📋",
            text: "Create a clear survey asking students to choose their favorite activity from a list of options",
            correct: true,
            feedback:
              "Excellent choice! A survey with clear options will give you the most reliable data about playground preferences.",
          },
          {
            icon: "🗣️",
            text: "Just ask your three best friends what they like to do",
            correct: false,
            feedback:
              "Remember, good data collection needs more responses, and just asking friends might not represent everyone on the playground.",
          },
          {
            icon: "❓",
            text: "Ask 'Don't you think the swings are the best activity?'",
            correct: false,
            feedback:
              "This is a leading question that suggests the answer should be 'swings.' Good data collection uses neutral questions that don't influence the answers.",
          },
        ],
      },
    },
  ],
};
