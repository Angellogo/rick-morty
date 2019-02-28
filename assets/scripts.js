//Elementos HTML
const cardss = document.getElementById("cardss");
// const btnAlive = document.getElementById("alive").onclick("funcBtn");

// API
const apiUrl = "https://rickandmortyapi.com/api/character";

// Prueba de emparejación de contenidos
const deadLife = document.querySelector ("#impDeadLife");


fetch(apiUrl)
	.then(function(response){
		console.log(response);
		return response.json();
	})
	.then(function(respJson){
		const personajes = respJson.results;
		impPersonajes(personajes);

	})
	.catch(function(error){
		console.log(error);
	})


  

// function funcBtn (){
// 	btnAlive.classList.add("opacity");
// }





//Prueba de emparejacion de contenido
const impStatus = deadLife.value;

	let impDeadLife;
	if(deadLife == "Alive"){
		impDeadLife = "tabla-txt.png";
	} else if (impDeadLife == "Dead"){
		impDeadLife = "2";
	} else {
		impDeadLife = "3";
	};



function impPersonajes(personajes){
	for(let character of personajes){
		cardss.innerHTML +=
		`
		<div class="main-box">
		<p>
		<img src="${character.image}"><br>
		<div class="content-main-box">
		<div class="name-tag">${character.name}</div><br>
		<b>STATUS:</b> ${character.status} ${impDeadLife}<br>
		<!--EPISODIO: ${character.image.episo}<br>-->
		<b>ESPECIE:</b> ${character.species}<br>
		<b>GENERO:</b> ${character.gender}<br>
		<b>Lugar</b> ${character.location.name}
		</div>
		</p>
		</div>
		`
	}
}



