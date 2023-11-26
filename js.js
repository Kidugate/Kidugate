

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
      image: "Images/Robot.png",
      rate: 5,
      description: "Learn the fundamentals of robotics and programming a robot.",
      timeSlot: "Mondays and Wednesdays, 3:00 PM - 4:30 PM",
      currentTutor: "T.Mohammed",
      objectives: ["Understand basic robotics principles", "Program a robot to perform tasks"]
  },
  {
      name: "HTML",
      tutor: "T.Maha",
      prerequisites: "UX",
      image: "Images/html5.png",
      rate: 4,
      description: "Introduction to HTML and web development.",
      timeSlot: "Tuesdays and Thursdays, 2:00 PM - 3:30 PM",
      currentTutor: "T.Maha",
      objectives: ["Create web pages using HTML", "Understand web development concepts"]
  },
  {
      name: "Scratch",
      tutor: "T.Maha",
      prerequisites: "none",
      image: "Images/scratch.png",
      rate: 3,
      description: "Learn programming concepts through visual programming language Scratch.",
      timeSlot: "Wednesdays and Fridays, 4:00 PM - 5:30 PM",
      currentTutor: "T.Maha",
      objectives: ["Understand basic programming concepts", "Create interactive projects using Scratch"]
  },
  {
      name: "Java",
      tutor: "T.Nasser",
      prerequisites: "python",
      image: "Images/java.png",
      rate: 5,
      description: "Java programming for beginners.",
      timeSlot: "Mondays and Thursdays, 4:30 PM - 6:00 PM",
      currentTutor: "T.Nasser",
      objectives: ["Learn Java syntax and programming fundamentals", "Develop simple Java applications"]
  },
  {
      name: "C++",
      tutor: "T.Nasser",
      prerequisites: "Java",
      image: "Images/c-logo.png",
      rate: 4,
      description: "Advanced programming with C++.",
      timeSlot: "Tuesdays and Fridays, 3:30 PM - 5:00 PM",
      currentTutor: "T.Nasser",
      objectives: ["Explore advanced C++ features", "Build complex applications with C++"]
  },
  {
      name: "Drone",
      tutor: "T.Mohammed",
      prerequisites: "robot",
      image: "Images/drone.png",
      rate: 4,
      description: "Introduction to drone technology and programming.",
      timeSlot: "Thursdays and Saturdays, 2:30 PM - 4:00 PM",
      currentTutor: "T.Mohammed",
      objectives: ["Understand drone technology", "Program a drone for specific tasks"]
  },
  {
      name: "Python",
      tutor: "T.Sara",
      prerequisites: "scratch",
      image: "Images/python.png",
      rate: 5,
      description: "Python programming for beginners.",
      timeSlot: "Mondays and Wednesdays, 5:30 PM - 7:00 PM",
      currentTutor: "T.Sara",
      objectives: ["Learn Python syntax and programming fundamentals", "Develop simple Python applications"]
  },
  {
      name: "Unity",
      tutor: "T.Faris",
      prerequisites: "C++",
      image: "Images/unity.png",
      rate: 3,
      description: "Introduction to game development with Unity.",
      timeSlot: "Tuesdays and Thursdays, 6:00 PM - 7:30 PM",
      currentTutor: "T.Faris",
      objectives: ["Understand Unity game development environment", "Create basic 2D and 3D games"]
  },
  {
      name: "UX",
      tutor: "T.Maha",
      prerequisites: "none",
      image: "Images/UX.png",
      rate: 4,
      description: "User Experience (UX) design principles.",
      timeSlot: "Wednesdays and Fridays, 5:00 PM - 6:30 PM",
      currentTutor: "T.Maha",
      objectives: ["Understand UX design principles", "Create user-friendly interfaces"]
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
        '"> ' + '<img src='+course.image+' alt=course width=50 height=50>'+course.name +
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
  document.addEventListener("DOMContentLoaded", function () {
    // Other code...

    // Function to dynamically load courses
    function loadCourses() {
        var bigCoursesContainer = document.querySelector('.Bigcourses-container');

        // Clear existing content in the bigCoursesContainer
        bigCoursesContainer.innerHTML = '';

        // Iterate through each course in coursesArray
        coursesArray.forEach(function (course) {
            // Create elements for each course
            var courseContainer = document.createElement('div');
            courseContainer.classList.add('courses-container');

            var courseItem = document.createElement('div');
            courseItem.classList.add('course');

            var img = document.createElement('img');
            img.src = course.image;
            img.alt = course.name;
            img.width = 80;
            img.height = 80;

            var h2 = document.createElement('h2');
            h2.textContent = course.name;

            var rate = document.createElement('p');
            rate.innerHTML = 'Rate';
            for (let i = 0; i < course.rate; i++) {
                var star = document.createElement('span');
                star.classList.add('fa', 'fa-star', 'checked');
                rate.appendChild(star);
            }

            var courseDetails = document.createElement('div');
            courseDetails.classList.add('course-details');

            var description = document.createElement('h3');
            description.textContent = 'Course Description:';
            var descriptionText = document.createElement('p');
            descriptionText.textContent = course.description;

            var timeSlot = document.createElement('h3');
            timeSlot.textContent = 'Time Slot:';
            var timeSlotText = document.createElement('p');
            timeSlotText.textContent = course.timeSlot;

            var currentTutor = document.createElement('h3');
            currentTutor.textContent = 'Current Tutor:';
            var currentTutorText = document.createElement('p');
            currentTutorText.textContent = course.currentTutor;

            var objectives = document.createElement('h3');
            objectives.textContent = 'Expected Objectives:';
            var objectivesList = document.createElement('ul');
            course.objectives.forEach(function (objective) {
                var li = document.createElement('li');
                li.textContent = objective;
                objectivesList.appendChild(li);
            });

            // Append elements to the courseDetails
            description.appendChild(descriptionText);
            timeSlot.appendChild(timeSlotText);
            currentTutor.appendChild(currentTutorText);
            objectives.appendChild(objectivesList);

            courseDetails.appendChild(description);
            courseDetails.appendChild(timeSlot);
            courseDetails.appendChild(currentTutor);
            courseDetails.appendChild(objectives);

            // Append elements to the courseItem
            courseItem.appendChild(img);
            courseItem.appendChild(h2);
            courseItem.appendChild(rate);
            courseItem.appendChild(courseDetails);

            // Append courseItem to the courseContainer
            courseContainer.appendChild(courseItem);

            // Append courseContainer to the bigCoursesContainer
            bigCoursesContainer.appendChild(courseContainer);
        });
    }

    // Call the loadCourses function when the page is loaded
    loadCourses();
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
    loadCourses() 
};
