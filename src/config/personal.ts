// Personal Assistant Configuration
// Add your personal information here to help your assistant serve you better

export const personalConfig = {
  // Basic Information
  name: "Chandan C R",
  title: "Software Developer", // Your job title or role
  location: "Your Location", // Optional: your city/country
  timezone: "Asia/Kolkata", // Your timezone
  
  // Professional Information
  skills: [
    "JavaScript",
    "TypeScript", 
    "React",
    "Next.js",
    "Node.js",
    // Add your skills here
  ],
  
  currentProjects: [
    "AI Chatbot Development",
    // Add your current projects
  ],
  
  // Personal Preferences
  workingHours: {
    start: "09:00",
    end: "18:00",
    timezone: "Asia/Kolkata"
  },
  
  // Communication Style Preferences
  communicationStyle: {
    formality: "professional-friendly", // formal, professional-friendly, casual
    detailLevel: "detailed", // brief, moderate, detailed
    codeExplanation: "step-by-step", // brief, step-by-step, comprehensive
  },
  
  // Assistant Behavior
  assistantPersonality: {
    proactive: true, // Should the assistant offer additional suggestions?
    encouraging: true, // Should the assistant be motivational?
    technical: true, // Focus on technical accuracy?
  },
  
  // Learning and Development Goals
  learningGoals: [
    "Advanced React patterns",
    "System Design",
    // Add what you're currently learning
  ],
  
  // Daily Workflow
  dailyRoutine: {
    morningTasks: ["Check emails", "Review daily goals"],
    planningStyle: "structured", // structured, flexible, minimal
  },
  
  // Personal Interests (helps with conversation)
  interests: [
    "Technology",
    "Programming",
    "AI/ML",
    // Add your interests
  ],
  
  // Context for better assistance
  commonTasks: [
    "Code review and debugging",
    "Project planning",
    "Learning new technologies",
    "Writing documentation",
    // Add tasks you frequently need help with
  ]
};

// Helper function to get personalized context
export const getPersonalContext = () => {
  return `
Additional context about Chandan:
- Role: ${personalConfig.title}
- Primary skills: ${personalConfig.skills.join(", ")}
- Current projects: ${personalConfig.currentProjects.join(", ")}
- Learning goals: ${personalConfig.learningGoals.join(", ")}
- Communication preference: ${personalConfig.communicationStyle.formality} with ${personalConfig.communicationStyle.detailLevel} explanations
- Common tasks: ${personalConfig.commonTasks.join(", ")}
- Interests: ${personalConfig.interests.join(", ")}
`;
}; 