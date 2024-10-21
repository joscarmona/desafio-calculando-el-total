precioUnitario = 400000

/* Selección del elemento span correspondientea a la clase .precio-unitario */
precio_unitarioSpan = document.querySelector(".precio-unitario");
precio_unitarioSpan.innerHTML = (precioUnitario).toLocaleString()

/* Selección del elemento span correspondientea a la clase .cantidad */
cantidad = document.querySelector('.cantidad')

/* Selección del elemento span correspondientea a la clase .precio-total */
precio_totalSpan = document.querySelector(".precio-total")
