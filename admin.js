// Function to generate a unique ID
function generateUniqueId() {
    return 'event-' + Date.now(); // Generates a unique ID using current timestamp
}

// Event listener for the form submission
document.getElementById('create-event-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Retrieve form data
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const eventDescription = document.getElementById('event-description').value;
    const eventCapacity = document.getElementById('event-capacity').value;

    // Generate a unique ID for the event
    const eventId = generateUniqueId();

    // Create an event object
    const newEvent = {
        id: eventId,
        name: eventName,
        date: eventDate,
        location: eventLocation,
        description: eventDescription,
        capacity: parseInt(eventCapacity, 10),
        remainingSeats: parseInt(eventCapacity, 10) // Initialize remaining seats
    };

    // Save the event to localStorage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));

    // Display a success message and reset the form
    alert('Event created successfully!');
    document.getElementById('create-event-form').reset();
});
