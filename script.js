const fileinput = document.getElementById('fileinput');
const audioElement = document.getElementById('audio')


fileinput.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContent = e.target.result
            const Cloneaudio = audioElement.cloneNode()
            Cloneaudio.controls = true;
            Cloneaudio.src = fileContent
            
            
            document.body.appendChild(Cloneaudio)
        }
         
       reader.readAsDataURL(file)
    }
});