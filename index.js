document.addEventListener("DOMContentLoaded", () => {
  // Création d'une function asynchrone
  async function callApi() {
    const url = "data.json";
    const fetcher = await fetch(url); // Récupération du fichier JSON
    const json = await fetcher.json(); // Conversion des éléments du fichier JSON
    console.log(json);

    // Intégration des statuts via le fichier JSON
    const workStatus = document.getElementById("work");
    const playStatus = document.getElementById("play");
    const studyStatus = document.getElementById("study");
    const exerciseStatus = document.getElementById("exercise");
    const socialStatus = document.getElementById("social");
    const selfcareStatus = document.getElementById("self-care");

    // Récupération de tous les éléments avec la classe .title, .hours, et .pastTime
    const titles = document.querySelectorAll(".title");
    const hours = document.querySelectorAll(".hours");
    const pastTimes = document.querySelectorAll(".pastTime");
    const verify = null;

    // Vérification que le nombre de titres correspond au nombre d'éléments dans le JSON

    const daily = document.getElementById('daily');
    daily.addEventListener('click',(e)=>{
      if (
        titles.length === json.length &&
        hours.length === json.length &&
        pastTimes.length === json.length
      ) {
        titles.forEach((titleElement, index) => {
          titleElement.textContent = json[index].title;
          hours[index].textContent = `${json[index].timeframes.daily.current}hrs`;
          pastTimes[
            index
          ].textContent = `Previous - ${json[index].timeframes.daily.previous}hrs`; // Mise à jour des heures précédentes
        });
      } else {
        console.error(
          "Le nombre d'éléments dans le DOM ne correspond pas au nombre d'éléments dans le JSON"
        );
      }
    })

    // Modification des données côté client lors du click sur Weekly
    const weekly = document.getElementById("weekly");
    console.log(weekly);
    weekly.addEventListener("click", (e) => {
      // Ajout d'une subrillance lors du click sur ce filtre
      if (e.target.style.color === "white") {
        e.target.style.color = "";
      } else {
        e.target.style.color = "white";
      }

      if (
        titles.length === json.length &&
        hours.length === json.length &&
        pastTimes.length === json.length
      ) {
        hours.forEach((hourElement, index) => {
          hourElement.textContent = `${json[index].timeframes.weekly.current}hrs`;
          pastTimes[
            index
          ].textContent = `Previous - ${json[index].timeframes.weekly.previous}hrs`;
        });
      }
    });

    // Modification des données côtés clients pour Monthly
    const monthly = document.getElementById("monthly");
    monthly.addEventListener("click", (e) => {
      // Ajout d'une surbrillance lorsqu'on est sur la catégorie en question
      if (e.target.style.color === "white") {
        e.target.style.color = "";
      } else {
        e.target.style.color = "white";
      }

      if (
        titles.length === json.length &&
        hours.length === json.length &&
        pastTimes.length === json.length
      ) {
        hours.forEach((hourElement, index) => {
          hourElement.textContent = `${json[index].timeframes.monthly.current}hrs`;
          pastTimes[
            index
          ].textContent = `Previous - ${json[index].timeframes.monthly.previous}hrs`;
        });
      }
    });
  }
  callApi();
});
