
function submitProfile(evt) {
    evt.preventDefault();
    
    $.post("/profile",
        $('#profile-form').serialize(),
        function (result) {
            $('#profile').append("<p>" + "Name: " + result.fullname + "</p>"
            	+ "<p>" + "Age: " + result.age + "</p>"
            	+ "<p>" + "Occupation: " + result.occupation + "</p>"
            	+ "<p>" + "Salary: " + result.salary + "</p>"
            	+ "<p>" + "Education: " + result.education + "</p>"
            	+ "<p>" + "State: " + result.state + "</p>"
            	+ "<p>" + "City: " + result.city + "</p>"
            	+ "<p>" + "Gardening? " + result.garden + "</p>"
            	+ "<p>" + "TV Habits: " + result.tv + "</p>");
        }
    );
}

$("#profile-form").on('submit', submitProfile);
