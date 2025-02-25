// src/sections/2-DesignStudio.js
export default {
  title: "🎨 Design Studio",
  key: "design-studio",
  maxStates: {
    intro: {
      state: "wave",
      message: "Welcome to the Design Studio! Time to create solutions! 🎨",
      miniMessage: "Let's start designing! ✨",
      expandedMessage:
        "Now that we understand the library problem, let's create amazing solutions to help everyone!",
    },
  },
  achievements: [
    {
      icon: "💡",
      title: "Idea Creator",
      description: "You can think of lots of creative solutions!",
    },
    {
      icon: "🎯",
      title: "Solution Finder",
      description: "You know how to pick the best ideas to try",
    },
    {
      icon: "✏️",
      title: "Design Star",
      description: "You can draw and explain your ideas clearly",
    },
  ],
  steps: [
    // Introduction to Design
    {
      type: "intro",
      content: {
        title: "Time to Be Creative! 🎨",
        description: "Let's turn problems into solutions!",
        buttonText: "Start Creating",
        spokenContent:
          "Now that we know what's making the library tricky, let's create solutions to help! I'll show you how designers come up with great ideas.",
        tools: [
          {
            icon: "🤔",
            title: "Remember Our Problem",
            description: "What we discovered",
            theme: "blue",
            observations: [
              "Signs are hard to read",
              "No clear path to follow",
              "Students don't know where to start",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Keep these problems in mind as we design",
          },
        ],
      },
    },
    // Demo Part 1: Wild Ideas
    {
      type: "intro",
      content: {
        title: "First, Dream Big! 💭",
        description: "Let me show you how I think of wild ideas...",
        buttonText: "See My Ideas",
        spokenContent:
          "Watch how I come up with lots of creative ideas! Some might seem silly, but that's okay - it helps us think differently!",
        tools: [
          {
            icon: "🚀",
            title: "My Wild Ideas",
            description: "No idea is too crazy!",
            theme: "purple",
            observations: [
              "Flying book helper robots",
              "Glowing path lights on floor",
              "Treasure map for each section",
              "Musical shelves that sing book types",
            ],
          },
        ],
        tips: [
          {
            icon: "✨",
            text: "Wild ideas help us think creatively",
          },
        ],
      },
    },
    // Demo Part 2: Realistic Ideas
    {
      type: "intro",
      content: {
        title: "Now, Real Solutions! 🎯",
        description: "Let's make our ideas more practical...",
        buttonText: "See How",
        spokenContent:
          "Watch how I turn wild ideas into real solutions we can try!",
        tools: [
          {
            icon: "💡",
            title: "My Real Ideas",
            description: "Based on wild ideas",
            theme: "blue",
            observations: [
              "Digital helper screen at entrance",
              "Colored tape paths on floor",
              "Simple picture maps to take",
              "Section signs with pictures",
            ],
          },
        ],
        tips: [
          {
            icon: "🎯",
            text: "Keep the fun parts but make them possible",
          },
        ],
      },
    },
    // Demo Part 3: Drawing Solutions
    {
      type: "intro",
      content: {
        title: "Let's Draw It! ✏️",
        description: "Here's how I sketch my ideas...",
        buttonText: "See My Sketches",
        spokenContent:
          "I'm drawing my favorite solution - a special welcome station with everything students need to find books easily!",
        tools: [
          {
            icon: "🎨",
            title: "My Welcome Station",
            description: "Main parts of my design",
            theme: "green",
            observations: [
              "Big friendly 'Start Here!' sign",
              "Touch screen with book finder",
              "Colorful maps to take with you",
              "Simple picture guides",
            ],
          },
        ],
        tips: [
          {
            icon: "✏️",
            text: "Simple drawings with labels help explain ideas",
          },
        ],
      },
    },
    // Demo Part 4: Getting Feedback
    {
      type: "intro",
      content: {
        title: "Ask For Help! 👥",
        description: "Let's see what others think...",
        buttonText: "Check Feedback",
        spokenContent:
          "I showed my welcome station idea to some students and the librarian. Here's what they said!",
        tools: [
          {
            icon: "💭",
            title: "Student Feedback",
            description: "What kids thought",
            theme: "purple",
            observations: [
              "'I love the touch screen!'",
              "'Pictures help a lot'",
              "'Can we add book categories?'",
            ],
          },
          {
            icon: "📚",
            title: "Librarian Ideas",
            description: "Expert advice",
            theme: "blue",
            observations: [
              "Add common book types",
              "Make screen kid-height",
              "Include simple instructions",
            ],
          },
        ],
        tips: [
          {
            icon: "👂",
            text: "Listen to ideas from everyone",
          },
        ],
      },
    },
    // Demo Part 5: Improving Design
    {
      type: "intro",
      content: {
        title: "Make It Better! ⭐",
        description: "Here's how I improved my idea...",
        buttonText: "See Changes",
        spokenContent:
          "Watch how I made my welcome station even better using everyone's ideas!",
        tools: [
          {
            icon: "✨",
            title: "New Features",
            description: "What I added",
            theme: "green",
            observations: [
              "Lower screen for easy reach",
              "Popular book buttons",
              "Simple 3-step guide",
              "Pictures for each category",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Small changes can make big improvements",
          },
        ],
      },
    },
    // Now Your Turn
    {
      type: "intro",
      content: {
        title: "Your Turn to Design! 🎨",
        description: "Create your own library solution!",
        buttonText: "Start Designing",
        spokenContent:
          "Now it's your turn! Use what you learned to create your own solution for the library. Remember, start with wild ideas!",
        tools: [
          {
            icon: "📝",
            title: "Design Steps",
            description: "Follow this path",
            theme: "purple",
            observations: [
              "1. Think of wild ideas",
              "2. Make them realistic",
              "3. Draw your favorite",
              "4. Get feedback",
              "5. Make it better",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Have fun creating!",
          },
          {
            icon: "✨",
            text: "There are no wrong ideas",
          },
        ],
      },
    },
    // Final Check
    {
      type: "quiz",
      content: {
        title: "Design Star Check! ⭐",
        description: "Show what you learned about designing solutions!",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see if you remember the important parts of being a great designer!",
        question:
          "You want to design something to help in the library. What should you do first?",
        options: [
          {
            icon: "💭",
            text: "Think of lots of wild ideas before picking one to make",
            correct: true,
            feedback:
              "Yes! Great designers start by thinking of many ideas, even wild ones. This helps us find creative solutions!",
          },
          {
            icon: "🔨",
            text: "Start building the first idea you think of",
            correct: false,
            feedback:
              "Remember to think of many ideas first! The first idea isn't always the best one.",
          },
          {
            icon: "📝",
            text: "Write a long list of what's wrong",
            correct: false,
            feedback:
              "We already found the problems as detectives. Now it's time to think of creative solutions!",
          },
        ],
      },
    },
  ],
};
