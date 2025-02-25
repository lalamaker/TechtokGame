// src/sections/3-PrototypePlayground.js
export default {
  title: "🛠️ Prototype Playground",
  key: "prototype-playground",
  maxStates: {
    intro: {
      state: "wave",
      message: "Time to build and test our ideas! 🛠️",
      miniMessage: "Let's start making! ✨",
      expandedMessage:
        "We'll turn our library welcome station design into something we can try out!",
    },
  },
  achievements: [
    {
      icon: "🔨",
      title: "Master Builder",
      description: "You can create quick versions to test your ideas!",
    },
    {
      icon: "🧪",
      title: "Test Expert",
      description: "You know how to try out your creations",
    },
    {
      icon: "📈",
      title: "Improvement Pro",
      description: "You make things better with each try",
    },
  ],
  steps: [
    // Introduction to Prototyping
    {
      type: "intro",
      content: {
        title: "Let's Build It! 🔨",
        description: "Turn our library welcome station from idea to reality!",
        buttonText: "Start Building",
        spokenContent:
          "Remember our welcome station design? Now we're going to build a simple version to try out! I'll show you how to make prototypes - quick versions we can test.",
        tools: [
          {
            icon: "💭",
            title: "Remember Our Design",
            description: "What we're building",
            theme: "blue",
            observations: [
              "Welcome station with screen",
              "Easy-to-follow maps",
              "Picture guides for books",
              "Simple instructions",
            ],
          },
        ],
        tips: [
          {
            icon: "✨",
            text: "We'll start simple and make it better",
          },
        ],
      },
    },
    // Demo Part 1: Simple Materials
    {
      type: "intro",
      content: {
        title: "Gather Materials! 📦",
        description: "Let me show you what we can use...",
        buttonText: "See Materials",
        spokenContent:
          "We don't need fancy stuff to test our ideas! Watch how I use simple materials to build our welcome station.",
        tools: [
          {
            icon: "🎨",
            title: "My Building Kit",
            description: "Simple materials we need",
            theme: "purple",
            observations: [
              "Big cardboard box (for station)",
              "Paper and markers (for signs)",
              "Post-its (for screen buttons)",
              "Paper clips (to hold things)",
            ],
          },
        ],
        tips: [
          {
            icon: "♻️",
            text: "Use materials that are easy to change",
          },
        ],
      },
    },
    // Demo Part 2: Building Steps
    {
      type: "intro",
      content: {
        title: "Build Step by Step! 🏗️",
        description: "Watch how I put it together...",
        buttonText: "See Building",
        spokenContent:
          "Let's build our welcome station one piece at a time. I'll show you how!",
        tools: [
          {
            icon: "1️⃣",
            title: "Station Base",
            description: "First steps",
            theme: "blue",
            observations: [
              "Cut box to right height",
              "Make flat surface for screen",
              "Add sides for maps",
              "Create sign holder on top",
            ],
          },
          {
            icon: "2️⃣",
            title: "Screen & Maps",
            description: "Add the helpers",
            theme: "purple",
            observations: [
              "Draw screen outline",
              "Add paper 'buttons'",
              "Make simple paper maps",
              "Create category pictures",
            ],
          },
        ],
        tips: [
          {
            icon: "📏",
            text: "Make it kid-height for easy reach",
          },
        ],
      },
    },
    // Demo Part 3: First Test
    {
      type: "intro",
      content: {
        title: "Test Time! 🧪",
        description: "Let's try out our welcome station...",
        buttonText: "See Testing",
        spokenContent:
          "Now comes the fun part - testing our welcome station with real students! Watch what happens.",
        tools: [
          {
            icon: "👥",
            title: "Testing Notes",
            description: "What we learned",
            theme: "green",
            observations: [
              "Kids tried pushing paper buttons",
              "Maps were a bit confusing",
              "Everyone liked the pictures",
              "Some text too small to read",
            ],
          },
        ],
        tips: [
          {
            icon: "📝",
            text: "Write down everything people do",
          },
        ],
      },
    },
    // Demo Part 4: Making Changes
    {
      type: "intro",
      content: {
        title: "Make It Better! 💪",
        description: "Watch how I improve the design...",
        buttonText: "See Changes",
        spokenContent:
          "Testing showed us what to fix! Let's make our welcome station even better.",
        tools: [
          {
            icon: "✏️",
            title: "Quick Fixes",
            description: "Easy improvements",
            theme: "blue",
            observations: [
              "Made buttons bigger",
              "Added color to maps",
              "Used larger text",
              "Added more pictures",
            ],
          },
        ],
        tips: [
          {
            icon: "🚀",
            text: "Small changes can make big differences",
          },
        ],
      },
    },
    // Demo Part 5: Second Test
    {
      type: "intro",
      content: {
        title: "Test Again! 🔄",
        description: "Let's see if our changes helped...",
        buttonText: "See Results",
        spokenContent:
          "Time to test our improved welcome station! Let's see what people think now.",
        tools: [
          {
            icon: "📊",
            title: "New Results",
            description: "What changed",
            theme: "purple",
            observations: [
              "Everyone found buttons easily",
              "Maps made more sense",
              "Kids could read everything",
              "People needed less help",
            ],
          },
        ],
        tips: [
          {
            icon: "🎯",
            text: "Look for what's better and what still needs work",
          },
        ],
      },
    },
    // Your Turn
    {
      type: "intro",
      content: {
        title: "Your Turn to Build! 🔨",
        description: "Create your own prototype!",
        buttonText: "Start Making",
        spokenContent:
          "Now it's your turn! Use what you learned to build and test your own library helper.",
        tools: [
          {
            icon: "📝",
            title: "Building Steps",
            description: "Follow this path",
            theme: "green",
            observations: [
              "1. Gather simple materials",
              "2. Build it step by step",
              "3. Test with friends",
              "4. Write what you learn",
              "5. Make it better",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Start simple - you can always add more",
          },
          {
            icon: "✨",
            text: "Have fun testing and improving!",
          },
        ],
      },
    },
    // Final Check
    {
      type: "quiz",
      content: {
        title: "Building Expert Check! 🏆",
        description: "Show what you learned about prototyping!",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see if you remember the important parts of being a great builder and tester!",
        question: "You've built your first prototype. What should you do next?",
        options: [
          {
            icon: "🧪",
            text: "Test it with others and write down what you learn",
            correct: true,
            feedback:
              "Yes! Testing helps us learn what works and what needs to be better. Great builders always test their creations!",
          },
          {
            icon: "🎨",
            text: "Make it look perfect first",
            correct: false,
            feedback:
              "Remember - prototypes don't need to be perfect! It's more important to test and learn from what we make.",
          },
          {
            icon: "📦",
            text: "Put it away and build something new",
            correct: false,
            feedback:
              "Don't forget to test and improve! Each test helps us make our creation even better.",
          },
        ],
      },
    },
  ],
};
