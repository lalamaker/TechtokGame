// src/sections/data-detective/3-DataVisualization.js
export default {
  title: "📈 Data Visualization",
  key: "data-visualization",
  maxStates: {
    intro: {
      state: "wave",
      message: "Time to create amazing charts! 📊",
      miniMessage: "Let's visualize our data! ✨",
      expandedMessage:
        "We'll learn how to turn numbers into pictures that tell powerful stories!",
    },
  },
  achievements: [
    {
      icon: "📊",
      title: "Chart Champion",
      description:
        "You can create clear and effective visual displays of data!",
    },
    {
      icon: "🎨",
      title: "Visual Storyteller",
      description:
        "You know how to use colors and designs to highlight key insights",
    },
    {
      icon: "🔊",
      title: "Data Presenter",
      description:
        "You can explain what your visualizations show and why it matters",
    },
  ],
  steps: [
    // Introduction to Data Visualization
    {
      type: "intro",
      content: {
        title: "Show Your Data! 📊",
        description: "Learn how to create powerful visual stories with data!",
        buttonText: "Start Visualizing",
        spokenContent:
          "The final step in our data adventure is visualization! This is where we turn numbers and patterns into pictures that help everyone understand our discoveries. Let's learn how to create charts and graphs that tell amazing data stories!",
        tools: [
          {
            icon: "🎯",
            title: "Why Visualize Data?",
            description: "Pictures help people understand",
            theme: "blue",
            observations: [
              "Makes patterns easier to see",
              "Helps compare numbers quickly",
              "Captures attention better than numbers",
              "Tells a story about your findings",
            ],
          },
        ],
        tips: [
          {
            icon: "💭",
            text: "Think about what story you want your data to tell",
          },
        ],
      },
    },
    // Demo Part 1: Chart Types
    {
      type: "intro",
      content: {
        title: "Choose the Right Chart! 📊",
        description: "Let me show you different ways to display data...",
        buttonText: "See Chart Types",
        spokenContent:
          "Different types of data need different types of charts! I'll show you the most common chart types and when to use each one.",
        tools: [
          {
            icon: "📊",
            title: "Bar Charts",
            description: "For comparing categories",
            theme: "blue",
            observations: [
              "Good for: Favorite fruits, transportation methods",
              "Shows: Which category has more or less",
              "Example: Number of students who chose each fruit",
              "Easy to read and understand",
            ],
          },
          {
            icon: "🥧",
            title: "Pie Charts",
            description: "For showing parts of a whole",
            theme: "purple",
            observations: [
              "Good for: Showing percentages or proportions",
              "Shows: How categories make up a total (100%)",
              "Example: How students get to school (25% walk, 30% bus, etc.)",
              "Best when you have 6 or fewer categories",
            ],
          },
          {
            icon: "📈",
            title: "Line Graphs",
            description: "For showing changes over time",
            theme: "green",
            observations: [
              "Good for: Temperature changes, growth over time",
              "Shows: Trends, patterns, and changes",
              "Example: Daily temperatures for a month",
              "Best when order of points matters",
            ],
          },
        ],
        tips: [
          {
            icon: "🤔",
            text: "Ask 'What comparison do I want to show?' to pick the right chart",
          },
        ],
      },
    },
    // Demo Part 2: Creating a Bar Chart
    {
      type: "intro",
      content: {
        title: "Let's Make a Bar Chart! 📊",
        description:
          "I'll show you how to create a clear bar chart step by step...",
        buttonText: "See How",
        spokenContent:
          "Let's turn our fruit survey data into a bar chart! I'll show you how to create one that clearly shows which fruits are most popular.",
        tools: [
          {
            icon: "1️⃣",
            title: "Bar Chart Steps",
            description: "How I created our fruit bar chart",
            theme: "blue",
            observations: [
              "Counted total votes for each fruit",
              "Drew horizontal and vertical axes",
              "Created equal-sized bars for each fruit",
              "Made bar heights match the counts",
              "Added labels, title, and colors",
            ],
          },
          {
            icon: "✅",
            title: "What Makes It Good",
            description: "Bar chart best practices",
            theme: "purple",
            observations: [
              "Clear title: 'Favorite Fruits of 3rd Graders'",
              "Labeled axes: 'Fruit Type' and 'Number of Students'",
              "Consistent scale: Each square = 1 student",
              "Organized: Bars arranged from tallest to shortest",
              "Colors help distinguish different fruits",
            ],
          },
        ],
        tips: [
          {
            icon: "📏",
            text: "Always keep your scale consistent",
          },
        ],
      },
    },
    // Demo Part 3: Creating a Pie Chart
    {
      type: "intro",
      content: {
        title: "Now, a Pie Chart! 🥧",
        description: "I'll show you how to create a colorful pie chart...",
        buttonText: "See How",
        spokenContent:
          "Now let's create a pie chart to show how the fruit preferences make up the whole class! This will show percentages in a visual way.",
        tools: [
          {
            icon: "1️⃣",
            title: "Pie Chart Steps",
            description: "How I created our fruit pie chart",
            theme: "green",
            observations: [
              "Calculated percentages: Apple 40%, Banana 28%, etc.",
              "Drew a circle and divided it proportionally",
              "Made each slice size match its percentage",
              "Used different colors for each fruit type",
              "Added labels with fruit names and percentages",
            ],
          },
          {
            icon: "✅",
            title: "What Makes It Good",
            description: "Pie chart best practices",
            theme: "blue",
            observations: [
              "Clear title: 'Distribution of Favorite Fruits'",
              "Shows percentages on each slice",
              "Uses contrasting colors",
              "Limited to 5 categories (not too many)",
              "Total adds up to 100%",
            ],
          },
        ],
        tips: [
          {
            icon: "🥧",
            text: "Pie charts work best with fewer categories",
          },
        ],
      },
    },
    // Demo Part 4: Creating a Line Graph
    {
      type: "intro",
      content: {
        title: "Finally, a Line Graph! 📈",
        description: "I'll show you how to track changes over time...",
        buttonText: "See How",
        spokenContent:
          "For our last example, let's create a line graph! I'll use data about how many fruit servings students eat each day of the week.",
        tools: [
          {
            icon: "1️⃣",
            title: "Line Graph Steps",
            description: "How I created our fruit consumption graph",
            theme: "purple",
            observations: [
              "Collected data for each day of the week",
              "Drew horizontal (days) and vertical (servings) axes",
              "Plotted a point for each day's average",
              "Connected the points with lines",
              "Added labels, title, and grid lines",
            ],
          },
          {
            icon: "✅",
            title: "What Makes It Good",
            description: "Line graph best practices",
            theme: "blue",
            observations: [
              "Clear title: 'Average Daily Fruit Consumption'",
              "Labeled axes: 'Day of Week' and 'Servings of Fruit'",
              "Points clearly marked",
              "Time flows left to right",
              "Scale starts at zero",
            ],
          },
        ],
        tips: [
          {
            icon: "📈",
            text: "Line graphs are perfect for showing changes",
          },
        ],
      },
    },
    // Demo Part 5: Making Charts Clear and Honest
    {
      type: "intro",
      content: {
        title: "Create Honest Charts! ⚖️",
        description:
          "Let me show you how to avoid misleading visualizations...",
        buttonText: "See Examples",
        spokenContent:
          "It's important that our charts tell the truth! Let me show you some ways to make sure your visualizations are clear and honest.",
        tools: [
          {
            icon: "✅",
            title: "Good Practices",
            description: "For honest charts",
            theme: "green",
            observations: [
              "Start number scales at zero",
              "Use consistent sizing",
              "Label everything clearly",
              "Choose appropriate colors",
              "Include all relevant data",
            ],
          },
          {
            icon: "⚠️",
            title: "Chart Problems",
            description: "Misleading techniques",
            theme: "purple",
            observations: [
              "Truncated axis (not starting at zero)",
              "3D effects that distort proportions",
              "Missing labels or context",
              "Cherry-picking data to show only certain results",
              "Inconsistent scales",
            ],
          },
        ],
        tips: [
          {
            icon: "💭",
            text: "Ask: 'Does my chart clearly show what the data actually says?'",
          },
        ],
      },
    },
    // Your Turn
    {
      type: "intro",
      content: {
        title: "Your Turn to Visualize! 🎨",
        description: "Create your own data visualizations!",
        buttonText: "Start Creating",
        spokenContent:
          "Now it's your turn! Use what you've learned to create visualizations for the data you've collected and explored.",
        tools: [
          {
            icon: "📋",
            title: "Visualization Steps",
            description: "Follow this path",
            theme: "blue",
            observations: [
              "1. Choose the right chart type for your data",
              "2. Plan your visualization on paper",
              "3. Create your chart with consistent scales",
              "4. Add clear labels and a title",
              "5. Use colors to highlight important findings",
            ],
          },
          {
            icon: "🎯",
            title: "Remember To",
            description: "Key points for great charts",
            theme: "purple",
            observations: [
              "Match the chart type to your data",
              "Keep it simple and clear",
              "Make sure scales start at zero",
              "Label everything someone would need to understand it",
              "Double-check that it shows the true pattern",
            ],
          },
        ],
        tips: [
          {
            icon: "✨",
            text: "Sketch your chart on paper first to plan it out",
          },
          {
            icon: "🔍",
            text: "Ask: 'Would someone who wasn't there understand this?'",
          },
        ],
      },
    },
    // Final Check
    {
      type: "quiz",
      content: {
        title: "Data Visualization Check! ⭐",
        description: "Show what you learned about creating charts!",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see if you remember the important parts of creating effective data visualizations!",
        question:
          "You've collected data about students' favorite school subjects. Which chart type would be BEST to show this information?",
        options: [
          {
            icon: "📊",
            text: "Bar chart showing the number of students who prefer each subject",
            correct: true,
            feedback:
              "Perfect choice! A bar chart is ideal for comparing categories like favorite subjects. It clearly shows which subjects are more or less popular.",
          },
          {
            icon: "📈",
            text: "Line graph connecting the number of votes for each subject",
            correct: false,
            feedback:
              "Line graphs are best for showing changes over time or trends. For favorite subjects (categories without a natural order), a bar chart would be clearer.",
          },
          {
            icon: "📉",
            text: "Scatter plot with subjects on both axes",
            correct: false,
            feedback:
              "Scatter plots are used to show relationships between two variables. For showing favorite subjects, a bar chart would be much more appropriate and easier to understand.",
          },
        ],
      },
    },
  ],
};
