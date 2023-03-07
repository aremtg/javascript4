var edad1, edad2, edad3, persona1, persona2, persona3;
function pide(event){
    event.preventDefault();
    persona1  = prompt("1 persona");
    edad1 = parseInt(prompt("edad"));

    persona2  = prompt("2 persona");
    edad2 = parseInt(prompt("edad"));

    persona3  = prompt("3 persona");
    edad3 = parseInt(prompt("edad"));

// selecciono espacios en la tabla
    var espacioNombre1 = document.querySelector("#espacioNombre1");
    var espacioEdad1 = document.querySelector("#espacioEdad1");

    var espacioNombre2 = document.querySelector("#espacioNombre2");
    var espacioEdad2 = document.querySelector("#espacioEdad2");

    var espacioNombre3 = document.querySelector("#espacioNombre3");
    var espacioEdad3 = document.querySelector("#espacioEdad3");
    
        espacioNombre1.textContent = persona1;
            espacioEdad1.textContent = edad1;

        espacioNombre2.textContent = persona2 ;
            espacioEdad2.textContent = edad2;

        espacioNombre3.textContent = persona3 ;
            espacioEdad3.textContent = edad3;
}


function mayor(event){
    event.preventDefault();

    var resultado = document.querySelector("#resultado");
    var resultado2 = document.querySelector("#resultado2");

    if(edad1 > edad2 && edad1 > edad3){
        resultado.textContent= persona1 + ` tiene ` + edad1 +  ` años` + ` ES MAYOR QUE LOS DEMAS`;
    }
    if(edad2 > edad1 && edad2 > edad3){
        resultado.textContent= persona2 + ` tiene ` + edad2 +  ` años` + ` ES MAYOR QUE LOS DEMAS`;
    }
    if(edad3 > edad2 && edad3 > edad1){
        resultado.textContent= persona3 + ` tiene ` + edad3 +  ` años` + ` ES MAYOR QUE LOS DEMAS`;
    }
    if(edad1 == edad2 && edad2 == edad3) {
        resultado.textContent = "Las tres personas tienen la misma edad";
      }
}

// segundooooooooooooooooo

function generar(event){
    event.preventDefault()

    let n1 = document.querySelector("#n1");
    let n2 = document.querySelector("#n2");
    let n3 = document.querySelector("#n3");

    var resultado = Math.floor(Math.random()*5) + 1;

    var resultado2 = Math.floor(Math.random()*5) + 1;
    while (resultado2 === resultado) {
        resultado2 = Math.floor(Math.random()*5) + 1;
    }

    var resultado3 = Math.floor(Math.random()*5) + 1;
    while (resultado3 === resultado || resultado3 === resultado2) {
        resultado3 = Math.floor(Math.random()*5) + 1;
    }

    console.log(resultado,resultado2,resultado3)

    n1.value = resultado;
    n2.value = resultado2;  
    n3.value = resultado3;
}
