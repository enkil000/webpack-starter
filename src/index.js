import { crearNombre} from './js/componentes'

const boton = document.querySelector('button')
const campo = document.querySelector('input')
boton.addEventListener('click', () => {
     let texto = campo.value
     crearNombre(texto)
     // a ver si todo va bien
})

