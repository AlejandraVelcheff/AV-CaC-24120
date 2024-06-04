function insertarCard(lugar, i, lugares) {
    const card = crearCard(lugar);
    controlCupo(card);
    renderizarCard(card);
  }
  
  function crearCard(lugar) {
    const divCard =document.createElement('div');
    const img = document.createElement('img');
    
    divCard.classList.add('card');
  
    // desestructuración de array
    // const {nombre, destino, cupo, urlImg}  =   lugar;
    const nombre = lugar.nombre;
    const cupo = lugar.cupo;
    const destino = lugar.destino;
    const urlImg = lugar.urlImg;
    
    divCard.innerHTML = `
       <img src=${lugar.urlImg}/> 
       <h2>${nombre}</h2>
       <p>Destino: ${destino}</p>
       <p>Cupo: ${cupo}</p>`;
  
    return divCard;
  }
  
  function controlCupo(card) {
    console.log();
    if(obtenerCupo(card) < 10){
      card.classList.add('pocos-lugares')
    }
  }

    function obtenerCupo(card){
    let parrafos = card.querySelectorAll('p');
    let parrafoCupo = parrafos[1];
    let contenidoParrafo = parrafoCupo.textContent;
    let cupoValor = contenidoParrafo.split(':')[1];
      return parseInt(cupoValor);
  }

    
  function renderizarCard(card){
    const container = document.querySelector('#container');
    container.appendChild(card);
  }