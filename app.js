//DECLARO VARIABLE PARA GUARDAR EL TOTAL GASTADO POR EL USUARIO
let totalsup = 0;

function Usuario(userName,password,email)
{
    this.userName = userName;
    this.password = password;
    this.email = email;

}

//ARRAY DE ZAPATILLAS CREADA PARA GUARDAR INFORMACIÓN A UTILIZAR
const zapatillas = [
    {
        id: 1,
        title: 'YZY 450',
        price: 199,
    },
    {
        id: 2,
        title: 'YZY 350',
        price: 299,
    },
    {
        id: 3,
        title: 'YZY 500',
        price: 399,
    },
    {
        id: 4,
        title: 'YZY 550',
        price: 499,
    },        

];



function iniciarTienda()
{
    //MENU INICIAR, CONTIENE LA VARIABLE NOMBRE QUE PREGUNTA ANTES DE EJECUTAR ESTA FUNCION.
    alert('* ]¦•¦[ (bvssnkrs) ]¦•¦[  * \n BIENVENIDO '+newUser.userName+' \n LA MEJOR EXPERIENCIA DE COMPRA EN LÍNEA LA ENCONTRARÁS AQUÍ');

    //GUARDAMOS LA OPCIÓN QUE INGRESARÁ PARA NAVEGAR EN LA TIENDA, SI ES '1', ENTRARÁ EN EL WHILE Y SE EJECUTARÁ EL CÓDIGO, SI NO, SALDRÁ Y TERMINARÁ LA EJECUCIÓN.
    // ADEMÁS MUESTRO EL TOTAL QUE GASTARÁ EL USUARIO EN LA TIENDA.
    let op = prompt('* ]¦•¦[ (MENU TIENDA) ]¦•¦[ \n 1) COMPRAR ZAPATILLAS \n 2) DATOS DEL USUARIO \n 3) BUSCAR O FILTRAR \n 4) SALIR \n HAS GASTADO: $'+totalsup+' USD' );

    while(op == 1){

        // SEGUNDO MENÚ QUE PERMITE SELECCIONAR DISTINTAS OPCIONES CON DISTINTOS VALORES A COBRAR.
        // CICLO FOR PARA RECORRER ARRAY CON ZAPATILLAS PARA LISTARLAS.
        for (const zapatilla of zapatillas) {
            alert(' * ]¦•¦[ (ZAPATILLAS) ]¦•¦[ \n OPCIÓN '+zapatilla.id+' '+zapatilla.title+' \n Valor: '+zapatilla.price+' ');
        }
        
        let opz = prompt(' * \n 1) YZY 450 $199 USD \n 2) YZY 350 $299 USD \n 3) YZY 500 $399 USD \n 4) YZY 550 $499 USD \n ESCOJE UNA OPC.');
        if(opz == 1){
            // DINERO DEL USUARIO
            let val = prompt('* ]¦•¦[ (PAGAR) ]¦•¦[  * \n TOTAL $199 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 199;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');

            }else{
                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: $'+total+' USD / TOTAL: $'+val2+' USD');

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('* ]¦•¦[ (OPCIONES) ]¦•¦[ \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');

                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }
        if(opz == 2){
            // DINERO DEL USUARIO
            let val = prompt('* ]¦•¦[ (PAGAR) ]¦•¦[  * \n TOTAL $299 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 299;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');
            }else{

                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('* ]¦•¦[ (OPCIONES) ]¦•¦[ \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }

        }
        if(opz == 3){
            // DINERO DEL USUARIO
            let val = prompt('* ]¦•¦[ (PAGAR) ]¦•¦[  * \n TOTAL $399 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 399;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');
            }else{

                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('* ]¦•¦[ (OPCIONES) ]¦•¦[ \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }if(opz == 4){
            // DINERO DEL USUARIO
            let val = prompt('* ]¦•¦[ (PAGAR) ]¦•¦[  * \n TOTAL $499 USD, INGRESA CON CUANTO PAGAS');

            // VALOR DEL PRODUCTO SELECCIONADO
            let val2 = 499;

            // COMPROBACIÓN DE SI EL DINERO ALCANZA PARA COMPRAR EL PRODUCTO.
            if(val2 > val){

                // ALERTA INDICANDO QUE EL DINERO NO ES SUFICIENTE, DESPUÉS DE ESTO EL PROGRAMA TERMINARÁ.
                alert('DINERO NO SUFICIENTE.');
            }else{

                // DECLARAMOS EL TOTAL DEL VUELTO, Y ADEMÁS LA VARIABLE QUE MOSTRARÁ EL TOTAL QUE HEMOS GASTADO EN LA TIENDA.
                let total = val - val2;
                totalsup = totalsup+val2;
                alert('VUELTO: '+total+' / TOTAL: '+val2);

                //VOLVEMOS A MOSTRAR UN MENÚ, SI EL USUARIO INGRESA '1', SE VUELVE A EJECUTAR LA FUNCIÓN Y VUELVE A CARGAR LA TIENDA.
                let op = prompt('* ]¦•¦[ (OPCIONES) ]¦•¦[ \n TOTAL GASTADO: $'+totalsup+' USD \n 1) SEGUIR COMPRANDO \n 2) SALIR');
                if(op == 1){

                    //VUELVE A EJECUTARSE LA TIENDA
                    iniciarTienda();
                }
            }
        }else{

        }
        break;
    }
    if(op==2){
        //MUESTRA LOS DATOS GUARDADOS DEL OBJETO USUARIO.
        alert("* ]¦•¦[ (TU CUENTA) ]¦•¦[ \n NOMBRE DE USUARIO: "+newUser.userName+" \n PASSWORD: "+newUser.password+" \n EMAIL: "+newUser.email);
        iniciarTienda();
    }
        //FILTRADO DEL ARRAY, UTILICÉ EL METODO FILTER PARA FILTRAR PRECIOS MENORES AL INGRESADO, Y EL DE BUSCAR CON EXACTITUD.
    if(op==3){
        let opx = prompt("* ]¦•¦[ (BUSCAR O FILTRAR) ]¦•¦[ \n OPCIONES: \n 1)FILTRAR ZAPATILLAS X PRECIO \n 2)BUSCAR POR NOMBRE ");
        if(opx == 1){
        let preciox = prompt("* ]¦•¦[ (FILTRAR X PRECIO) ]¦•¦[ \n INGRESE EL VALOR MAXIMO A MOSTRAR \n ADVERTENCIA: DE INGRESAR VALORES MUY BAJOS, NO MOSTRARÁ NADA.");
        if(preciox < 199){
            alert("* ]¦•¦[ (FILTRAR X PRECIO) ]¦•¦[ \n VALOR INGRESADO INFERIOR AL MINIMO DE NUESTRAS ZAPATILLAS.")
        }else{
        //CREO OTRO ARRAY EN BASE A MI CRITERIO A FILTRAR EN BASE AL PRECIO.
        let baratas = zapatillas.filter(zapatilla => zapatilla.price <= preciox);
        for (const zapatilla of baratas) {
            alert(' * ]¦•¦[ (ZAPATILLAS) ]¦•¦[ \n OPCIÓN '+zapatilla.id+' \n '+zapatilla.title+' \n Valor: '+zapatilla.price+' ');
        }
        }
        iniciarTienda();
            
        }else if(opx == 2){
        let nombrex = prompt("* ]¦•¦[ (BUSCAR X NOMBRE) ]¦•¦[ \n INGRESE EL NOMBRE A BUSCAR \n ADVERTENCIA: EL NOMBRE DEBE ESTAR ESCRITO TAL CUAL APARECE EN NUESTRO SISTEMA. \n EJ: 'YZY 450'");
            //CREO OTRO ARRAY, QUE SERÁ EN BASE A LA EXACTITUD DEL TEXTO INGRESADO DEL USUARIO CON LOS NOMBRES DE LOS OBJETOS EN EL ARRAY, DE ENCONTRARLO LO IMPRIMIRÁ EN UN ALERT.
            let resultadox = zapatillas.find((el) => el.title == nombrex);     
            //SI NO EXISTE VALOR INGRESADO, MOSTRARÁ MENSAJE DE ERROR Y VOLVERÁ AL MENÚ.   
            if(resultadox == undefined){
                alert("NO EXISTEN COINICIDENCIAS");
                iniciarTienda();
            }else{
            alert("* ]¦•¦[ (RESULTADOS) ]¦•¦[ \n ID:"+resultadox.id+" \n NOMBRE: "+resultadox.title+" \n PRECIO: "+resultadox.price+" \n");
            iniciarTienda();
        }        
        }else{
            alert("OPCIÓN INGRESADA NO VÁLIDA, SE VOLVERÁ AL MENÚ");
            iniciarTienda();   
        }

    }
   
}

let userName = prompt('Hola! Bienvenido a Bvssnkrs, Te registraremos, ¿Cómo quieres que te llamemos?');

//SI EL USUARIO NO INGRESA DATOS, SERÁN SUSTITUIDOS POR UNOS POR DEFECTO.
if(userName == ''){
    userName= 'Invitado';
}
alert('Genial '+userName+'! , así te llamaremos ahora.');

//SI EL USUARIO NO INGRESÓ NOMBRE DE USUARIO, SE SALTARÁ EL REGISTRO Y ENTRARÁ COMO INVITADO.

if(userName == 'Invitado'){
    var password = '';
    var email = 'No Registrado';
}else{
    var password = prompt('Ingresa tu contraseña, para que guardemos tu cuenta.');
    var email = prompt('Muy bien, ahora ingresa tu email.');
    if(password == ''){
        password = 'Falta actualizar contraseña.';
    }
    if(email == ''){
        email = 'No registrado.';
    }
    
}
//CREACIÓN DE UN USUARIO EN BASE A LOS DATOS INGRESADOS POR LA PERSONA.
const newUser = new Usuario(userName,password,email);
iniciarTienda();
alert("* ]¦•¦[ (bvssnkrs) ]¦•¦[  * \n GRACIAS POR PREFERIR BVSSNKRS");