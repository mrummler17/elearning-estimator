document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded");

    // Descriptions for each level of interactivity
    const descriptions = {
        1: "Level 1 - Basic: Simple slideshows or text-based lessons, with basic quizzes and limited multimedia (like images or infographics). Minimal interactions.",
        2: "Level 2 - Simple Interactivity: Includes some interactivity such as multiple-choice quizzes, drag-and-drop exercises, and basic animations. May feature audio and basic animations.",
        3: "Level 3 - Moderate Interactivity: More engaging content with multimedia integration (audio, video) and interactive scenarios. Learners explore through simulations and decision-making exercises.",
        4: "Level 4 - Complex Interactivity: High-end simulations, complex branching scenarios, and assessments. Could include gamification or highly custom interactions.",
        5: "Level 5 - Immersive: Fully immersive experiences, including virtual or augmented reality and complex simulations with custom graphics, animations, and audio."
    };

    // Start button - Show Project Details
    document.getElementById('startBtn').addEventListener('click', function() {
        document.getElementById('projectDetails').style.display = 'block';
    });

    // Next button - Show Interactivity Level after Project Type is selected
    document.getElementById('nextBtn').addEventListener('click', function() {
        const projectType = document.getElementById('projectType').value;
        if (projectType) {
            document.getElementById('projectDetails').style.display = 'none';
            document.getElementById('interactivityLevel').style.display = 'block';
        } else {
            alert('Please select a project type.');
        }
    });

    // Calculate button - Show Estimated Time, Description, and Source URL
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const level = document.getElementById('level').value;
        let estimate, description;

        switch (level) {
            case "1":
                estimate = "50-100 hours";
                break;
            case "2":
                estimate = "100-200 hours";
                break;
            case "3":
                estimate = "200-400 hours";
                break;
            case "4":
                estimate = "400-600 hours";
                break;
            case "5":
                estimate = "600+ hours";
                break;
            default:
                estimate = "Please select a valid level.";
        }

        // Show estimate, description, and source link
        description = descriptions[level] || "Please select a valid level.";
        const sourceURL = '<a href="https://yourelearningworld.com/accurate-elearning-development-time/">Source: Your eLearning World</a>';

        document.getElementById('description').innerHTML = `<strong>Estimated Development Time:</strong> ${estimate}<br><strong>Description:</strong> ${description}<br>${sourceURL}`;
    });
});
