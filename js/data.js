window.document.addEventListener("DOMContentLoaded", () => {

  const ctx = document.getElementById('graphC02');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [65, 35],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgba(255, 99, 00,0)',
        ],
        borderWidth: 0,
        borderRadius: 100,
        borderJoinStyle: "round",
      }]
    },
  });

  // Graph mensuel  
  const graphMensuel = document.getElementById("graphMensuel");
  var months = [01,02,03,04,05,06,07,08,09,10,11,12];
  // For drawing the lines
  var africa = [86,114,106,106,107,111,133,221,783,2478];
  var asia = [282,350,411,502,635,809,947,1402,3700,5267];
  var europe = [168,170,178,190,203,276,408,547,675,734];
  var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
  var northAmerica = [6,3,2,2,7,26,82,172,312,433];

  var ctxMensuel = document.getElementById("graphMensuel");
  new Chart(ctxMensuel, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        { 
          data: africa,
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        },
        { 
          data: asia,
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        },
        { 
          data: europe,
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        },
        { 
          data: latinAmerica,
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        },
        { 
          data: northAmerica,
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  })

    // Graph Annuelle
    const graphAnnuelle = document.getElementById("graphAnnuelle");
    var months = [01,02,03,04,05,06,07,08,09,10,11,12];
    // For drawing the lines
    var africa = [86,114,106,106,107,111,133,221,783,2478];
    var asia = [282,350,411,502,635,809,947,1402,3700,5267];
    var europe = [168,170,178,190,203,276,408,547,675,734];
    var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
    var northAmerica = [6,3,2,2,7,26,82,172,312,433];
  
    var ctxAnnuelle = document.getElementById("graphAnnuelle");
    new Chart(ctxAnnuelle, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          { 
            data: africa,
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: asia,
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          },
          { 
            data: europe,
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: latinAmerica,
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: northAmerica,
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
      }
    })
})