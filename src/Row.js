import React , {Fragment} from 'react';

const Row = ( {pedido} ) => {
    return ( 
        <Fragment>

                <tr>
                    <td>asfsdff</td>
                    <td>{pedido.id_vehiculo}</td>
                    <td>{pedido.fecha_pedido}</td>
                    <td>{pedido.capacidad_fabricacion}</td>
                    <td>{pedido.cliente}</td>
                    <td>{pedido.precio}</td>
                    <td>{pedido.cantidad}</td>
                </tr>

        </Fragment>
     );
}
 
export default Row;