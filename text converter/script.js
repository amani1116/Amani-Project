let speech= new SpeechSynthesisUtterance();
let select=document.querySelector("select");
let voices=[];
window.speechSynthesis.onvoiceschanged=()=>{
  voices=window.speechSynthesis.getVoices();
  speech.voice=voices[0];
  voices.forEach((voice , i) => (select.options[i] = new option(voice.name,i))); 
};
select.addEventListener("change",()=>{
    speech.voice=voices[select.value];
})
function populatevoices(){
    voices=speechSynthesis.getVoices();
    for(let i=0;i<voices.length;i++){
        let option=document.createElement("option");
        option.text=voices[i].name + '('+ voices[i].lang +')';
        option.value=i;
        select.appendChild(option);
    }
}
populatevoices();
speechSynthesis.onvoiceschanged=populatevoices;
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
.speech.value;
speech.voice=voices[select.value];
speechSynthesis.speak(speech);

