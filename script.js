function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
// Script para gerar o gráfico
const ctx = document.getElementById('cyberbullyingChart').getContext('2d');
const cyberbullyingChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
        labels: ['Victimization', 'Perpetration', 'Witnessing'], // Labels do gráfico
        datasets: [{
            label: 'Número de Casos',
            data: [12, 19, 8], // Dados do gráfico (substitua pelos dados reais)
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Inicia o eixo Y em 0
            }
        }
    }
});
