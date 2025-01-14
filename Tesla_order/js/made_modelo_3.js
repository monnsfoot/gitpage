


function color_carro(nombre_color_archivo) {
  let contenedor_color = document.getElementById("contenedor_carousel")
  let contenido = ''
  let active_slider = ''
  for (let x = 0; x < 5; x++) {
    active_slider = (x == 1) ? "active" : ""
    contenido += `
			<div class="carousel-item ${active_slider}">
                <img src="img/${nombre_color_archivo}_${x}.jpg" class="d-block w-100" alt="...">
			</div>
		`
  }
  contenedor_color.innerHTML = `
		<div id="slider_carros" class=" sticky-top carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              	<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="2" aria-label="Slide 3"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="3" aria-label="Slide 4"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              	${contenido}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#slider_carros" data-bs-slide="prev">
              	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slider_carros" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
              	<span class="visually-hidden">Next</span>
            </button>
		</div>
            
            `


  let nombre_color = document.getElementById("precio_color")
  switch (nombre_color_archivo) {

    case "Model_3_blanco":
      nombre_color.innerHTML = `
                  <h6>Pearl White Multi-Coat </h6>
                    <p> Included</p>
                  `
      break;
    case "Model_3_negro":
      nombre_color.innerHTML = `
                 <h6> Solid Black</h6>
                    <p> $1,000</p>
                  `
      break;
    case "Model_3_gris":
      nombre_color.innerHTML = `
                    <h6>Midnight Silver Metallic </h6>
                    <p> $1,000</p>
                  `
      break;
    case "Model_3_azul":
      nombre_color.innerHTML = `
                    <h6>Deep Blue Metallic </h6>
                    <p> $1,000</p>
                  `
      break;
    case "Model_3_rojo":
      nombre_color.innerHTML = `
                    <h6>Red Multi-Coat </h6>
                    <p> $2,000</p>
                      `
      break;
  }


}
color_carro('Model_3_blanco', true)


function info_motor0(informacion_motor) {
  let info_motor_traccion = document.getElementById("id_standar_range")
  let info_motor_alcance = document.getElementById("id_long_range")
  let info_motor_performamce = document.getElementById("id_performamce")
  let mensaje_2 = document.getElementById("mensaje_2")

  info_motor_traccion.innerHTML = ` $43,990  `
  info_motor_alcance.innerHTML = `  $49,990   `
  info_motor_performamce.innerHTML = `  $57,990   `
  mensaje_2.innerHTML = `
  <p>All prices are shown without potential incentives or gas savings of $0.
                         <a href="#"> Learn More </a></p>
  `
}
info_motor0(1, true)

function info_motor1() {
  let info_motor_traccion = document.getElementById("id_standar_range")
  let info_motor_alcance = document.getElementById("id_long_range")
  let info_motor_performamce = document.getElementById("id_performamce")
  let mensaje_2 = document.getElementById("mensaje_2")

  info_motor_traccion.innerHTML = ` $38,940*   `
  info_motor_alcance.innerHTML = `  $44,940*   `
  info_motor_performamce.innerHTML = `  $52,940   `
  mensaje_2.innerHTML = `
  <p>* Prices above include potential incentives and gas savings of $0.  
                         <a href="#"> Learn More </a></p>
  `
}

function info_vel_0(info_vel) {
  let = info_vel_motor_mi = document.getElementById("num_millas")
  let = info_vel_motor_mph = document.getElementById("num_mph")
  let = info_vel_motor_sec = document.getElementById("num_sec")
  let info_motor_mensaje = document.getElementById("idmensaje3")
  let info_fecha = document.getElementById("fecha_entrega")

  info_vel_motor_mi.innerHTML = `  262  `
  info_vel_motor_mph.innerHTML = `  140  `
  info_vel_motor_sec.innerHTML = `  5,3  `
  info_motor_mensaje.innerHTML = `  
  <div>
  </div>
  `
  info_fecha.innerHTML = `<p>Estimated delivery: April 2022</p>`

}

info_vel_0(1, true)

function info_vel_1(info_vel) {
  let = info_vel_motor_mi = document.getElementById("num_millas")
  let = info_vel_motor_mph = document.getElementById("num_mph")
  let = info_vel_motor_sec = document.getElementById("num_sec")
  let info_motor_mensaje = document.getElementById("idmensaje3")
  let info_fecha = document.getElementById("fecha_entrega")

  info_vel_motor_mi.innerHTML = `  353  `
  info_vel_motor_mph.innerHTML = `  145  `
  info_vel_motor_sec.innerHTML = `  4.2  `
  info_motor_mensaje.innerHTML = `  
  <div>
  </div>`
  info_fecha.innerHTML = `<p>Estimated delivery: December</p>`
}


function info_vel_11(info_vel) {
  let = info_vel_motor_mi = document.getElementById("num_millas")
  let = info_vel_motor_mph = document.getElementById("num_mph")
  let = info_vel_motor_sec = document.getElementById("num_sec")
  let info_motor_mensaje = document.getElementById("idmensaje3")
  let info_fecha = document.getElementById("fecha_entrega")

  info_vel_motor_mi.innerHTML = `  315  `
  info_vel_motor_mph.innerHTML = `  162  `
  info_vel_motor_sec.innerHTML = `  301  `

  info_motor_mensaje.innerHTML = `  
  <div>
      <h2>Plaid Upgrades</h2>
      <h6>Included</h6>
      <lu>
          <li>20’’ Überturbine Wheels</li>
          <li>Performance Brakes</li>
          <li>Carbon fiber spoiler</li>
          <li>Aluminum alloy pedals</li>
          <li>TLowered suspension</li>
      </lu>
    </div>
      `
  info_fecha.innerHTML = `<p>Estimated delivery: November</p>`
}

