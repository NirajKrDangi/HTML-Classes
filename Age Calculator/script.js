function calculateAge() {
    // Get the user's date of birth
    var dob = document.getElementById("dob").value;
    
    // Convert the date of birth to a Date object
    var dobDate = new Date(dob);
    
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the age
    var age = currentDate.getFullYear() - dobDate.getFullYear();
    
    // Check if the current month and day are before the birthday
    // if (currentDate.getMonth() < dobDate.getMonth() || 
    //     (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    //   age--;
    // }

    
    // Display the age
    document.getElementById("age").innerHTML = age;
  }

var x = new Date();
console.log(x.getFullYear());
console.log(currentDate);