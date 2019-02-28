//Elementos HTML
const cardss = document.getElementById("cardss");
const cardss2 = document.getElementById("cardss2");
const cardss3 = document.getElementById("cardss3");

// const btnAlive = document.getElementById("alive").onclick("funcBtn");

// API
const apiUrl = "https://rickandmortyapi.com/api/character";

// Prueba de emparejación de contenidos
// const deadLife = document.querySelector ("#impDeadLife");


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
// const impStatus = deadLife.value;

// 	let impDeadLife;
// 	if(deadLife == "Alive"){
// 		impDeadLife = "tabla-txt.png";
// 	} else if (impDeadLife == "Dead"){
// 		impDeadLife = "2";
// 	} else {
// 		impDeadLife = "3";
// 	};



function impPersonajes(personajes){
	for(let character of personajes){
		if(character.status == "Alive"){
			cardss.innerHTML +=
		`
		<div class="main-box">
		<p>
		<img src="${character.image}"><br>
		<div class="content-main-box">
		<div class="name-tag">${character.name}</div><br>
		<b>STATUS:</b> ${character.status}<br>
		<!--EPISODIO: ${character.image.episo}<br>-->
		<b>ESPECIE:</b> ${character.species}<br>
		<b>GENERO:</b> ${character.gender}<br>
		<b>Lugar</b> ${character.location.name}
		</div>
		</p>
		</div>
		`
	} else if (character.status == "Dead"){
		cardss2.innerHTML +=
		`
		<div class="main-box">
		<p>
		<img src="${character.image}"><br>
		<div class="content-main-box">
		<div class="name-tag">${character.name}</div><br>
		<b>STATUS:</b> ${character.status} <br>
		<!--<EPISODIO: ${character.image.episo}<br>-->
		<b>ESPECIE:</b> ${character.species}<br>
		<b>GENERO:</b> ${character.gender}<br>
		<b>Lugar</b> ${character.location.name}
		</div>
		</p>
		</div>
		`
	} else {
		cardss3.innerHTML +=
		`
		<div class="main-box">
		<p>
		<img src="${character.image}"><br>
		<div class="content-main-box">
		<div class="name-tag">${character.name}</div><br>
		<b>STATUS:</b> ${character.status} <br>
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
}







var tabsAction = document.querySelectorAll (".yeah ul li");

tabsAction.forEach(function(paneles, index){
	paneles.addEventListener("click",function(){
		var actionTab = document.querySelector('.cardss-gen[data-tab="' + this.dataset.tabsAction + '"]');
		console.log(actionTab);


		//remove
		document.querySelector(".cardss-gen.open").classList.remove("open");	
		document.querySelector(".yeah li.active").classList.remove("active");

		//Add
		actionTab.classList.add("open");
		this.classList.add("active");
	})
})


















