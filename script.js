document.getElementById("analyzeButton").addEventListener("click", analyzeResume);

function analyzeResume() {
    console.log("Analyze Resume button clicked.");  // Debugging line

    const resumeInput = document.getElementById("resumeInput");
    const roleSelect = document.getElementById("roleSelect");
    const resultContainer = document.getElementById("resultContainer");
    const loadingMessage = document.getElementById("loadingMessage");
    const resumeScore = document.getElementById("resumeScore").getElementsByTagName('span')[0];
    const jobChance = document.getElementById("jobChance").getElementsByTagName('span')[0];
    const scoreExplanation = document.getElementById("scoreExplanation");
    const suggestionsContainer = document.getElementById("suggestions");
    const skillMatchResults = document.getElementById("skillMatchResults");
    const professionalSummary = document.getElementById("professionalSummary");
    const jobListingsContainer = document.getElementById("jobListings");
    const skillChartContext = document.getElementById("skillChart").getContext('2d');

    // Check for resume input
    if (resumeInput.files.length === 0) {
        alert("Please upload a resume.");
        return;
    }

    // Check for selected job role
    if (roleSelect.value === "") {
        alert("Please select a job role.");
        return;
    }

    loadingMessage.innerText = "Analyzing your resume...";
    console.log("Resume and role selected. Starting analysis...");  // Debugging line

    // Simulate analysis process
    setTimeout(() => {
        console.log("Analysis completed.");  // Debugging line
        resultContainer.innerHTML = "<p>Analyzed Content: Your resume is well-structured with clear sections.</p>";

        // Simulated score and job chance
        const score = Math.floor(Math.random() * 101); // Score out of 100
        const chance = Math.floor(Math.random() * 101) + "%";

        // Tailored suggestions based on selected role
        let tailoredSuggestions;
        switch (roleSelect.value) {
            case "Software Developer":
                tailoredSuggestions = "Consider adding your coding projects and open-source contributions.";
                break;
            case "Data Scientist":
                tailoredSuggestions = "Highlight your experience with data analysis tools like Python or R.";
                break;
            case "Project Manager":
                tailoredSuggestions = "Emphasize your leadership skills and project management certifications.";
                break;
            case "Web Designer":
                tailoredSuggestions = "Showcase your portfolio and design projects.";
                break;
            default:
                tailoredSuggestions = "Focus on relevant experience and skills for the selected role.";
        }
        
        // Update the score and job chance
        resumeScore.innerText = score;
        jobChance.innerText = chance;
        scoreExplanation.innerText = `Your resume score is ${score} out of 100.`;
        suggestionsContainer.innerText = tailoredSuggestions;

        // Skill Matcher
        const skillsInResume = ["JavaScript", "HTML", "CSS", "React"]; // Sample skills from resume
        const requiredSkills = ["JavaScript", "Node.js", "React", "CSS"]; // Skills for the selected role
        const matchingSkills = skillsInResume.filter(skill => requiredSkills.includes(skill));
        skillMatchResults.innerText = `Matching Skills: ${matchingSkills.join(', ')}`;

        // Visual Resume Summary (Chart.js)
        const skillData = {
            labels: ['JavaScript', 'HTML', 'CSS', 'React'],
            datasets: [{
                label: 'Skills Proficiency',
                data: [85, 90, 80, 70], // Sample proficiency data
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        };

        const skillChart = new Chart(skillChartContext, {
            type: 'bar',
            data: skillData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Update professional summary (dummy text)
        professionalSummary.innerText = "Professional Summary: An accomplished software developer with 5 years of experience.";
        
        // Dummy job listings
        jobListingsContainer.innerHTML = `
            <ul>
                <li>Software Developer at Company A</li>
                <li>Frontend Developer at Company B</li>
                <li>Full Stack Developer at Company C</li>
            </ul>
        `;

    }, 2000);
}








