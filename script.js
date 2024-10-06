console.log("Script loaded");

document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('projectDetails').style.display = 'block';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const projectType = document.getElementById('projectType').value;

    if (projectType) {
        // Hide project details and show interactivity level selection
        document.getElementById('projectDetails').style.display = 'none';
        document.getElementById('interactivityLevel').style.display = 'block';
    } else {
        alert('Please select a project type.');
    }
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const level = document.getElementById('level').value;
    let estimate;

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

    alert(`Estimated development time: ${estimate}`);
});
