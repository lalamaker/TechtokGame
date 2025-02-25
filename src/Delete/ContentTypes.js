// ContentTypes.js - Collection of reusable content patterns

export const LAYOUTS = {
  SINGLE: "single",
  GRID: "grid",
  SPLIT: "split",
  TIMELINE: "timeline",
  STEPS: "steps",
  MASONRY: "masonry",
  CAROUSEL: "carousel",
};

export const CONTENT_TYPES = {
  // Basic text content
  TEXT: "text",
  // Interactive elements
  QUIZ: "quiz",
  CHALLENGE: "challenge",
  EXERCISE: "exercise",
  // Visual content
  IMAGE: "image",
  VIDEO: "video",
  DIAGRAM: "diagram",
  // Group content
  LIST: "list",
  GRID: "grid",
  COMPARISON: "comparison",
  // Special content
  CODE: "code",
  MATH: "math",
  FORMULA: "formula",
};

// Example content patterns that can be mixed and matched
export const contentPatterns = {
  // Learning objective pattern
  learningObjective: {
    type: "objective",
    layout: LAYOUTS.SINGLE,
    structure: {
      icon: "🎯",
      title: "Learning Objectives",
      sections: [
        {
          title: "After this lesson, you will:",
          items: [
            // Array of learning objectives
          ],
        },
      ],
      footer: {
        type: "progress",
        // Progress tracking info
      },
    },
  },

  // Concept explanation pattern
  conceptExplanation: {
    type: "concept",
    layout: LAYOUTS.SPLIT,
    structure: {
      mainContent: {
        title: "",
        description: "",
        visualAid: {
          type: CONTENT_TYPES.IMAGE | CONTENT_TYPES.DIAGRAM,
          content: "",
        },
      },
      supportingContent: {
        examples: [],
        keyPoints: [],
        commonMistakes: [],
      },
    },
  },

  // Interactive exercise pattern
  interactiveExercise: {
    type: "exercise",
    layout: LAYOUTS.STEPS,
    structure: {
      introduction: {
        title: "",
        description: "",
        prerequisites: [],
      },
      steps: [
        {
          instruction: "",
          hint: "",
          validation: "",
          feedback: {
            success: "",
            partial: "",
            failure: "",
          },
        },
      ],
      conclusion: {
        summary: "",
        nextSteps: [],
      },
    },
  },

  // Comparison pattern
  comparison: {
    type: "comparison",
    layout: LAYOUTS.GRID,
    structure: {
      title: "",
      description: "",
      items: [
        {
          title: "",
          description: "",
          pros: [],
          cons: [],
          examples: [],
        },
      ],
      conclusion: "",
    },
  },

  // Timeline/Process pattern
  timeline: {
    type: "timeline",
    layout: LAYOUTS.TIMELINE,
    structure: {
      title: "",
      description: "",
      stages: [
        {
          title: "",
          description: "",
          duration: "",
          milestones: [],
          checkpoints: [],
        },
      ],
    },
  },

  // Quiz/Assessment pattern
  assessment: {
    type: "assessment",
    layout: LAYOUTS.SINGLE,
    structure: {
      introduction: {
        title: "",
        instructions: "",
        duration: "",
        totalPoints: 0,
      },
      questions: [
        {
          type: "multiple-choice" | "true-false" | "matching" | "open-ended",
          question: "",
          options: [],
          correctAnswer: "",
          explanation: "",
          points: 0,
        },
      ],
      feedback: {
        ranges: [
          {
            min: 0,
            max: 100,
            message: "",
            nextSteps: [],
          },
        ],
      },
    },
  },

  // Case study pattern
  caseStudy: {
    type: "case-study",
    layout: LAYOUTS.SPLIT,
    structure: {
      context: {
        title: "",
        background: "",
        challenge: "",
        constraints: [],
      },
      analysis: {
        keyIssues: [],
        stakeholders: [],
        considerations: [],
      },
      solution: {
        approach: "",
        implementation: [],
        results: [],
        lessons: [],
      },
    },
  },

  // Reference/Resource pattern
  reference: {
    type: "reference",
    layout: LAYOUTS.MASONRY,
    structure: {
      mainConcepts: [
        {
          term: "",
          definition: "",
          examples: [],
          relatedTerms: [],
        },
      ],
      formulas: [
        {
          name: "",
          expression: "",
          variables: {},
          usage: "",
          examples: [],
        },
      ],
      visualAids: [
        {
          type: "diagram" | "chart" | "illustration",
          content: "",
          caption: "",
          annotations: [],
        },
      ],
    },
  },

  // Discussion/Reflection pattern
  discussion: {
    type: "discussion",
    layout: LAYOUTS.SINGLE,
    structure: {
      prompt: {
        question: "",
        context: "",
        guidelines: [],
      },
      supportingMaterial: {
        readings: [],
        viewpoints: [],
        questions: [],
      },
      activities: {
        individual: [],
        group: [],
        class: [],
      },
      reflection: {
        questions: [],
        prompts: [],
        rubric: {},
      },
    },
  },

  // Project/Application pattern
  project: {
    type: "project",
    layout: LAYOUTS.STEPS,
    structure: {
      overview: {
        title: "",
        description: "",
        learningGoals: [],
        timeframe: "",
        resources: [],
      },
      phases: [
        {
          name: "",
          description: "",
          tasks: [],
          deliverables: [],
          checkpoints: [],
        },
      ],
      evaluation: {
        criteria: [],
        rubric: {},
        submission: {},
      },
    },
  },
};

// Helper function to create custom content patterns
export const createContentPattern = (type, layout, structure) => {
  return {
    type,
    layout,
    structure,
  };
};
