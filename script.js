document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('projectDetails').style.display = 'block';
});
document.getElementById('nextBtn').addEventListener('click', function() {
    const projectType = document.getElementById('projectType').value;
    if (projectType) {
        alert(`You selected ${projectType}. Next step!`);
        // Here you can show the next section or proceed with calculations
    } else {
        alert('Please select a project type.');
    }
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
