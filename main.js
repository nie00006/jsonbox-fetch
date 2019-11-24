document.addEventListener("DOMContentLoaded", init);

function init(){

    let url = "https://jsonbox.io/box_918974fe586b1658e507"

    fetch(url)
        .then(res => res.json())

        .then(result=>{
            console.log(result);

            document.querySelector('header').textContent = result[0].type;

            result[0].countries.forEach(item => {
                let country = document.createElement('p');
                let capital = document.createElement('p');
                let population = document.createElement('p');

                document.querySelector('main').appendChild(country);
                document.querySelector('main').appendChild(capital);
                document.querySelector('main').appendChild(population);


                country.textContent = item.country
                capital.textContent = item.capital
                population.textContent = item.population
            });
        })

}
