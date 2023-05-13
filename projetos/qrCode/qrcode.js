const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const geradorBtn = document.getElementById('geradorBtn');
const downloadsBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
geradorBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadsBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadsBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadsBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});


function isEmptyInput(){
    qrText.value.length > 0 ? geradorQRCode() : alert("Digite se texto para transformar em QR code");;
}

function geradorQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark: "#000",
    });
}
