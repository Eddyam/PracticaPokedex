const fetchpokemon = () => {
    const pokeName = document.getElementById("pokeName"); //obtengo valor de input
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
   
    //promesa 
    fetch(url).then((res) => {         
        if(res.status != "200") {
            console.log(res);
            alert("Nombre de pokemon incorrecto.")
            imgDefault("./assets/pokebola.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        //obtengo informacion de la imagen.
        //console.log(data)
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeType = data.types[0].type.name;
        let pokeId = data.id;
        let nombreP = data.name;
        let pesoPoke = data.weight;
        let alturaPoke = data.height;
        //estadisticas
        let vidaPoke = data.stats[0].base_stat;
        let ataquePoke = data.stats[1].base_stat;
        let defensaPoke = data.stats[2].base_stat;
        let ataqueEspecialpoke = data.stats[3].base_stat;
        let defensaEspecialpoke = data.stats[4].base_stat;
        let velocidadPoke = data.stats[5].base_stat;
        
        pokeImage(pokeImg, pokeType, pokeId, nombreP,pesoPoke, alturaPoke, vidaPoke, ataquePoke, defensaPoke, ataqueEspecialpoke, defensaEspecialpoke, velocidadPoke);
        obtenerDescripcion(pokeId);
    })
}

//Funcion para obtener breve descripcion de pokemon
const obtenerDescripcion = (id) => {
 
    //console.log("No de especie:" + id);
    let especies = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    fetch(especies).then((res) => {
        if(res.status != "200") {
            console.log(res);            
        }
        else {
            return res.json();
        }
    }).then((data) => {

        let texto = data.flavor_text_entries[26].flavor_text; //Texto en espanol
        let habitat = data.habitat.name;


        //console.log(data);
        //console.log("Color:" + data.color.name);
        pokeDescripcion(texto, habitat);
        //console.log(data.flavor_text_entries[26].language.name)
        //console.log(data.flavor_text_entries[26].flavor_text)

    })
}

const imgDefault = (url) => {
    const pokeImg = document.getElementById("img-pokemon");
    pokeImg.src = url;
}

//Mostrar elementos en el HTML
const pokeImage = (url, pokeType, pokeId, nombreP,pesoPoke, alturaPoke, vidaPoke, ataquePoke, defensaPoke, ataqueEspecialpoke, defensaEspecialpoke, velocidadPoke) => {
    const pokeImg = document.getElementById("img-pokemon");
    const pokeTipo = document.getElementById("tipo");
    const numero = document.getElementById("numero");
    const nombre = document.getElementById("nombre");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    //Estadisticas
    const vida = document.getElementById("HP");
    const ataque = document.getElementById("Ataque");
    const defensa = document.getElementById("Defensa");
    const ataqueEspecial = document.getElementById("ataque-especial");
    const defensaEspecial = document.getElementById("defensa-especial");
    const velocidad = document.getElementById("Velocidad");
    

    nombre.innerHTML = nombreP;
    numero.innerHTML = pokeId;
    pokeTipo.innerHTML = pokeType;
    pokeImg.src = url;
    peso.innerHTML = pesoPoke;
    altura.innerHTML = alturaPoke;
    //Estadisticas
    vida.innerHTML = vidaPoke;
    ataque.innerHTML = ataquePoke;
    defensa.innerHTML = defensaPoke;
    ataqueEspecial.innerHTML = ataqueEspecialpoke;
    defensaEspecial.innerHTML = defensaEspecialpoke;
    velocidad.innerHTML = velocidadPoke;
}

//Muestra la informacion de la descripcion en el HTML
const pokeDescripcion = (texto, habitat) => {
    const contenedor = document.getElementById("contenedorDescripcion");
    const habit = document.getElementById("habitat")
    const descripcion = document.createElement('p');
    
    
    let tLen = texto.length;
    let text = "<p>" + texto + "<p>";
   
   // console.log(text)
    contenedor.innerHTML = text;
    habit.innerHTML = habitat; 
}


// Listar Pokemons

/* const listarPokemon = () => {
    
    const contenedor = document.getElementById("contenedorDescripcion");
    let lista = 'https://pokeapi.co/api/v2/pokemon/?limit=500';

    fetch(lista).then((res) => {
        if(res.status != "200") {            
            console.log(res);            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log("Lista de okemons")
        console.log(data);

    })
}


const despliegaLista = (texto, habitat) => {
    
    const contenedor = document.getElementById("contenedorDescripcion");
    const habit = document.getElementById("habitat")
    const descripcion = document.createElement('p');
    
    
    let tLen = texto.length;
    let text = "<p>" + texto + "<p>";
   
    console.log(text)
    contenedor.innerHTML = text;
    habit.innerHTML = habitat; 
}
 */


/*-----------------------------------------------*/
const fetchpokemon2 = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   
    //promesa 
    fetch(url).then((res) => {         
        if(res.status != "200") {
            console.log(res);
            pokeImage("./pokebola.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        //obtengo informacion de la imagen.
        //console.log(data)
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeType = data.types[0].type.name;
        let pokeId = data.id;
        let nombreP = data.name;
        let pesoPoke = data.weight;
        let alturaPoke = data.height;
        //estadisticas
        let vidaPoke = data.stats[0].base_stat;
        let ataquePoke = data.stats[1].base_stat;
        let defensaPoke = data.stats[2].base_stat;
        let ataqueEspecialpoke = data.stats[3].base_stat;
        let defensaEspecialpoke = data.stats[4].base_stat;
        let velocidadPoke = data.stats[5].base_stat;
        
        pokeImage(pokeImg, pokeType, pokeId, nombreP,pesoPoke, alturaPoke, vidaPoke, ataquePoke, defensaPoke, ataqueEspecialpoke, defensaEspecialpoke, velocidadPoke);
        obtenerDescripcion(pokeId);
    })
}
/*--------------------------------------------*/
const offset = 1;
const limit = 151; //648

//Obtiene la lista de pokemons
const listarPokemon = (id) => {
    const contenedor = document.getElementById("contenedorDescripcion");
    let lista = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(lista).then((res) => {
        if(res.status != "200") {            
            console.log(res);            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        //console.log("Lista de okemons")
        //console.log(data);
        crealista(data);
    })
}


function obtenerPokemons(offset, limit) {
    for(let i = offset; i <= offset + limit; i++) {
        listarPokemon(i);
    }
}

//Muestra la lista en HTML
function crealista(datos) {
    let id = datos.id;
    const contenedor = document.getElementById("lista-pokemon");
    const tarjeta = document.createElement('div');
    const descripcion = document.createElement('a');
    

    tarjeta.classList.add('tarjeta');
    
    descripcion.classList.add('nombre');
    descripcion.setAttribute('href', `javascript:fetchpokemon2(${id})`);
    descripcion.textContent = datos.name;

    const imagen = document.createElement('img');
    imagen.src = datos.sprites.front_default;
    imagen.classList.add('poke-icon');

    
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(descripcion);

    contenedor.appendChild(tarjeta);
   // console.log(datos.name)
    
}


obtenerPokemons(offset, limit);


// const imprimir = () => {
//     const pokeName = document.getElementById("pokeName"); //obtengo valor de input
//     let pockeInput = pokeName.value;
//     console.log("Hola" + pockeInput);
// }

//fetchpokemon();