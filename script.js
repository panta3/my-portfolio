function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // Trim the input value to remove leading/trailing whitespace
  let trimmedValue = recommendation.value.trim();

  // If the user has left a recommendation, display a pop-up
  if (trimmedValue !== "") {
    console.log("New recommendation added");
    // Call showPopup here
    showPopup(true);

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
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
    // Hide the popup after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      showPopup(false);
    }, 3000);
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
