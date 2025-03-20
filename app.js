import config from "./config.js";

const api=config.API_KEY;

async function fetchData(api){

  document.querySelector('.image').addEventListener('click',async ()=>{
    let city=document.querySelector('.search input').value;

    try{
        const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`).then((response)=>{
          return response.json();
        });


        document.querySelector('.city-weather').classList.remove('js-display');
        document.querySelector('.footer').classList.remove('js-display');

        const temp=Math.round(Number(data.main.temp)-273).toFixed(1);
        document.querySelector('.temperature').innerHTML=temp+"° c";
        document.querySelector('.city').innerHTML=city;

        const wind=Number(data.wind.speed);
        document.querySelector('.details').innerHTML=wind+"km/h";

        const humidity=Number(data.main.humidity);
        document.querySelector('.percentage').innerHTML=humidity+"%";

        const sky=data.weather[0].main;

        let weatherIcon =document.querySelector('.weather-image')

        switch(sky){

          case 'Mist':weatherIcon.src='images/mist.png';
                      break;
          case 'Clouds':weatherIcon.src='images/clouds.png';
                      break;
          case 'Rain':weatherIcon.src='images/rain.png';
                      break;  
          case 'Snow':weatherIcon.src='images/snow.png';
                      break;
          case 'Clear':weatherIcon.src='images/clear.png';
                      break;    
          case 'Drizzle':weatherIcon.src='images/Drizzle.png';
                      break;
        }
        setTimeout(()=>{
          document.querySelector('.city-weather').classList.add('js-display');
          document.querySelector('.footer').classList.add('js-display');
          document.querySelector('.search input').value='';
        },10000);
    }
    catch{
      alert("Please enter valid city name");
      document.querySelector('.city-weather').classList.add('js-display');
      document.querySelector('.footer').classList.add('js-display');
      document.querySelector('.search input').value='';
      }
    }); 
}
fetchData(api);
