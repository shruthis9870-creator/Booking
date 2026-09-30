function bookVenue() {

    // Get the name entered by the user
    let name = document.getElementById("name").value;

    // Get the email entered by the user
    let email = document.getElementById("email").value;

    // Get the selected event
    let event = document.getElementById("event").value;

    // Get the selected date
    let date = document.getElementById("date").value;

    // Get the number of guests
    let guests = document.getElementById("guests").value;


    // Check whether all fields are filled
    if (
        name === "" ||
        email === "" ||
        event === "Select Event" ||
        date === "" ||
        guests === ""
    ) {

        alert("Please fill all the details before booking.");

        return;
    }


    // Show successful booking message
    alert(
        "Venue booked successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Event: " + event + "\n" +
        "Date: " + date + "\n" +
        "Guests: " + guests
    );

}