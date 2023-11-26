

function darkmode() {
      // Get the current stylesheet
      var currentStyleSheet = document.getElementById('stylesheet').getAttribute('href');

      // Switch between stylesheets
      if (currentStyleSheet === 'Style.css') {
        document.getElementById('stylesheet').setAttribute('href', 'Style2.css');
        // Change the icon to represent the sun
        document.getElementById('icon').classList.remove('fa-moon');
        document.getElementById('icon').classList.add('fa-sun');
      } else {
        document.getElementById('stylesheet').setAttribute('href', 'Style.css');
        // Change the icon to represent the moon
        document.getElementById('icon').classList.remove('fa-sun');
        document.getElementById('icon').classList.add('fa-moon');
      }

      // Save the current stylesheet to localStorage
      localStorage.setItem('currentStyleSheet', document.getElementById('stylesheet').getAttribute('href'));
    }

    // Function to set the initial stylesheet based on the saved preference
    function setInitialStylesheet() {
      var savedStyleSheet = localStorage.getItem('currentStyleSheet');
      if (savedStyleSheet) {
        document.getElementById('stylesheet').setAttribute('href', savedStyleSheet);
      }
    }


// js.js


function registerChild() {
    var kname = document.getElementById("kname").value;
    var day = document.getElementById("DD").value;
    var month = document.getElementById("MM").value;
    var year = document.getElementById("YY").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var image = document.getElementById("myFile").files[0];
  
    // Validate the form fields
    if (!kname || !day || !month || !year || !gender || !email || !phone || !image) {
        alert("Please fill in all fields, including the image");
        return;
    }
  
    // Validate other fields as needed...
  
    var dob = day + " " + month + " " + year;
  
    var currentYear = new Date().getFullYear();
    if (currentYear - year > 2017) {
        alert("Children younger than 6 years old are not accepted.");
        return;
    }
      var reader = new FileReader();
      reader.onload = function (event) {
          var children = JSON.parse(localStorage.getItem("children")) || [];
          var imageUrl = event.target.result;
          children.push({ name: kname, dob: dob, gender: gender, email: email, phone: phone, image: imageUrl });
          localStorage.setItem("children", JSON.stringify(children));
  
          alert("Child registered successfully!");
  
          printChildInformation({ name: kname, dob: dob, gender: gender, email: email, phone: phone, image: imageUrl });
      };
  
      reader.readAsDataURL(image);
  }
  
  function printChildInformation(child) {
      var printWindow = window.open('', '_blank');
      var currentDate = new Date().toLocaleDateString();
      var currentTime = new Date().toLocaleTimeString();
  
      printWindow.document.write('<p>' + currentDate  + currentTime +'</p>');
      printWindow.document.write('<img src="' + child.image + '" width="100" height="100" alt="kid">');
      printWindow.document.write('<p><strong>Name:</strong> ' + child.name + '</p>');
      printWindow.document.write('<p><strong>Date of Birth:</strong> ' + child.dob + '</p>');
      printWindow.document.write('<p><strong>Gender:</strong> ' + child.gender + '</p>');
      printWindow.document.write('<p><strong>Email:</strong> ' + child.email + '</p>');
      printWindow.document.write('<p><strong>Phone:</strong> ' + child.phone + '</p>');
      printWindow.document.write('</body></html>');
  
      // Close the document for printing
      printWindow.document.close();
  
      setTimeout(function () {
          // Print the document
          printWindow.print();
  
          // Close the print window after printing
          printWindow.close();
      }, 1000);
  }

