const d = document;
export default function countdown(id,limitDate,finalMessage){
const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
            limitTime = countdownDate-now,
            days = Math.floor(limitTime/ (1000*60*60*24)),
            hours = '0'+ Math.floor(limitTime%(1000*60*60*24)/(1000*60*60)),
            minutes = '0'+ Math.floor(limitTime%(1000*60*60)/(1000*60)),
            seconds = '0'+ Math.floor(limitTime%(1000*60)/(1000));

            $countdown.innerHTML = `<h3> Faltan: ${days} dias ${hours.slice(-2)} Horas ${minutes.slice(-2)} minutos ${seconds.slice(-2)} Segundos </h3>`;
        console.log(countdownDate);

        if(limitTime<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        console.log(countdownDate);
        }

    },1000)
}