function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // Trim the input value to remove leading/trailing whitespace
  let trimmedValue = recommendation.value.trim();

  // If the user has left a recommendation, display a pop-up
  if (trimmedValue !== "") {
    console.log("New recommendation added");
    // Call showPopup here
    showPopup(true, "Thanks for leaving a recommendation");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `<span>&#8220;</span>${trimmedValue}<span>&#8221;</span>`;

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";
  } else {
    // Display an error message or highlight the input field
    console.log("Recommendation message is empty");
    // You can add code here to display an error message to the user or style the input field to indicate an error
    showPopup(false, "Recommendation message is empty");
  }
}

function showPopup(isSuccess, message) {
  const popup = document.getElementById('popup');
  const h3 = popup.querySelector('h3');
  
  if (isSuccess) {
    popup.style.backgroundColor = '#e8bcf0';
  } else {
    popup.style.backgroundColor = '#f8d7da';
  }
  
  h3.textContent = message;
  popup.style.visibility = 'visible';
  
  // Hide the popup after a certain time (e.g., 3 seconds)
  setTimeout(() => {
    popup.style.visibility = 'hidden';
  }, 3000);
}

function updateExperience() {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const startDate = skill.dataset.startDate;
    if (startDate) {
      const start = new Date(startDate);
      const now = new Date();
      const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      let experience = '';
      if (years > 0) {
        experience += years === 1 ? '1 year ' : `${years} years `;
      }
      if (remainingMonths > 0) {
        experience += remainingMonths === 1 ? '1 month' : `${remainingMonths} months`;
      }
      if (experience === '') {
        experience = 'Less than a month';
      }
      skill.querySelector('.experience').textContent = experience + ' experience';
    }
  });
}

document.addEventListener('DOMContentLoaded', updateExperience);
function fadeInOnScroll() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  fadeInElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      element.classList.add('fade-in-visible');
    } else {
      element.classList.remove('fade-in-visible');
    }
  });
}

document.addEventListener('scroll', fadeInOnScroll);

// Call the function initially to ensure elements are visible if they're already in view
fadeInOnScroll();

