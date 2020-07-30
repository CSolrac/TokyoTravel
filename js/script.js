function buscar1(control) {

    var oC1 = document.getElementById(control);
    var oR1 = document.getElementById("resultado1");
    var oCont0 = document.getElementById("contenedor0");
    var oTit0 = document.getElementById("titulo0");
    var hayResultados=false;

    oR1.innerHTML = "";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            const oDatos1 = this.response;
            const oDatos2 = JSON.parse(oDatos1);
            const oLugares1 = oDatos2["lugaresTuristicos"];

            for (let lugar of oLugares1) {

                if (oC1.value.toLowerCase().trim()==lugar.nombre.toLowerCase().trim() || oC1.value.toLowerCase().trim()==lugar.ciudad.toLowerCase().trim() || oC1.value.toLowerCase().trim()==lugar.tipo.toLowerCase().trim() || oC1.value.toLowerCase().trim()==lugar.zona.toLowerCase().trim()){

                    hayResultados=true;

                    div0 = document.createElement('div');
                    div0.setAttribute('class', 'contenedor2-1');
                    oR1.appendChild(div0);

                    div1 = document.createElement('div');
                    div1.setAttribute('class', 'contenedor2-1-1');
                    div0.appendChild(div1);

                    div2 = document.createElement('div');
                    div2.setAttribute('class', 'contenedor2-1-1-1');
                    div1.appendChild(div2);

                    h2 = document.createElement('h2');
                    h2.textContent = lugar.nombre;
                    h2.setAttribute('class', 'nombre');
                    div2.appendChild(h2);

                    p = document.createElement('p');
                    p.textContent = lugar.tipo;
                    p.setAttribute('class', 'tipo');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = "Ciudad: ";
                    p.setAttribute('class', 'titulillos');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = lugar.ciudad;
                    p.setAttribute('class', 'texto1');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = "Zona: ";
                    p.setAttribute('class', 'titulillos');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = lugar.zona;
                    p.setAttribute('class', 'texto1');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = "Horario de apertura: ";
                    p.setAttribute('class', 'titulillos');
                    div2.appendChild(p);

                    p = document.createElement('p');
                    p.textContent = lugar.horario;
                    p.setAttribute('class', 'texto1');
                    div2.appendChild(p);

                    div1 = document.createElement('div');
                    div1.setAttribute('class', 'contenedor2-1-2');
                    div0.appendChild(div1);

                    img = document.createElement('img');
                    img.setAttribute("src", lugar.img);
                    img.setAttribute("alt", lugar.nombre);
                    img.setAttribute('class', 'imagen1');
                    div1.appendChild(img);

                }
            }
            if(hayResultados==true){
                /* Ocultar que no hay resultados */
                oCont0.classList.remove("visible");
                oCont0.classList.add("oculto");
            }
            else if(hayResultados==false){
                /* Limpiar el div resultado1 */
                oR1.innerHTML = "";
                /* Mostrar que no hay resultados */
                oCont0.classList.remove("oculto");
                oCont0.classList.add("visible");
            }
            /* Limpiar el campo de texto */
            oC1.value="";

        }

    };
    xhttp.open("GET", "json/bd1.json", true);
    xhttp.send();
}