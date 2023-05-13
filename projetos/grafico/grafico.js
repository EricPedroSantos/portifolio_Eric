// Dados iniciais
var categorias = [];
var valores = [];

// Obter referências aos elementos do formulário e da tabela
var form = document.getElementById('expenseForm');
var categoryInput = document.getElementById('category');
var amountInput = document.getElementById('amount');
var tableBody = document.querySelector('#expenseTable tbody');
var totalExpenses = document.getElementById('totalExpenses');

// Função para adicionar uma nova despesa
function addExpense(event) {
    event.preventDefault(); // Impede o envio do formulário

    var categoria = categoryInput.value;
    var valor = parseInt(amountInput.value);

    categorias.push(categoria);
    valores.push(valor);

    updateTable(); // Atualiza a tabela com os novos dados
    updateChart(); // Atualiza o gráfico com os novos dados

    categoryInput.value = ''; // Limpa o campo de categoria
    amountInput.value = ''; // Limpa o campo de valor
}

// Atualiza a tabela com os dados das despesas
function updateTable() {
    tableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela

    for (var i = 0; i < categorias.length; i++) {
        var row = document.createElement('tr');
        var categoryCell = document.createElement('td');
        var valueCell = document.createElement('td');

        categoryCell.textContent = categorias[i];
        valueCell.textContent = valores[i];

        row.appendChild(categoryCell);
        row.appendChild(valueCell);

        tableBody.appendChild(row);
    }
}

// Função para calcular o total das despesas
function calculateTotal() {
    var total = valores.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    totalExpenses.textContent = 'Total: R$ ' + total.toFixed(2);
}
// Atualiza o gráfico com os novos dados e recalcula o total
function updateChart() {
  myChart.data.labels = categorias;
  myChart.data.datasets[0].data = valores;
  myChart.update();

  calculateTotal();
}

// Adicionar um ouvinte de evento para o envio do formulário
form.addEventListener('submit', addExpense);

// Criar um contexto para o gráfico
var ctx = document.getElementById('myChart').getContext('2d');

// Criar o gráfico usando Chart.js
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: categorias,
      datasets: [{
          label: 'Despesas Domésticas',
          data: valores,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      }]
  },
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

calculateTotal();