// Define a multidimensional array for courses
const coursesArray = [
    {
        name: "Robot",
        tutor: "T.Mohammed",
        prerequisites: "none",
        image: "Images/Robot.png"
    },
    {
        name: "HTML",
        tutor: "T.Maha",
        prerequisites: "UX",
        image: "Images/html5.png"
    },
    {
        name: "Scratch",
        tutor: "T.Maha",
        prerequisites: "none",
        image: "Images/scratch.png"
    },
    {
        name: "Java",
        tutor: "T.Nasser",
        prerequisites: "python",
        image: "Images/java.png"
    },
    {
        name: "C++",
        tutor: "T.Nasser",
        prerequisites: "Java",
        image: "Images/c-logo.png"
    },
    {
        name: "drone",
        tutor: "T.Mohammed",
        prerequisites: "robot",
        image: "Images/drone.png"
    },
    {
        name: "python",
        tutor: "T.Sara",
        prerequisites: "scratch",
        image: "Images/python.png"
    },
    {
        name: "unity",
        tutor: "T.Faris",
        prerequisites: "C++",
        image: "Images/unity.png"
    },
    {
        name: "UX",
        tutor: "T.Maha",
        prerequisites: "none",
        image: "Images/ux.png"
    }
];



function loadChildren() {
  var parentSection = document.querySelector('.section');

  if (!parentSection) {
      console.error("Parent section not found.");
      return;
  }

  // Retrieve children from local storage
  var children = JSON.parse(localStorage.getItem("children")) || [];

  // Check if Ahmad and Sara are already present, if not, add them
  var AliExists = children.some(child => child.name === 'Ali');
  var saraExists = children.some(child => child.name === 'Sara');

  if (!AliExists) {
      children.push({
          name: 'Ali',
          dob: '2005-01-01',
          gender: 'Male',
          email: 'Ali@example.com',
          phone: '1234567890',
          image: 'Images/kid.png'
      });
  }

  if (!saraExists) {
      children.push({
          name: 'Sara',
          dob: '2006-02-02',
          gender: 'Female',
          email: 'sara@example.com',
          phone: '9876543210',
          image: 'Images/kid2.png'
      });
  }

  // Save the updated children array to local storage
  localStorage.setItem("children", JSON.stringify(children));

  // Clear existing content in the parent section
  parentSection.innerHTML = '';

  // Display children in Parent Dashboard
  children.forEach(function (child) {
      var childItem = document.createElement("div");
      childItem.classList.add("section__item");
      childItem.innerHTML = '<img src="' + child.image + '"width="100" height="100" alt="kid"><p>' + child.name + '</p>';
      parentSection.appendChild(childItem);
  });
}

// Ensure the DOM is fully loaded before calling the function
document.addEventListener("DOMContentLoaded", function () {
  loadChildren();
});

