$(document).ready(function() {
    $('#agenda').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDVm5W15cbN5_O0oKOgqLQpJyl-hmQoR3o',
        events: {
            googleCalendarId: 'ir995hjijtv88ktfcfaf0s12gk@group.calendar.google.com'
        },
        // aspectRatio: 1.8
        height: "auto",
        // eventLimit: 4,
        defaultView: "listFourDays",
        header: false,
        views: {
        	listFourDays: {
        		type: "list",
        		duration: { days: 7 },
        		// buttonText: "4 day"
        	}
        },
        eventClick: function(event) {
        	return false;
        },
    });
});