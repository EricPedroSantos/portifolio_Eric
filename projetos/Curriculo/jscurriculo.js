

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const nacionalidade = document.getElementById('Nacionalidade').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const endereco = document.getElementById('endereco').value;
    const qualificacao = document.getElementById('qualificacao').value;
    const education = document.getElementById('education').value;
    const experiencia = document.getElementById('experiencia').value;
    const disponibilidade = document.getElementById('Disponibilidade').value;

    doc.setFontSize(16);
    doc.text(20, 20, 'Currículo');
    
    doc.setFontSize(12);
    doc.text(20, 40, `${name}`);
    doc.text(20, 50, `${nacionalidade}`);
    doc.text(20, 60, `Email: ${email}`);
    doc.text(20, 70, `Telefone: ${phone}`);
    doc.text(20, 80, `Endereço: ${endereco}`);
    
    doc.setFontSize(14);
    doc.text(20, 100, 'Síntese de Qualificações:');
    doc.setFontSize(12);
    doc.text(20, 110, qualificacao);
    
    doc.setFontSize(14);
    doc.text(20, 130, 'Formação:');
    doc.setFontSize(12);
    doc.text(20, 140, education);

    doc.setFontSize(14);
    doc.text(20, 160, 'Experiência:');
    doc.setFontSize(12);
    doc.text(20, 170, experiencia);

    doc.setFontSize(14);
    doc.text(20, 190, 'Informações Adicionais:');
    doc.setFontSize(12);
    doc.text(20, 200, disponibilidade);
    
    doc.save('curriculo.pdf');
}

function clearForm() {
    document.getElementById('resumeForm').reset();
}