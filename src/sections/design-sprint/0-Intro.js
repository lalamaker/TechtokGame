export default {
  title: "👋 Introduction",
  key: "intro",
  maxStates: {
    intro: {
      state: "talk",
      message: "Hi! I'm Max, your design thinking guide! 👋",
      miniMessage: "Hi there! 🌟",
      expandedMessage:
        "I'm so excited to be your friend and mentor on this amazing journey! Together, we'll discover how to solve problems and create incredible solutions that help people.",
    },
  },
  steps: [
    {
      type: "intro",
      content: {
        title: "Welcome to your design adventure! 👋",
        description:
          "I'll be your guide as we learn to solve problems and create amazing things!",
        buttonText: "Let's Start Our Adventure",
        audioSrc: "/audio/max-intro.mp3",
        srtSrc: "/audio/max-intro.srt",
        spokenContent:
          "Hi there, I'm Max, your design guide, ready to learn some amazing skills? I'm passionate about design thinking and problem solving. Together, we'll discover how to create solutions that make a real difference. Design thinking is all about solving problems creatively. Imagine you're a detective, looking for clues to understand what people need. Then, you become an inventor, coming up with cool ideas to make their lives better. By the end of this journey, you'll have tools and skills to turn your ideas into something real, like a prototype of an app or a product. Let's dive in and explore together!",
        tools: [
          {
            icon: "🕵️",
            title: "Problem Detective",
            description: "We'll spot real problems and understand them deeply",
            theme: "blue",
            examples: ["👀", "❓", "📝"],
          },
          {
            icon: "🎨",
            title: "Design Studio",
            description: "We'll create awesome solutions together",
            theme: "purple",
            examples: ["💡", "✏️", "🎯"],
          },
          {
            icon: "🛠️",
            title: "Prototype Playground",
            description: "We'll build and test our ideas",
            theme: "green",
            examples: ["🔨", "🧪", "✨"],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "You'll learn to solve real problems that matter",
          },
          {
            icon: "🌟",
            text: "You'll discover your creative superpowers",
          },
          {
            icon: "✨",
            text: "You'll build amazing things that help people",
          },
        ],
      },
    },
  ],
};
