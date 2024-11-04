let votes = [0, 0, 0, 0, 0];

const parties = ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"];

const colors = ["#ff6384", "#36a2eb", "#ffce56", "#a866ff", "#4bc0c0"];

const ctx = document.getElementById("pieChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: parties,
    datasets: [{
      data: votes,
      backgroundColor: colors
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  }
});

function vote(partyIndex) {
  votes[partyIndex]++;
  updateChart();
}
function resetVotes() {
  votes = [0, 0, 0, 0, 0];
  updateChart();
}
function updateChart() {
  chart.data.datasets[0].data = votes;
  chart.update();
}
