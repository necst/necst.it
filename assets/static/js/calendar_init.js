$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDVm5W15cbN5_O0oKOgqLQpJyl-hmQoR3o',
        events: {
            googleCalendarId: 'ir995hjijtv88ktfcfaf0s12gk@group.calendar.google.com'
        },
        // aspectRatio: 1.8
        height: "auto",
        eventLimit: 4,
        eventClick: function(event) {
		    // opens events in a popup window
		    window.open(event.url, 'gcalevent', 'width=700,height=600');
		    return false;
		},
    });
});