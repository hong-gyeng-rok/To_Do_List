document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true
  });
  calendar.render();
});

var calendar = new FullCalendar.Calendar(calendarEl, {
  themeSystem: 'bootstrap5',

  // header: {
  //   left: 'prevYear,prev,next,nextYear today',
  //   center: 'title'
  // }
});