const educationInfo = {
    "background": "Education Background",
    "degrees": [
      {
        "type": "Advanced Diploma",
        "field": "Informatics",
        "institution": "Tshwane University of Technology",
        "status": "In Progress"
      },
      {
        "type": "National Diploma",
        "field": "Information Technology (Informatics)",
        "institution": "Tshwane University of Technology",
        "year": 2021
      },
      {
        "type": "National Higher Certificate",
        "field": "IT Support System",
        "institution": "Speccon Holdings",
        "year": 2021
      }
    ],
    "highSchool": {
      "name": "Soshangane High School",
      "certificate": "National Senior Certificate",
      "year": 2016
    }
  };

  function displayEducationInfo() {
    const educationContainer = document.getElementById("educationInfo");

    // Add background information
    const backgroundHeading = document.createElement("h3");
    backgroundHeading.textContent = educationInfo.background;
    educationContainer.appendChild(backgroundHeading);

    // Add degree information
    const degreesList = document.createElement("p");
    educationInfo.degrees.forEach(degree => {
      const degreeItem = document.createElement("p");
      degreeItem.textContent = `${degree.type} in ${degree.field} from ${degree.institution}`;
      if (degree.status === "In Progress") {
        degreeItem.textContent += ` (In Progress)`;
      } else {
        degreeItem.textContent += ` (Year: ${degree.year})`;
      }
      degreesList.appendChild(degreeItem);
    });
    educationContainer.appendChild(degreesList);

    // Add high school information
    const highSchoolInfo = document.createElement("p");
    highSchoolInfo.textContent = `High School: ${educationInfo.highSchool.name}, ${educationInfo.highSchool.certificate} (Year: ${educationInfo.highSchool.year})`;
    educationContainer.appendChild(highSchoolInfo);
  }

  // Call the function to display education info when the page loads
  window.addEventListener("load", displayEducationInfo);


  const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        alert('Your message has been sent. Thank you!');
        form.reset();
      } catch (error) {
        console.error('There was an error!', error.message);
        alert('There was an error. Please try again later.');
      }
    });

    const workExperience = [
        {
          jobTitle: "Cybersecurity Intern",
          company: "Council for Scientific & Industrial Research (CSIR)",
          duration: "March 2023 - Present"
        },
        {
          jobTitle: "PowerBi Intern (Remotely)",
          company: "Ubuntu Institute",
          duration: "July 2022 - June 2023"
        },
        {
          jobTitle: "Community Banker",
          company: "First National Bank (FNB)",
          duration: "April 2022 - February 2023"
        },
        {
          jobTitle: "Data Analytics and PowerBi Intern (Remotely)",
          company: "Deviare",
          duration: "October 2021 - February 2022"
        },
        {
          jobTitle: "Software Developer Intern",
          company: "The Digital Academy",
          duration: "December 2020 - November 2021"
        }
      ];
      
      document.addEventListener("DOMContentLoaded", function() {
        const workExperienceList = document.getElementById("workExperienceList");
      
        // Loop through the workExperience array and generate HTML for each job experience
        workExperience.forEach(job => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <strong>Job Title:</strong> ${job.jobTitle}<br>
            <strong>Company:</strong> ${job.company}<br>
            <strong>Duration:</strong> ${job.duration}<br><br>
          `;
          workExperienceList.appendChild(listItem);
        });
      });
      
      const achievements = [
        "AWS Practitioner Boot Camp from GirlCode",
        "Online short course for Cybersecurity and Artificial Intelligence Certification from WomEng",
        "Online short course for Data Analytics and Power BI Certification from SimpliLearn",
        "Online short course for Introduction to Cybersecurity from Cisco",
        "Online short course for Introduction to JavaScript from Cisco",
        "Online short Introduction to Cybersecurity Terminology from LinkedIn Learning"
      ];
      
      function displayAchievements() {
        const achievementsContainer = document.querySelector(".certification");
      
        // Add achievements heading
        const achievementsHeading = document.createElement("h2");
        achievementsHeading.textContent = "Achievements";
        achievementsContainer.appendChild(achievementsHeading);
      
        // Create an unordered list for achievements
        const achievementsList = document.createElement("ul");
      
        // Add each achievement as a list item
        achievements.forEach(achievement => {
          const achievementItem = document.createElement("li");
          achievementItem.textContent = achievement;
          achievementsList.appendChild(achievementItem);
        });
      
        // Append the list to the achievements container
        achievementsContainer.appendChild(achievementsList);
      }
      
      // Call the function to display achievements when the page loads
      window.addEventListener("load", displayAchievements);
      