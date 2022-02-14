export const crearNombre = nombre => { 
     const h1 = document.createElement('h1');
     h1.innerText = `${nombre}`
     document.body.append(h1)
}

