const generate = document.querySelector('#generate')
const userInput = document.querySelector('#inputBox')

const qrContainer = document.querySelector('#qrimage')

generate.addEventListener('click', ()=>{

    const url = userInput.value.trim();

    qrimage.innerHTML = '';

    if(url === ""){
        alert("Enter a valid URL");
        return;
    }
    QRCode.toCanvas(url, {width: 200}, function(error, canvas){
        if(error){
            console.error(error);
            alert("Something went wrong!")
            return;
        }
        qrimage.appendChild(canvas);
        const download = document.createElement('button')
        download.textContent = "Download QR Code";
        download.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'qr-code.png';
            link.href = canvas.toDataURL();
            link.click();
        });
        
     })

})