// Call the loadChildren function when the Parent Dashboard page is loaded
function loadChildNames() {
    var childSelect = document.getElementById("childDropdown");

    // Retrieve children from local storage
    var children = JSON.parse(localStorage.getItem("children")) || [];

    // Add each child name as an option
    children.forEach(function (child) {
        var option = document.createElement("option");
        option.value = child.name;
        option.textContent = child.name;
        childSelect.appendChild(option);
    });

    populateFilters() 
}




  // Define global variable to store selected filters
  var selectedChild = "";
  var selectedPrerequisite = "";
  var selectedTutor = "";

  function populateFilters() {
    // Get unique tutors and prerequisites from the coursesArray
    var tutors = Array.from(new Set(coursesArray.map(course => course.tutor)));
    var prerequisites = Array.from(new Set(coursesArray.map(course => course.prerequisites)));
  
    // Clear existing options
    var tutorFilter = document.getElementById("tutor");
    var prerequisiteFilter = document.getElementById("Prerequisite");
    tutorFilter.innerHTML = '<optgroup label="Tutor"></optgroup>';
    prerequisiteFilter.innerHTML = '<optgroup label="Prerequisite"></optgroup>';
  
    // Populate the tutor filter
    tutors.forEach(tutor => {
      var option = document.createElement("option");
      option.value = tutor;
      option.textContent = tutor;
      tutorFilter.lastChild.appendChild(option);
    });
  
    // Populate the prerequisite filter
    prerequisites.forEach(prerequisite => {
      var option = document.createElement("option");
      option.value = prerequisite;
      option.textContent = prerequisite === "none" ? "No Prerequisite" : prerequisite;
      prerequisiteFilter.lastChild.appendChild(option);
    });
  }
  

  function updateCourses() {
    // Get selected values from filters
    selectedChild = document.getElementById("childDropdown").value;
    selectedPrerequisite = document.getElementById("Prerequisite").value;
    selectedTutor = document.getElementById("tutor").value;

    // Filter courses based on selected filters
    var filteredCourses = coursesArray.filter(course => {
      return (
        (selectedPrerequisite === "" || course.prerequisites === selectedPrerequisite) &&
        (selectedTutor === "" || course.tutor === selectedTutor)
      );
    });

    // Populate the courses list
    var courseCheckboxList = document.querySelector(".courseCheackbox ul");
    courseCheckboxList.innerHTML = "";
    filteredCourses.forEach(course => {
      var li = document.createElement("li");
      li.innerHTML =
        '<input type="checkbox" name="courses" value="' +
        course.name +
        '"> ' +
        course.name +
        ' - ' +
        course.tutor;
      courseCheckboxList.appendChild(li);
    });
  }

  function enrollCourses() {
    // Check if a child is selected
    var selectedChildElement = document.getElementById("childDropdown");
    if (!selectedChildElement.checkValidity()) {
        alert("Please select a child.");
        return;
    }

    // Check if at least one course is selected
    var selectedCourses = document.querySelectorAll('input[name="courses"]:checked');
    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    // Clear existing information
    var displaySection = document.querySelector(".enrollment-info");
    displaySection.innerHTML = '';

    // Display new information on the page
    displaySection.innerHTML =
        "<h3>Enrollment Information</h3>" +
        "<p>Child: " +
        selectedChildElement.value +
        "</p>" +
        "<p>Courses:</p><ul>" +
        Array.from(selectedCourses)
            .map(course => "<li>" + course.value + ' - ' + getTutor(course.value) + "</li>")
            .join("") +
        "</ul>";

    // Clear the form
    document.querySelector("form").reset();
}

// Helper function to get the tutor for a given course
function getTutor(courseName) {
    var course = coursesArray.find(course => course.name === courseName);
    return course ? course.tutor : "N/A";
}

  
document.addEventListener("DOMContentLoaded", function () {
    // Populate courses in the dropdown
    var courseSelect = document.getElementById("sCourse");
    coursesArray.forEach(function (course) {
      var option = document.createElement("option");
      option.value = course.name;
      option.textContent = course.name;
      courseSelect.appendChild(option);
    });
  
    // Add submit event listener to the form
    var evaluationForm = document.getElementById("corseEvaluation");
    evaluationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get selected course and rating
      var selectedCourse = courseSelect.value;
      var selectedRating = document.querySelector('input[name="rating"]:checked');
  
      // Check if a course is selected and a rating is chosen
      if (selectedCourse && selectedRating) {
        // Display an alert with the feedback
        alert(
          "Thank you for your feedback!\nYour rating for course " +
            selectedCourse +
            " is " +
            selectedRating.value
        );
  
        // Clear the form
        evaluationForm.reset();
      } else {
        // Display an alert if either a course or a rating is missing
        alert("Please select a course and provide a rating.");
      }
    });
  });


// Populate courses and child names when the page is loaded
window.onload = function () {
    setInitialStylesheet();
    // Set the initial icon based on the current stylesheet
    var currentStyleSheet = document.getElementById('stylesheet').getAttribute('href');
    var icon = document.getElementById('icon');
    if (currentStyleSheet === 'Style.css') {
        icon.classList.add('fa-moon');
    } else {
        icon.classList.add('fa-sun');
    }

    loadChildren();
    loadChildNames();
    updateCourses();
    populateFilters() ;
};
