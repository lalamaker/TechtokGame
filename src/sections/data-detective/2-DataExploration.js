// src/sections/data-detective/2-DataExploration.js
export default {
  title: "🔍 Data Exploration",
  key: "data-exploration",
  maxStates: {
    intro: {
      state: "thinking",
      message: "Time to analyze what we've found! 🔍",
      miniMessage: "Let's discover patterns! ✨",
      expandedMessage:
        "We'll learn how to look at our data to find interesting patterns and insights!",
    },
  },
  achievements: [
    {
      icon: "🧮",
      title: "Math Detective",
      description: "You can find important numbers in your data!",
    },
    {
      icon: "🧩",
      title: "Pattern Spotter",
      description: "You can discover trends and relationships in information",
    },
    {
      icon: "💡",
      title: "Insight Finder",
      description: "You can draw meaningful conclusions from your analysis",
    },
  ],
  steps: [
    // Introduction to Data Exploration
    {
      type: "intro",
      content: {
        title: "Explore Your Data! 🔍",
        description: "Learn how to find amazing patterns in the numbers!",
        buttonText: "Start Exploring",
        spokenContent:
          "Now that we've collected our data, it's time for the exciting part - exploring what it means! I'll show you how to analyze your information to discover fascinating patterns and insights!",
        tools: [
          {
            icon: "🧩",
            title: "Data Exploration Is...",
            description: "Finding meaning in your information",
            theme: "blue",
            observations: [
              "Counting and calculating",
              "Finding highest and lowest values",
              "Spotting patterns and relationships",
              "Comparing different groups",
            ],
          },
        ],
        tips: [
          {
            icon: "💭",
            text: "Always start by looking at your data with fresh eyes",
          },
        ],
      },
    },
    // Demo Part 1: Organizing Data
    {
      type: "intro",
      content: {
        title: "First, Organize Your Data! 📊",
        description:
          "Let me show you how to arrange data for easy exploration...",
        buttonText: "See Organization",
        spokenContent:
          "Before we can find patterns, we need to organize our data! Watch how I arrange our fruit survey results to make them easier to explore.",
        tools: [
          {
            icon: "📋",
            title: "Survey Results",
            description: "Raw data from our fruit survey",
            theme: "purple",
            observations: [
              "25 students responded",
              "Questions about fruit preferences",
              "Mix of favorite fruits, rating scales, and yes/no answers",
              "Some data is messy and needs cleaning",
            ],
          },
          {
            icon: "🧹",
            title: "Data Cleaning",
            description: "Making data ready for analysis",
            theme: "blue",
            observations: [
              "Fixed spelling mistakes (bannana → banana)",
              "Removed incomplete responses",
              "Made categories consistent",
              "Created a clean data table",
            ],
          },
        ],
        tips: [
          {
            icon: "📌",
            text: "Good organization makes patterns easier to spot",
          },
        ],
      },
    },
    // Demo Part 2: Counting and Calculating
    {
      type: "intro",
      content: {
        title: "Count and Calculate! 🧮",
        description: "Let me show you simple math that reveals insights...",
        buttonText: "See Calculations",
        spokenContent:
          "The simplest way to start exploring data is by counting and doing basic calculations! Let's see what we can learn from our fruit survey with some simple math.",
        tools: [
          {
            icon: "1️⃣",
            title: "Counting",
            description: "Finding frequencies",
            theme: "blue",
            observations: [
              "10 students chose apple as favorite",
              "7 chose banana",
              "5 chose grapes",
              "3 chose oranges",
            ],
          },
          {
            icon: "🔢",
            title: "Basic Calculations",
            description: "Finding important numbers",
            theme: "purple",
            observations: [
              "Average (Mean): Strawberry rating = 3.8/5",
              "Median: Middle value when ordered = 4",
              "Mode: Most common value = 5",
              "Range: Highest - Lowest = 5-1 = 4",
            ],
          },
        ],
        tips: [
          {
            icon: "📊",
            text: "These simple numbers tell us a lot about our data",
          },
        ],
      },
    },
    // Demo Part 3: Finding Patterns
    {
      type: "intro",
      content: {
        title: "Find Patterns! 🧩",
        description: "Let me show you how to spot trends and relationships...",
        buttonText: "See Patterns",
        spokenContent:
          "Now comes the detective work - finding patterns in our data! I'll show you how to spot interesting trends and connections in our fruit survey results.",
        tools: [
          {
            icon: "📈",
            title: "Trends I Found",
            description: "Patterns over time or groups",
            theme: "green",
            observations: [
              "Students who like apples also tend to like pears",
              "Strawberry ratings were higher from students who bring lunch from home",
              "Most students prefer fruits they can eat without peeling",
            ],
          },
          {
            icon: "👥",
            title: "Group Comparisons",
            description: "Differences between categories",
            theme: "blue",
            observations: [
              "Boys vs. Girls: Girls rated berries higher",
              "Bring lunch vs. Buy lunch: Different preferences",
              "Different classrooms showed different favorites",
            ],
          },
        ],
        tips: [
          {
            icon: "🔍",
            text: "Ask 'What goes together?' and 'What's different?'",
          },
        ],
      },
    },
    // Demo Part 4: Checking for Data Problems
    {
      type: "intro",
      content: {
        title: "Check for Data Problems! ⚠️",
        description: "Let me show you how to spot issues in your data...",
        buttonText: "See Issues",
        spokenContent:
          "Good data explorers always check for problems! Let me show you how I made sure our fruit survey data was reliable before drawing conclusions.",
        tools: [
          {
            icon: "❓",
            title: "Missing Data",
            description: "Information that's not there",
            theme: "purple",
            observations: [
              "3 students skipped the banana rating question",
              "1 survey was missing a name but had answers",
              "Solution: Note missing answers in our analysis",
            ],
          },
          {
            icon: "⚠️",
            title: "Unusual Values",
            description: "Outliers and strange answers",
            theme: "blue",
            observations: [
              "One student rated all fruits as '1'",
              "One listed 'pizza' as favorite fruit",
              "Solution: Check if these are mistakes or real answers",
            ],
          },
        ],
        tips: [
          {
            icon: "🧐",
            text: "Always ask if unusual results are interesting or errors",
          },
        ],
      },
    },
    // Demo Part 5: Drawing Conclusions
    {
      type: "intro",
      content: {
        title: "Draw Conclusions! 💡",
        description: "Let me show you how to interpret what your data means...",
        buttonText: "See Conclusions",
        spokenContent:
          "The final step in data exploration is drawing conclusions! Watch how I figure out what our fruit survey results really mean and why it matters.",
        tools: [
          {
            icon: "🎯",
            title: "Main Findings",
            description: "What the data tells us",
            theme: "green",
            observations: [
              "Apples are the most popular fruit overall (40%)",
              "Berries have widest popularity range (some love, some dislike)",
              "Easy-to-eat fruits are generally preferred",
              "Most students (80%) eat fruit at least 3 times per week",
            ],
          },
          {
            icon: "🔮",
            title: "What This Means",
            description: "Practical implications",
            theme: "blue",
            observations: [
              "School snack program should include apples",
              "Offering a variety of fruits will please more students",
              "Pre-cut options might increase less popular fruit selection",
              "Most students already have healthy fruit habits",
            ],
          },
        ],
        tips: [
          {
            icon: "💭",
            text: "Good conclusions answer 'So what?' about your findings",
          },
        ],
      },
    },
    // Now Your Turn
    {
      type: "intro",
      content: {
        title: "Your Turn to Explore Data! 🔍",
        description: "Analyze your own data collection results!",
        buttonText: "Start Analyzing",
        spokenContent:
          "Now it's your turn! Use what you've learned to explore the data you've collected and discover what it means!",
        tools: [
          {
            icon: "📋",
            title: "Exploration Steps",
            description: "Follow this path",
            theme: "purple",
            observations: [
              "1. Organize your data neatly",
              "2. Count frequencies and calculate basics (average, etc.)",
              "3. Look for patterns and relationships",
              "4. Check for problems or unusual values",
              "5. Draw conclusions about what it means",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Be curious! Ask questions of your data",
          },
          {
            icon: "✨",
            text: "Write down your discoveries as you go",
          },
        ],
      },
    },
    // Final Check
    {
      type: "quiz",
      content: {
        title: "Data Explorer Check! ⭐",
        description: "Show what you learned about analyzing data!",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see if you remember the important parts of being a great data explorer!",
        question:
          "You've collected data about how students get to school (walk, bike, car, bus). What's the BEST first step to explore this data?",
        options: [
          {
            icon: "🧮",
            text: "Count how many students use each method of transportation",
            correct: true,
            feedback:
              "Perfect! Counting frequencies (how many in each category) is the best first step to understand your transportation data. This gives you the big picture before diving deeper.",
          },
          {
            icon: "📈",
            text: "Immediately create a complicated chart",
            correct: false,
            feedback:
              "Charts are important, but first you need to understand your data through basic counts and calculations. Start simple before making visualizations!",
          },
          {
            icon: "🏁",
            text: "Jump straight to conclusions about the best way to get to school",
            correct: false,
            feedback:
              "Always analyze your data before drawing conclusions! We need to count, calculate, and look for patterns before we can say what the data means.",
          },
        ],
      },
    },
  ],
};
