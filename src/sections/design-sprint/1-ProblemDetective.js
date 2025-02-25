// src/sections/1-ProblemDetective.js
export default {
  title: "🕵️ Problem Detective Academy",
  key: "problem-detective",
  maxStates: {
    intro: {
      state: "happy",
      message: "Ready to become a Problem Detective? 🔍",
      miniMessage: "Let's solve mysteries! 🕵️",
      expandedMessage:
        "You're about to learn how to spot problems and help make things better for everyone!",
    },
  },
  achievements: [
    {
      icon: "👀",
      title: "Super Spotter",
      description: "You know how to spot problems that need solving!",
    },
    {
      icon: "❓",
      title: "Question Expert",
      description: "You ask great questions to understand problems better",
    },
    {
      icon: "📝",
      title: "Detail Detective",
      description: "You're great at gathering important information",
    },
  ],
  steps: [
    // Fun Introduction

    {
      type: "intro",
      content: {
        title: "Welcome to Detective Academy! 🎓",
        description:
          "Do you ever notice things that could be better? You might be a natural Problem Detective!",
        buttonText: "Start My Training",
        spokenContent:
          "Hi future detective! Did you know that you use detective skills every day? When you notice your friend is sad, or when you figure out a better way to organize your toys - that's being a Problem Detective! Today, we're going to make those skills even stronger.",
        tools: [
          {
            icon: "🔍",
            title: "What's a Problem Detective?",
            description: "Someone who finds ways to help!",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "Notice when things are tricky",
              "Ask good questions",
              "Find ways to help",
            ],
          },
          {
            icon: "⭐️",
            title: "Your Detective Powers",
            description: "You already have special skills!",
            theme: "purple",
            subTitle: "Observe:",
            observations: [
              "Your eyes spot things",
              "Your ears hear problems",
              "Your brain solves mysteries",
            ],
          },
        ],
      },
    },
    {
      type: "intro",
      content: {
        title: "A Video!",
        buttonText: "Watch it now!",
        videoUrl: "https://vimeo.com/1054297850?share=copy", // Replace with your Vimeo video URL
        tools: [],
        spokenContent:
          "Welcome detective! These tools will help you find problems that need solving. Remember, good detectives use their eyes, ask great questions, and keep track of what they discover!",
      },
    },
    // Introducing the Library Mystery
    {
      type: "intro",
      content: {
        title: "The Case of the Lost Books! 📚",
        description: "Something mysterious is happening in our library...",
        buttonText: "Investigate the Case",
        spokenContent:
          "I need your help with a special mystery! Students are having trouble finding books in our library. Some look sad and frustrated, and others keep asking for help over and over. Will you help me figure out what's going on?",
        tools: [
          {
            icon: "😕",
            title: "The Mystery",
            description: "What we know so far...",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "Students look confused",
              "Can't find books they need",
              "Keep asking for help",
            ],
          },
          {
            icon: "🔍",
            title: "Our Mission",
            description: "What we'll do...",
            theme: "purple",
            subTitle: "Observe:",
            observations: [
              "Watch what happens",
              "Talk to students",
              "Solve the mystery",
            ],
          },
        ],
        videoUrl: "https://vimeo.com/example", // Note: Add actual video showing the library scenario
      },
    },
    // src/sections/1-ProblemDetective.js

    // [Previous introduction sections remain the same until demo part...]

    // Demo Part 1: What I Saw
    {
      type: "intro",
      content: {
        title: "First, Let's Watch! 👀",
        description: "Here's what I noticed in the library...",
        buttonText: "See What I Found",
        spokenContent:
          "Let me show you what I discovered when I watched the library. I spent 5 minutes just watching what happened!",
        tools: [
          {
            icon: "👣",
            title: "Student Paths",
            description: "Where students walked",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "3 students started at the wrong shelf",
              "They walked in circles looking lost",
              "Finally asked librarian for help",
            ],
          },
        ],
        tips: [
          {
            icon: "⏰",
            text: "I watched for 5 minutes",
          },
        ],
      },
    },
    // Demo Part 2: Signs and Confusion
    {
      type: "intro",
      content: {
        title: "Look at the Signs 🔍",
        description: "Here's what happened with the library signs...",
        buttonText: "Check the Signs",
        spokenContent:
          "Next, I looked at how students used the signs. Watch what I noticed!",
        tools: [
          {
            icon: "📍",
            title: "Sign Problems",
            description: "What I noticed about signs",
            theme: "purple",
            subTitle: "Observe:",
            observations: [
              "Students stare at signs looking confused",
              "Some signs are too high to read",
              "Numbers are hard to understand",
            ],
          },
        ],
        tips: [
          {
            icon: "📝",
            text: "I wrote down exactly what confused people",
          },
        ],
      },
    },
    // Demo Part 3: Talking to People
    {
      type: "intro",
      content: {
        title: "Time to Ask Questions! 🗣️",
        description: "Here's what people told me...",
        buttonText: "Hear What They Said",
        spokenContent:
          "After watching, I talked to different people. Listen to what they told me!",
        tools: [
          {
            icon: "👤",
            title: "Student Said",
            description: "From a 4th grader",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "'I can't tell which number means which shelf'",
              "'Sometimes I just give up looking'",
              "'I wish there was a map'",
            ],
          },
        ],
        tips: [
          {
            icon: "🎯",
            text: "Write down exact words people say",
          },
        ],
      },
    },
    // Demo Part 4: More Interviews
    {
      type: "intro",
      content: {
        title: "More Detective Questions! ❓",
        description: "I asked the grown-ups too...",
        buttonText: "See More Answers",
        spokenContent:
          "I also talked to the librarian and a teacher. They had important things to tell us!",
        tools: [
          {
            icon: "📚",
            title: "Librarian Said",
            description: "From the library helper",
            theme: "purple",
            subTitle: "Observe:",
            observations: [
              "'I help 20+ students every day'",
              "'Most can't find the right section'",
              "'They need better directions'",
            ],
          },
        ],
        tips: [
          {
            icon: "👂",
            text: "Listen to helpers who work there",
          },
        ],
      },
    },
    // Demo Part 5: Drawing the Problem
    {
      type: "intro",
      content: {
        title: "Let's Draw It! 🎨",
        description: "Here's my library map...",
        buttonText: "See My Drawing",
        spokenContent:
          "I drew a map to show all the problems I found. Look how I marked the tricky spots!",
        tools: [
          {
            icon: "🗺️",
            title: "Problem Map",
            description: "Where things get tricky",
            theme: "green",
            subTitle: "Observe:",
            observations: [
              "⭐ Entrance (no directions)",
              "⭐ Shelves (confusing numbers)",
              "⭐ Help Desk (long line)",
            ],
          },
        ],
        tips: [
          {
            icon: "✏️",
            text: "Mark problem spots with stars",
          },
        ],
      },
    },
    // Demo Part 6: What We Learned
    {
      type: "intro",
      content: {
        title: "The Big Problems! 💡",
        description: "Here's what we discovered...",
        buttonText: "See What We Found",
        spokenContent:
          "After all our detective work, we found three main problems. Let's look at what we discovered!",
        tools: [
          {
            icon: "📝",
            title: "Main Problems",
            description: "Our biggest discoveries",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "1. Signs are hard to read",
              "2. No clear path to follow",
              "3. Students don't know where to start",
            ],
          },
        ],
        tips: [
          {
            icon: "🎯",
            text: "Number your main problems",
          },
        ],
      },
    },

    // [Continue with student practice sections...]

    // Your Own Investigation
    {
      type: "intro",
      content: {
        title: "Your Turn: Choose Your Mystery! 🔍",
        description: "Now you're ready to investigate any problem!",
        buttonText: "Start My Case",
        spokenContent:
          "Congratulations on solving the library mystery! Now you can use your detective skills to investigate any problem you want to solve.",
        tools: [
          {
            icon: "🎯",
            title: "Pick Your Case",
            description: "Choose something to investigate",
            theme: "purple",
            subTitle: "Observe:",
            observations: [
              "School: Playground, cafeteria, hallways",
              "Home: Family routines, organizing stuff",
              "Community: Parks, buses, stores",
            ],
          },
          {
            icon: "📝",
            title: "Your Detective Kit",
            description: "Use all your tools",
            theme: "blue",
            subTitle: "Observe:",
            observations: [
              "👀 Watch what happens",
              "❓ Ask good questions",
              "📔 Take careful notes",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Pick something you care about",
          },
          {
            icon: "🤝",
            text: "Work with a detective partner",
          },
        ],
      },
    },
    // Final Badge Quiz
    {
      type: "quiz",
      content: {
        title: "Earn Your Detective Badge! 🌟",
        description: "Show what you learned about solving mysteries!",
        buttonText: "Take the Challenge",
        spokenContent:
          "Time to earn your official Problem Detective badge! Show me what you learned about investigating problems.",
        question:
          "You notice students having trouble with something at school. What's your first step as a Problem Detective?",
        options: [
          {
            icon: "👀",
            text: "Watch carefully and draw a map of what's happening",
            correct: true,
            feedback:
              "Perfect! Just like we did in the library, good detectives always start by watching and taking notes.",
          },
          {
            icon: "💭",
            text: "Think of solutions without investigating",
            correct: false,
            feedback:
              "Remember the library case - we needed to understand the problem first before we could help!",
          },
          {
            icon: "🏃",
            text: "Try to fix it right away",
            correct: false,
            feedback:
              "Just like in the library, we need to be patient and investigate before we can solve the mystery!",
          },
        ],
      },
    },
  ],
};
