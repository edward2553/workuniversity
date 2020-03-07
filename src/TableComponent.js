import React , { Fragment, useState , useEffect }from 'react';
import Axios from 'axios';
import moment from 'moment';
import Row from "./Row";

const TableComponent = () => {

    const [lunesState,setLunes] = useState([]);
    const [martesState,setMartes] = useState([]);
    const [miercolesState,setMiercoles] = useState([]);
    const [juevesState,setJueves] = useState([]);
    const [viernesState,setViernes] = useState([]);
    const [sabadoState,setSabado] = useState([]);


   useEffect( async ()=>{

       let pedidos = []
       let semana = [];
       let noHaSupreado16Horas = [];
       let lunes = [];
       let martes = [];
       let miercoles = [];
       let jueves = [];
       let viernes = [];
       let sabado = [];
       let lunesFabricacion = 16;
       let martesFabricacion = 16;
       let miercolesFabricacion = 16;
       let juevesFabricacion = 16;
       let viernesFabricacion = 16;
       let sabadoFabricacion = 4;
       let sw = 1;
       let dia;
        const result = await Axios.get('http://localhost:3100/pedidos');
        if(result.status === 200){
            pedidos = result.data;
        }

       const organizarPedidosPorSemana = ()=>{
        for(let i = 0; i< pedidos.length;i++){
            if(sw===1 && pedidos[i].capacidad_fabricacion >= 0){
                dia = moment(pedidos[i].fecha_pedido).format('ddd');
            }
            switch (dia) {
                case 'Mon':
                    if (pedidos[i].capacidad_fabricacion <= lunesFabricacion ) {
                        lunes.push(pedidos[i]);
                        lunesFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= lunesFabricacion;
                        sw=1;
                    }else{
                        lunes.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= lunesFabricacion;
                        dia = 'Tue';
                        i -=1;
                        sw=0;
                    }
                    break;
                case 'Tue':
                    if (pedidos[i].capacidad_fabricacion <= martesFabricacion ) {
                        martes.push(pedidos[i]);
                        martesFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= martesFabricacion;
                        sw=1;
                    }else{
                        martes.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= martesFabricacion;
                        dia = 'Wed';
                        i -=1;
                        sw=0;
                    }
                    break;
                case 'Wed':
                    if (pedidos[i].capacidad_fabricacion <= miercolesFabricacion ) {
                        miercoles.push(pedidos[i]);
                        miercolesFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= miercolesFabricacion;
                        sw=1;
                    }else{
                        miercoles.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= miercolesFabricacion;
                        dia = 'Thu';
                        i -=1;
                        sw=0;
                    }
                    break;
                case 'Thu':
                    if (pedidos[i].capacidad_fabricacion <= juevesFabricacion ) {
                        jueves.push(pedidos[i]);
                        juevesFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= juevesFabricacion;
                        sw=1;
                    }else{
                        jueves.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= juevesFabricacion;
                        dia = 'Fri';
                        i -=1;
                        sw=0;
                    }
                    break;
                case 'Fri':
                    if (pedidos[i].capacidad_fabricacion <= viernesFabricacion ) {
                        viernes.push(pedidos[i]);
                        viernesFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= viernesFabricacion;
                        sw=1;
                    }else{
                        viernes.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= viernesFabricacion;
                        dia = 'Sat';
                        i -=1;
                        sw = 0;
                    }
                    break;
                case 'Sat':
                    if (pedidos[i].capacidad_fabricacion <= sabadoFabricacion ) {
                        sabado.push(pedidos[i]);
                        sabadoFabricacion -= pedidos[i].capacidad_fabricacion;
                        pedidos[i].capacidad_fabricacion -= sabadoFabricacion;
                        sw=1;
                    }else{
                        sabado.push(pedidos[i]);
                        pedidos[i].capacidad_fabricacion -= sabadoFabricacion;
                        dia = 'Mon';
                        i -=1;
                        sw=0;
                    }
                    break;
                default:
                    break;
            }
            
        }
        console.log('para el lunes hay');
        console.log(lunes);
        setLunes(lunes);
        console.log('para el martes hay');
        console.log(martes);
        setMartes(martes);
        console.log('para el miercoles hay');
        console.log(miercoles);
        setMiercoles(miercoles);
        console.log('para el jueves hay');
        console.log(jueves);
        setJueves(jueves);
        console.log('para el viernes hay');
        console.log(viernes);
        setViernes(viernes);
        console.log('para el sabado hay');
        console.log(sabado);
        setSabado(sabado);
       }
       organizarPedidosPorSemana();
   },[]);

    return ( 
    
    <Fragment>
        <h5 className="text-center">Dias de la semana con pedidos</h5>
        <table className="table mt-3 mb-3">
            <thead>
                <tr>
                { lunesState.length!=0 ?<th scope="col">Lunes</th>:null }
                { martesState.length!=0 ?<th scope="col">Martes</th>:null }
                { miercolesState.length!=0 ?<th scope="col">Miercoles</th>:null }
                { juevesState.length!=0 ?<th scope="col">Jueves</th>:null }
                { viernesState.length!=0 ?<th scope="col">Viernes</th>:null }
                { sabadoState.length!=0 ?<th scope="col">Sabado</th>:null }
                </tr>
            </thead>
        </table>
    </Fragment> 
    
    );
}
 
export default TableComponent;