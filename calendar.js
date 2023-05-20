

document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('calendar');

      var calendar = new FullCalendar.Calendar(calendarEl, {
        // Calendar options and settings
        // You can customize various options such as events, header, views, etc.
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        events: [
          // Event data
          // You can provide your own events data in the specified format
          // Example:
          {
            start: '2023-05-29',
            end: '2023-06-02',
            display: 'background'
          },
          {
            title: 'Business days',
            start: '2023-05-29',
            end: '2023-06-02',
          },


          {
            start: '2023-05-01',
            end: '2023-05-05',
            display: 'background'
          },
          {
            title: 'Business days',
            start: '2023-05-01',
            end: '2023-05-05',
          },


          {
            start: '2023-05-08',
            end: '2023-05-12',
            display: 'background'
          },
          {
            title: 'Business days',
            start: '2023-05-08',
            end: '2023-05-12',
          },


          {
            start: '2023-05-15',
            end: '2023-05-19',
            display: 'background'
          },
          {
            title: 'Business days',
            start: '2023-05-15',
            end: '2023-05-19',
          },


          {
            start: '2023-05-22',
            end: '2023-05-26',
            display: 'background',
          },
          {
            title: 'Business days',
            start: '2023-05-22',
            end: '2023-05-26',
          },


          {
            start: '2023-05-26',
            end: '2023-05-26',
            display: 'background',
            backgroundColor: 'red',
          },
          {
            title: 'Oxford exam',
            start: '2023-05-26',
            end: '2023-05-26',
            backgroundColor: 'red',
          },

          {
            start: '2023-06-02',
            end: '2023-06-02',
            display: 'background',
            backgroundColor: 'purple',
          },
          {
            title: 'End of course',
            start: '2023-06-02',
            end: '2023-06-02',
            color: 'purple'
          }
        ],
  });

      calendar.render();
    });
