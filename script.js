function showInfo() {
  // DOM selection methods

  var labels = document.getElementsByClassName("input-label");

  var inputs = document.getElementsByTagName("input");

  // Get information from the input fields

  var fullName = document.getElementById("fullName").value;

  var email = document.getElementById("email").value;

  var age = document.getElementById("age").value;

  var birthday = document.getElementById("birthday").value;

  var address = document.getElementById("address").value;

  var phone = document.getElementById("phone").value;

  var course = document.getElementById("course").value;

  var school = document.getElementById("school").value;

  var color = document.getElementById("favoriteColor").value;

  // Get hobbies

  var hobbies = document.getElementsByName("hobby");

  var selectedHobbies = "";

  if (hobbies[0].checked) {
    selectedHobbies += hobbies[0].value + ", ";
  }

  if (hobbies[1].checked) {
    selectedHobbies += hobbies[1].value + ", ";
  }

  if (hobbies[2].checked) {
    selectedHobbies += hobbies[2].value + ", ";
  }

  if (hobbies[3].checked) {
    selectedHobbies += hobbies[3].value + ", ";
  }

  if (hobbies[4].checked) {
    selectedHobbies += hobbies[4].value + ", ";
  }

  if (hobbies[5].checked) {
    selectedHobbies += hobbies[5].value + ", ";
  }

  if (hobbies[6].checked) {
    selectedHobbies += hobbies[6].value + ", ";
  }

  if (hobbies[7].checked) {
    selectedHobbies += hobbies[7].value + ", ";
  }

  if (hobbies[8].checked) {
    selectedHobbies += hobbies[8].value;
  }

  // Get gender

  var gender = document.getElementsByName("gender");

  var selectedGender = "";

  if (gender[0].checked) {
    selectedGender = gender[0].value;
  } else if (gender[1].checked) {
    selectedGender = gender[1].value;
  } else if (gender[2].checked) {
    selectedGender = gender[2].value;
  }

  // Display the information

  document.getElementById("output").innerHTML =
    "<p><b>Full Name:</b> " +
    fullName +
    "</p>" +
    "<p><b>Email Address:</b> " +
    email +
    "</p>" +
    "<p><b>Age:</b> " +
    age +
    "</p>" +
    "<p><b>Birthday:</b> " +
    birthday +
    "</p>" +
    "<p><b>Address:</b> " +
    address +
    "</p>" +
    "<p><b>Phone Number:</b> " +
    phone +
    "</p>" +
    "<p><b>Course:</b> " +
    course +
    "</p>" +
    "<p><b>School:</b> " +
    school +
    "</p>" +
    "<p><b>Hobbies:</b> " +
    selectedHobbies +
    "</p>" +
    "<p><b>Favorite Color:</b> " +
    color +
    "</p>" +
    "<p><b>Gender:</b> " +
    selectedGender +
    "</p>";
}